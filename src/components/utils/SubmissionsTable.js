import React, { useMemo, useEffect, useRef, forwardRef} from 'react'
import { useForm } from '../../contexts/FormContext'
import { useTable, useSortBy, useRowSelect, usePagination } from 'react-table'
import {
    Table, Thead, Tbody, Tr, Th, Td, Button, Input, Select
  } from "@chakra-ui/react"


export default function SubmissionsTable() {

    const { formArray } = useForm()
    useEffect(() => {
      console.log(formArray)
    }, [formArray])
    
    //console.log(formArray)
    let keys = []
    let columns = []
    if(formArray.length!==0) {
        keys = Object.keys(formArray[0]).sort()
        columns = keys.map(function(value) {
            return {
                "Header": value,
                "accessor": value
            }
        })
    }
    //console.log(columns)
    const data = useMemo(()=>formArray, [formArray])

    return (
        <div>
            <ReactTable columns={columns} data={data}/>
        </div>
    )
}

const IndeterminateCheckbox = forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef()
    const resolvedRef = ref || defaultRef

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  }
)

function ReactTable({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      prepareRow,
      headerGroups,
      page, // Instead of using 'rows', we'll use page,
      // which has only the rows for the active page

      // The rest of these things are super handy, too ;)
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state: { pageIndex, pageSize },
    } = useTable({
      columns,
      data,
      initialState: { pageIndex: 0 },
    }, useSortBy, usePagination, useRowSelect, 
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    })
  
    // Render the UI for your table
    return (
      <>
      <Table variant="striped" colorScheme="teal" size="md" {...getTableProps()} mt="8">
        <Thead>
          {headerGroups.map(headerGroup => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}<span>
                {column.isSorted
                  ? column.isSortedDesc
                    ? ' 🔽'
                    : ' 🔼'
                  : ''}
              </span></Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                })}
              </Tr>
            )
          })}
        </Tbody>
      </Table>
      <div className="pagination">
        <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </Button>{' '}
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </Button>{' '}
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </Button>{' '}
        <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </Button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <Input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <Select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </Select>
      </div>
      </>
    )
  }
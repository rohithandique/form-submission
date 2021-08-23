import React, { useMemo } from 'react'
import { useForm } from '../../contexts/FormContext'
import { useTable } from 'react-table'
import {
    Table, Thead, Tbody, Tr, Th, Td
  } from "@chakra-ui/react"


export default function SubmissionsTable() {

    const { formArray } = useForm()
    //console.log(formArray)
    let keys = []
    let columns = []
    if(formArray.length!==0) {
        keys = Object.keys(formArray[0])
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

function ReactTable({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    })
  
    // Render the UI for your table
    return (
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map(headerGroup => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
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
    )
  }
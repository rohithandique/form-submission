import React from 'react'
import {
    Menu, MenuButton, MenuList, MenuItem, Button, Link,
  } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useForm } from '../../contexts/FormContext';

export default function SubmissionsMenu(props) {

    const { setCurrentForm } = useForm();
    const { formList } = props;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Select Form
            </MenuButton>
            <MenuList>
                {formList.map((item, index)=>{
                    return <MenuItem key={index} onClick={()=>setCurrentForm(item)}>
                        <Link>{item}</Link>
                    </MenuItem>})
                }
            </MenuList>
        </Menu>
    )
}

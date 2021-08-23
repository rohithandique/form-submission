import React from 'react'
import {
    Menu, MenuButton, MenuList, MenuItem, Button, Link,
  } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useForm } from '../../contexts/FormContext';

export default function SubmissionsMenu(props) {

    const { currentForm, setCurrentForm } = useForm();
    const { formList } = props;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {currentForm===""? "Select Form" : currentForm}
            </MenuButton>
            <MenuList>
                {formList.sort().map((item, index)=>{
                    return <MenuItem key={index} onClick={()=>{
                        setCurrentForm(item)
                    }}>
                        <Link _hover={{textDecoration: "none"}}>{item}</Link>
                    </MenuItem>})
                }
            </MenuList>
        </Menu>
    )
}

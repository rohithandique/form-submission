/*
Original Repo: https://github.com/bjcarlson42/chakra-left-responsive-navbar

*/

import React from 'react'
import {
    Flex, Text, IconButton, Divider, Avatar, useColorModeValue, Button, Icon
} from '@chakra-ui/react'
import {
    FiHome, FiUser, FiSettings
} from 'react-icons/fi'

import { BsCreditCard } from 'react-icons/bs'
import { HamburgerIcon, CloseIcon, AddIcon} from '@chakra-ui/icons'
import { useAuth } from '../contexts/AuthContext';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';

export default function Sidebar(props) {
    const { navSize, changeNavSize } = props;
    const { currentUser } = useAuth();
    const { url } = useRouteMatch();

    return (
        <Flex
            pos="sticky"
            style={{height: 'calc(100vh - 80px)'}}
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            w={navSize === "small" ? "60px" : "250px"}
            flexDir="column"
            justifyContent="space-between"
            bg={useColorModeValue("gray.100","gray.800")}
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav"
            >
                <Flex
                    flexDir="column"
                    w="100%"
                >
                    { navSize==="small" ? <IconButton size="lg"
                        mt="10px"
                        background="none"
                        _hover={{ background: 'none' }}
                        icon={<HamburgerIcon />}
                        onClick={() => {
                            changeNavSize("large")
                        }}
                    /> : <></>}
                    { navSize==="large" ? <IconButton h="48px"
                        background="none"
                        _hover={{ background: 'none' }}
                        icon={<CloseIcon />}
                        onClick={() => {
                            changeNavSize("small")
                        }}
                    /> : <></>}
                    
                    <Button bg="gray.400" as={RouterLink} to={`${url}/submissions`} _hover={{ textDecor: 'none', bg: "#AEC8CA" }} _focus={{bg:"gray.400"}} mt="5" justifyContent="flex-start">
                        <Icon as={FiHome} fontSize="xl" />
                        <Text ml={5} display={navSize === "small" ? "none" : "flex"}>Submissions</Text>
                    </Button>
                    <Button bg="gray.400" as={RouterLink} to={`${url}/new-form`} _hover={{ textDecor: 'none', bg: "#AEC8CA" }}
                    _focus={{bg:"gray.400"}} mt="5" justifyContent="flex-start">
                        <Icon as={AddIcon} fontSize="xl" />
                        <Text ml={5} display={navSize === "small" ? "none" : "flex"}>New Form</Text>
                    </Button>
                    <Button bg="gray.400" as={RouterLink} to={`${url}/integrations`}  _hover={{ textDecor: 'none', bg: "#AEC8CA" }} _focus={{bg:"gray.400"}} mt="5" justifyContent="flex-start">
                        <Icon as={FiUser} fontSize="xl" />
                        <Text ml={5} display={navSize === "small" ? "none" : "flex"}>Integrations</Text>
                    </Button>
                    <Button bg="gray.400" _hover={{ textDecor: 'none', bg: "#AEC8CA" }} _focus={{bg:"gray.400"}} mt="5" justifyContent="flex-start">
                        <Icon as={BsCreditCard} fontSize="xl" />
                        <Text ml={5} display={navSize === "small" ? "none" : "flex"}>Billings</Text>
                    </Button>
                    <Button bg="gray.400" _hover={{ textDecor: 'none', bg: "#AEC8CA" }} _focus={{bg:"gray.400"}} mt="5" justifyContent="flex-start">
                        <Icon as={FiSettings} fontSize="xl" />
                        <Text ml={5} display={navSize === "small" ? "none" : "flex"}>Settings</Text>
                    </Button>
                </Flex>
                </Flex>
                
                <Flex mt={4} flexDir="column" w="100%">
                    <Divider display={navSize === "small" ? "none" : "flex"} />
                    <Button h="7.5vh" justifyContent="center" align="center" _hover={{ textDecor: 'none', bg: "#AEC8CA" }} _focus={{bg:"gray.400"}}>
                        <Avatar size="sm" src="avatar-1.jpg" cursor="pointer"/>
                        <Text ml="2" display={navSize === "small" ? "none" : "flex"}>
                            {currentUser.displayName ?currentUser.displayName : "username"}
                        </Text>
                    </Button>
                </Flex>
        </Flex>
    )
}
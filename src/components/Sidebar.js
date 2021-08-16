/*
Original Repo: https://github.com/bjcarlson42/chakra-left-responsive-navbar

*/

import React from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    useColorModeValue,
    Button,
    Icon
} from '@chakra-ui/react'
import {
    FiHome,
    FiCalendar,
    FiUser,
    FiSettings
} from 'react-icons/fi'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
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
                    
                    <Button as={RouterLink} to={`${url}`} _hover={{ textDecor: 'none', bg: "#AEC8CA" }} _focus={{bg:"gray.400"}} mt="5" justifyContent="flex-start">
                        <Icon as={FiHome} fontSize="xl" />
                        <Text ml={5} display={navSize === "small" ? "none" : "flex"}>Dashboard</Text>
                    </Button >
                    <Button as={RouterLink} to={`${url}/stats`} _hover={{ textDecor: 'none', bg: "#AEC8CA" }} _focus={{bg:"gray.400"}} mt="5" justifyContent="flex-start">
                        <Icon as={FiCalendar} fontSize="xl" />
                        <Text ml={5} display={navSize === "small" ? "none" : "flex"}>Calendar</Text>
                    </Button>
                    <Button  _hover={{ textDecor: 'none', bg: "#AEC8CA" }} _focus={{bg:"gray.400"}} mt="5" justifyContent="flex-start">
                        <Icon as={FiUser} fontSize="xl" />
                        <Text ml={5} display={navSize === "small" ? "none" : "flex"}>Clients</Text>
                    </Button>
                    <Button  _hover={{ textDecor: 'none', bg: "#AEC8CA" }} _focus={{bg:"gray.400"}} mt="5" justifyContent="flex-start">
                        <Icon as={FiSettings} fontSize="xl" />
                        <Text ml={5} display={navSize === "small" ? "none" : "flex"}>Settings</Text>
                    </Button>
                </Flex>
                {/*
                <NavItem navSize={navSize} icon={FiHome} title="Dashboard" description="This is the description for the dashboard." />
                <NavItem navSize={navSize} icon={FiCalendar} title="Calendar" />
                <NavItem navSize={navSize} icon={FiUser} title="Clients" />
                <NavItem navSize={navSize} icon={IoPawOutline} title="Animals" />
                <NavItem navSize={navSize} icon={FiDollarSign} title="Stocks" />
                <NavItem navSize={navSize} icon={FiBriefcase} title="Reports" />
                <NavItem navSize={navSize} icon={FiSettings} title="Settings" />
                */}
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
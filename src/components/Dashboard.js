import { Flex, Box, useColorModeValue, Center } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Username from './utils/Username'
import { useAuth } from '../contexts/AuthContext';
import { Switch, Route, useRouteMatch } from "react-router-dom";

export default function Dashboard() {

  const { currentUser } = useAuth();
  const [navSize, changeNavSize] = useState("large")
  let { path } = useRouteMatch();

  return (
    <Box bg={useColorModeValue("white","gray.700")}>
      {currentUser.displayName ? <></> : <Username />}
      <Navbar />
      
      <Flex>
        <Sidebar navSize={navSize} changeNavSize={changeNavSize} />
        <Switch>
          <Route exact path={path}>
            <Center w={navSize==="large"? "calc(100vw - 250px)" : "calc(100vw - 60px)"} 
            bg="gray.400">Hello World</Center>
          </Route>
          <Route path={`${path}/stats`}>
            <Center w={navSize==="large"? "calc(100vw - 250px)" : "calc(100vw - 60px)"} 
            bg="gray.400">Rohit Handique</Center>
          </Route>
        </Switch>
        
        
      </Flex>
    </Box>
  )
}

import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Username from './utils/Username'
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {

  const { currentUser } = useAuth();

  return (
    <Box bg={useColorModeValue("white","gray.700")}>
      {currentUser.displayName ? <></> : <Username />}
      <Navbar />
      <Sidebar />
    </Box>
  )
}

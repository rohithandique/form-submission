import React from 'react'
import AuthModal from './auth/AuthModal'
import { Box, ButtonGroup, Heading } from '@chakra-ui/react'
import { useAuth } from '../contexts/AuthContext';
import ToggleTheme from './ToggleTheme';

export default function Hero(props) {

    const { currentUser } = useAuth();
    console.log(currentUser)

    return (
        <Box as="section">
            <Box
                maxW="2xl"
                mx="auto"
                px={{ base: '6', lg: '8' }}
                py={{ base: '16', sm: '20' }}
                textAlign="center"
            >
                <Heading as="h2" size="3xl">
                Ready to Grow?
                </Heading>
                <ButtonGroup mt="8">
                    <AuthModal login={true} value={currentUser}/>
                    <AuthModal login={false} value={currentUser}/>
                </ButtonGroup>
                <ToggleTheme />
            </Box>
        </Box>
    )
}
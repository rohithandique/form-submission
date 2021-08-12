import React from 'react'
import { Box, Heading, Link, Button, ButtonGroup } from '@chakra-ui/react'
import LogOut from "./auth/LogOut"
import { Link as RouterLink } from 'react-router-dom'
import ToggleTheme from './ToggleTheme'

export default function Dashboard() {

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
                    Dashboard
                </Heading>
                <ButtonGroup>
                    <Link as={RouterLink} to="/" style={{ textDecoration: 'none' }}>
                        <Button mt="8" size="lg" type="button">
                            Home
                        </Button>
                    </Link>
                    <LogOut />
                </ButtonGroup>
                <ToggleTheme />
            </Box>
        </Box>
    )
}

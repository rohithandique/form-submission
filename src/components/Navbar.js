import React, { useState, useEffect } from "react";
import {
  Box, Flex, useColorModeValue, HStack, Button, useDisclosure,
  VStack, IconButton, CloseButton, Link
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import ToggleTheme from './ToggleTheme'
import { Link as RouterLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './auth/AuthModal'

export default function Dashboard2() {
    const bg = useColorModeValue("#F9FAFB", "gray.800");
    const mobileNav = useDisclosure();
    const { currentUser } = useAuth();
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        window.onscroll = function() {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    }, []);
    console.log(currentUser)

    return (
        
    <>
        <Flex alignItems="center" justifyContent="space-between" py="4" px="8" style={{position: "sticky", top: "0", zIndex: "99"}} bg={bg} boxShadow={scrolled ? "md" : "none"}>
            <Flex>
            <Link as={RouterLink} to="/" style={{ textDecoration: 'none' }}>
                <Button size="lg" type="button">
                    Home
                </Button>
            </Link>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
                <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                display={{ base: "none", md: "inline-flex" }}
                >
                    <ToggleTheme />
                    <AuthModal login={true} value={currentUser}/>
                    <AuthModal login={false} value={currentUser}/>    
                </HStack>
                <Box display={{ base: "inline-flex", md: "none" }}>
                <IconButton
                    display={{ base: "flex", md: "none" }}
                    aria-label="Open menu"
                    fontSize="20px"
                    color={useColorModeValue("gray.800", "inherit")}
                    variant="ghost"
                    icon={<AiOutlineMenu />}
                    onClick={mobileNav.onOpen}
                />

                <VStack
                    pos="absolute"
                    top={0}
                    left={0}
                    right={0}
                    display={mobileNav.isOpen ? "flex" : "none"}
                    flexDirection="column"
                    p={2}
                    pb={4}
                    m={2}
                    bg={bg}
                    spacing={3}
                    rounded="sm"
                    shadow="sm"
                >
                    <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                    />

                <ToggleTheme />
                <Button mt="4" size="lg" type="button" variant="outline">Sign in</Button>
                <Button mt="4" size="lg" type="button">
                    Get Started
                </Button>
                </VStack>
                </Box>
            </HStack>
        </Flex>
        </>
    );
}

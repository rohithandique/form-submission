import React, { useState, useEffect } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { 
    Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, 
    ModalBody, ModalCloseButton, useDisclosure, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
export default function AuthModal(props) {
    const { login, value } = props;
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [hasAccount, setHasAccount] = useState(false)
    useEffect(() => {
        if(login) setHasAccount(true);
        else setHasAccount(false);
    }, [login, isOpen])
    
    return (
        <>

        {/*conditionally rendering the buttons based on current users' value.
        need to make it less complex*/}
        {!login && value!==null ? <></> : (
            login && value!==null ? 
            <Link as={RouterLink} to="/dashboard" style={{ textDecoration: 'none' }}>
                <Button size="lg" type="button">
                    Dashboard
                </Button>
            </Link> : 
            (login ? <Button size="lg" onClick={onOpen}>Login</Button> : 
            <Button size="lg" onClick={onOpen}>Sign Up</Button>)
        )}

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                {
                    hasAccount ?
                    <span>Log In to your Account</span> :
                    <span>Get Started</span>
                }
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {hasAccount ? <Login /> : <SignUp />}
                </ModalBody>

                <ModalFooter>
                    {hasAccount ?
                        <span>
                            Create an account?
                            <Link onClick={()=>setHasAccount(!hasAccount)} ml="1">Sign Up</Link>
                        </span> 
                    : 
                        <span>
                            Already have an account?
                            <Link onClick={()=>setHasAccount(!hasAccount)} ml="1">Log In</Link>
                        </span>}
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}


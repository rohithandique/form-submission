import React, { useEffect, useState, useRef } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, 
    ModalBody, ModalCloseButton, useDisclosure,
    FormControl, FormLabel, Input, FormHelperText, Alert, AlertIcon 
} from '@chakra-ui/react';
import { useHistory } from "react-router"

export default function Username() {

    const { currentUser } = useAuth();
    const [userNameExists, setUserNameExists] = useState(false)
    const [loading, setLoading] = useState(false);
    const { onClose } = useDisclosure()
    const [usernameError, setUsernameError] = useState('');
    const usernameRef = useRef();
    const history = useHistory();

    useEffect(()=>{
        (currentUser.displayName ? setUserNameExists(true) : setUserNameExists(false))
    }, [currentUser.displayName])
    console.log(userNameExists)

    function addUsername() {
        setUsernameError("");
        setLoading(true);
        currentUser.updateProfile({
            displayName: usernameRef.current.value
        }).then(()=>{
            console.log(currentUser.displayName)
            history.push("/dashboard")
        }).catch(error=>{
            setUsernameError("some username error")
        }) 
        setLoading(false);

    }

    return (

        <Modal isOpen={userNameExists ? false : true } onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Set Username
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={addUsername}>
                        {usernameError&&(
                            <Alert status="error">
                                <AlertIcon />
                                {usernameError}
                            </Alert>
                        )}
                        <FormControl id="username" isRequired>
                            <FormLabel>New Username</FormLabel>
                            <Input type="text" ref={usernameRef}/>
                            <FormHelperText>Something something</FormHelperText>
                        </FormControl>
                    </form>
                <Button disabled={loading} mt="2" type="submit" size="lg" onClick={()=>addUsername()}>
                    Next
                </Button>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

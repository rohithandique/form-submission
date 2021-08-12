import React, { useRef, useState } from "react"
import AuthSocial from "./AuthSocial"
import DividerWithText from "../utils/DividerWithText"
import {
    FormControl, FormLabel, FormHelperText, 
    Input, Button, Stack, Alert, AlertIcon, IconButton, InputGroup,
    InputRightElement, useDisclosure,
  } from "@chakra-ui/react"
import { useAuth } from "../../contexts/AuthContext"
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { useHistory } from "react-router"

export default function Login() {

    const { isOpen, onToggle } = useDisclosure()
    const emailRef = useRef();
    const passwordRef = useRef();
    const { logIn } = useAuth();
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const onClickReveal = () => {
        onToggle()
        const input = passwordRef.current;
    
        if (input) {
            input.focus({
            preventScroll: true,
            })
            const length = input.value.length * 2
            requestAnimationFrame(() => {
            input.setSelectionRange(length, length)
            })
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setEmailError('');
            setPasswordError('');
            setLoading(true);
            await logIn(emailRef.current.value, passwordRef.current.value);
            setLoading(false);
            history.push("/dashboard")
        } catch(error) {
            console.log(error);
            setEmailError('Failed to sign in');
        }
        
    }

    return (
        <Stack spacing="6">
            <form onSubmit={handleSubmit}>
                {emailError&&(
                    <Alert status="error">
                        <AlertIcon />
                        {emailError}
                    </Alert>
                )}
                {passwordError&&(
                    <Alert status="error">
                        <AlertIcon />
                        {passwordError}
                    </Alert>
                )}
                <FormControl id="email" isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input type="email" ref={emailRef}/>
                </FormControl>
                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <InputRightElement>
                        <IconButton
                            bg="transparent !important"
                            variant="ghost"
                            aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                            icon={isOpen ? <HiEyeOff /> : <HiEye />}
                            onClick={onClickReveal}
                        />
                        </InputRightElement>
                        <Input
                        ref={passwordRef}
                        name="password"
                        type={isOpen ? 'text' : 'password'}
                        autoComplete="current-password"
                        required
                        />
                    </InputGroup>
                    <FormHelperText>Forgot Password?</FormHelperText>
                </FormControl>
                <Button disabled={loading} mt="2" type="submit" size="lg">Log In</Button>
            </form>
            <DividerWithText mt="6">or continue with</DividerWithText>
            <AuthSocial />
        </Stack>
    )
}


import React from 'react'
import { Button } from '@chakra-ui/react'
import { useAuth } from "../../contexts/AuthContext"
import { useHistory } from 'react-router';

export default function LogOut() {

    const { logOut } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        try {
            await logOut();
            history.push("/");
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <Button size="lg" onClick={handleLogout}>Log Out</Button>
    )
}

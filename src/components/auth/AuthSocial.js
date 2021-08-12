import React from 'react'
import { SimpleGrid, Button, VisuallyHidden, } from '@chakra-ui/react'
import { FaGoogle, FaGithub } from 'react-icons/fa'
export default function AuthSocial() {
    return (
        <SimpleGrid mt="6" columns={2} spacing="3">
          <Button color="currentColor" variant="outline">
            <VisuallyHidden>Login with Google</VisuallyHidden>
            <FaGoogle />
          </Button>
          <Button color="currentColor" variant="outline">
            <VisuallyHidden>Login with Github</VisuallyHidden>
            <FaGithub />
          </Button>
        </SimpleGrid>
    )
}

import React from 'react'
import { Text } from '@chakra-ui/layout'

export default function Copyright() {
    return (
        <Text fontSize="sm">
            &copy; {new Date().getFullYear()} Envelope, Inc. All rights reserved.
        </Text>
    )
}
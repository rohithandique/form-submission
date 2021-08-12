import React from 'react'
import { useColorMode, Button } from '@chakra-ui/react'
export default function ToggleTheme() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button mt="4" size="lg" onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>
    )
}
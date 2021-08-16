import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Stack,
  Button
} from "@chakra-ui/react";
import AuthModal from "../auth/AuthModal";
import { useAuth } from '../../contexts/AuthContext'

export default function CTA() {
  const { currentUser } = useAuth();
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.800")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      
    >
      <Box bg={useColorModeValue("gray.100", "gray.600")} rounded={["none", "lg"]}>
        <Box
          maxW="7xl"
          w={{ md: "3xl", lg: "4xl" }}
          mx="auto"
          py={{ base: 12, lg: 16 }}
          px={{ base: 4, lg: 8 }}
          display={{ lg: "flex" }}
          alignItems={{ lg: "center" }}
          justifyContent={{ lg: "space-between" }}
        >
          <chakra.h2
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color={useColorModeValue("gray.400", "gray.400")}
          >
            <chakra.span display="block">Ready to dive in?</chakra.span>
            <chakra.span
              display="block"
              color={useColorModeValue("gray.600", "gray.800")}
            >
              Start your free trial today.
            </chakra.span>
          </chakra.h2>
          <Stack
            direction={{ base: "column", sm: "row" }}
            mt={{ base: 8, lg: 0 }}
            shrink={{ lg: 0 }}
          >
            <AuthModal login={false} value={currentUser} />
            <Button size="lg" bg={useColorModeValue("gray.500", "gray.400")}>Learn More</Button>
          </Stack>
          
        </Box>
      </Box>
    </Flex>
  );
}

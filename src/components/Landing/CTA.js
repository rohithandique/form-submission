import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Stack,
  Link,
} from "@chakra-ui/react";

export default function CTA() {
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
            <Link
              w={["full", "auto"]}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              color={useColorModeValue("white")}
              bg={useColorModeValue("gray.600", "gray.700")}
              _hover={{
                bg: useColorModeValue("gray.700", "gray.800"),
              }}
            >
              Get started
            </Link>
            <Link
              w={["full", "auto"]}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              color="gray.600"
              bg="white"
              _hover={{
                bg: "gray.300",
              }}
            >
              Learn More
            </Link>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
}

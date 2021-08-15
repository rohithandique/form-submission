import React from "react";
import { chakra, Box, useColorModeValue, Icon, Image, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

export default function Hero(){
  const bg = useColorModeValue("#F9FAFB", "gray.800");
  return (
    <Box pos="relative" overflow="hidden" bg={bg}>
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          maxW={{ lg: "2xl" }}
          w={{ lg: "full" }}
          zIndex={1}
          bg={bg}
          border="solid 1px transparent"
        >
          <Icon
            display={{ base: "none", lg: "block" }}
            position="absolute"
            right={0}
            top={0}
            bottom={0}
            h="full"
            w={48}
            color={bg}
            transform="translateX(50%)"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </Icon>
          <Box
            mx="auto"
            maxW={{ base: "7xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box
              w="full"
              textAlign={{ sm: "center", lg: "left" }}
              justifyContent="center"
              alignItems="center"
            >
              <chakra.h1
                fontSize={{ base: "4xl", md: "6xl" }}
                fontWeight="bold"
                lineHeight="none"
                letterSpacing={{ base: "normal", md: "tight" }}
                color={useColorModeValue("gray.900",'gray.100')}
              >
                <chakra.h1 display={{ base: "block", xl: "inline" }}>
                  Data to enrich your{" "}
                </chakra.h1>
                <chakra.h1
                  display={{ base: "block", xl: "inline" }}
                  color={useColorModeValue("brand.600", "brand.400")}
                >
                  online business
                </chakra.h1>
            </chakra.h1>
            <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                fontSize={{ sm: "lg", md: "xl" }}
                maxW={{ sm: "xl" }}
                mx={{ sm: "auto", lg: 0 }}
                color="gray.500"
              >
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
            </chakra.p>
            <InputGroup mt="4" size="lg" w="full" display={{ base: "none", lg: "flex" }}>
                <Input
                size="lg"
                color="brand.900"
                type="email"
                placeholder="Enter your email..."
                required="true"
                />
                <InputRightElement w="auto">
                <Button
                    as="a"
                    colorScheme="gray"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    w={{ base: "full", sm: "auto" }}
                    mb={{ base: 2, sm: 0 }}
                    size="lg"
                    cursor="pointer"
                >
                    Get Started
                </Button>
                </InputRightElement>
            </InputGroup>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position={{ lg: "absolute" }}
        top={{ lg: 0 }}
        bottom={{ lg: 0 }}
        right={{ lg: 0 }}
        w={{ lg: "50%" }}
        border='solid 1px transparent'
      >
        <Image
          h={[56, 72, 96, "full"]}
          w="full"
          fit="cover"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
          loading="lazy"
        />
      </Box>
    </Box>
  );
};


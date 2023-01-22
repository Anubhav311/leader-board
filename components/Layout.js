import * as React from "react";
// import Router from "next/router";
// import { useAuth } from "../auth/AuthContext";
// import { useRouter } from "next/router";
import {
  Image,
  Flex,
  Button,
  HStack,
  chakra,
  Container,
  Heading,
  Divider,
  Box,
  Text,
} from "@chakra-ui/react";

const data = [
  {
    label: "profile",
  },
];

function Header() {
  return (
    <>
      <chakra.header
        w="100%"
        id="header"
        position="fixed"
        backgroundColor="rgba(255, 255, 255, 0.8)"
        backdropFilter="saturate(180%) blur(5px)"
        zIndex='200'
      >
        <Flex h='70px' w="100%" px="6" py="5" align="center" justify="space-between">
          <Heading ml='20px' as="h2" size="md">
            LeaderBoard
          </Heading>
          {/* <HStack as="nav" spacing="5">
            {data.map((item, i) => (
              <Button variant="nav"> {item.label} </Button>
            ))}
          </HStack> */}
          <HStack mr='20px'>
            <Button colorScheme='green' mr='20px'>Create</Button>
            <Button variant='link'>Profile</Button>
          </HStack>
        </Flex>
        <Divider />
      </chakra.header>
    </>
  );
}

export default function Layout({ userRole, children }) {
  return (
    <>
      <div
        style={{
          margin: "0",
          width: "100%"
        }}
        >
        <Header />
        <div
          style={{
            height: "100%",
            display: "flex",
            position: "fixed",
            width: "100%",
            zIndex: "0"
          }}
        >
          <Box w="20%" p={5} h="100%" display='flex' flexDirection='column' pt="90px">
            <Text fontWeight='500' fontSize=".875rem"> Teams </Text>
            <Text fontWeight='500' fontSize=".875rem"> Teams </Text>
            <Text fontWeight='500' fontSize=".875rem"> Teams </Text>
            <Text fontWeight='500' fontSize=".875rem"> Teams </Text>
          </Box>
          {children}
        </div>
      </div>
      {/* </Box> */}
    </>
  );
}




import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleLogin = () => {
    // handle login 
    console.log("login clicked")
}


  return (
    <Box
      w={"300px"}
      m={"auto"}
      textAlign={"center"}
      bg={"gray"}
      borderRadius={4}


    >
      <VStack p={4} >
      <Text>Login</Text>
      <Input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}  />
      <Input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleLogin}> Log In </Button>
      </VStack>
    </Box>
  );
};

export default Login;

import { Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Flex bg={"blue.500"} justifyContent={"space-between"} p={4} fontWeight={"bold"} mb={6} > 
    <Link>My Library App</Link>
    <Flex gap={10}>
    <Link as={RouterLink} to ="/" >Home</Link>
    <Link as={RouterLink} to = "/login" >Login</Link>
    <Link as={RouterLink} to = "/register" >Register</Link>
    </Flex>

    </Flex>
  )
}

export default Navbar

import React from 'react'
import { FaRegPlusSquare } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";

import {Container, Flex, Text, HStack, useColorMode, useColorModeValue} from '@chakra-ui/react'
import {Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <Container maxW={"1024px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={{
          base:"column",
          sm:"row"
        }}
      >

        <Text
          fontSize={{base:22, sm: 16}}
          fontWeight='bold'
          textTransform='uppercase'
          textAlign='center'
          bgGradient='linear(to-l, cyan.400, blue.500)'
          bgClip='text'
        >
          <Link to="/">Product Store 🛒</Link>
        </Text>

        <HStack spacing='2' alignItems='center'>
          <Link to="/create">
            <Button>
              <FaRegPlusSquare fontSize={20} />
            </Button>
          </Link>

          <Button fontSize={20} onClick={toggleColorMode}>
            {colorMode === "dark" ? <LuSun/> : <IoMoon/>}
          </Button>

        </HStack>

      </Flex>
    </Container>
  )
}

export default Navbar

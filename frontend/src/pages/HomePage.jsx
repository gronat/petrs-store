import React from 'react'
import { useEffect } from 'react';
import {Container, VStack, HStack, Text} from "@chakra-ui/react"
import {SimpleGrid} from "@chakra-ui/react"
import { GiSadCrab } from "react-icons/gi";
import {Link} from "react-router-dom"
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';


const HomePage = () => {
   const {fetchProducts, products} = useProductStore();


   // useEffect( () => {fetchProducts()}, [fetchProducts])
   useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

   console.log("Products: ", products)
  return (
   <Container maxW={"container.xl"} py={12}>
      <VStack spacing={8}>
         <Text
            as={"div"}
            fontSize={{base:22, sm: 16}}
            fontWeight='bold'
            textTransform='uppercase'
            textAlign='center'
            bgGradient='linear(to-l, cyan.400, blue.500)'
            bgClip='text'
         >
            <HStack> 
               <Text>Current Products</Text> 
               <Text fontSize={28}>🛍️</Text>
            </HStack>
         </Text>

         <SimpleGrid 
            columns={{
               base: 1,
               md: 2,
               lg: 3,
            }} 
            spacing={10}
            w="full"
         >
            {products
               .filter(product => product)
               .map(product => (
                  <ProductCard key={product._id} product={product}/>
               ))}
         </SimpleGrid>
         
         {useProductStore.length === 0 && (
            <Text textAlign={"center"} fontSize="xl" fontWeight={"bold"} color={"gray.500"}>
               <HStack>
                  <Text>No product found.</Text>
                  <GiSadCrab />
                  <Link to="/create">
                     <Text as="span" color={"blue.500"} _hover={{textDecor:"underline"}}>
                        Create product
                     </Text>
                  </Link>
               </HStack>
            </Text>
         )}
      </VStack>

   </Container>
  )
}

export default HomePage

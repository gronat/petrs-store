import { Container, VStack, Heading, Box } from '@chakra-ui/react';
import { useColorModeValue, Input, Button } from '@chakra-ui/react';

import React from 'react'
import { useProductStore } from '../store/product';
import { useToast } from '@chakra-ui/react'



const CreatePage = () => {
   const [newProduct, setNewProduct] = React.useState({
      name: "",
      price: "",
      image: "",
   });

   const toast = useToast()

   const { createProduct } = useProductStore();

   const handleAddproduct = async () => {
      console.log("Waiting to add product")
      const {success, message} = await createProduct(newProduct)
      if (success) {
         toast({
            title: "Success!",
            description: message,
            status: "success",
            isClosable: true,
         })
      } else {
         toast({
            title: "Error!",
            description: message,
            status: "error",
            isClosable: true,
         })
      }
      
      setNewProduct({name:"", price:"", image:""})
      console.log("Success", success)
      console.log("Message", message)
   };


   return (
    <Container maxW="container.sm">
      <VStack spacing={8}>
         <Heading size="2xl" as="h1" textAlign={"center"} ms={8}>
            Create New Product
         </Heading>


         <Box
            w={"full"} bg = {useColorModeValue("white", "gray.800")}
            p={6} rounded={"lg"} shadow={"md"}
         >
            <VStack spacing={4}>

               <Input 
                  placeholder="Product Name"
                  name="name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value})}
               />
               <Input 
                  placeholder="Price"
                  name="price"
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})}
               />
               <Input 
                  placeholder="Product Image"
                  name="image"
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})}
               />

            </VStack>
         </Box>

         <Button colorScheme='blue' w={'full'} onClick={handleAddproduct}>
            Add product
         </Button>
      </VStack>

    </Container>
  )
}

export default CreatePage

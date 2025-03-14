import React from 'react'
import { useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'
import {
  Box, VStack, Text, Image, Heading, HStack,
  IconButton, useToast, Modal, ModalContent, ModalOverlay,
  Input, Button, ModalHeader, ModalCloseButton, ModalBody, ModalFooter
} from '@chakra-ui/react'
import { useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { useProductStore } from '../store/product';



const ProductCard = ({product}) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  
  const textColor = useColorModeValue("gray.600", "gray.200")
  const bg = useColorModeValue("white", "gray.800")
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {deleteProduct, updateProduct} = useProductStore();
  const toast = useToast();


  const handleDeleteProduct = async (pid) => {
    const {success, message} = await deleteProduct(pid)
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      })
    }
  }

  const handleUpdateProduct = async (pid, updatedProduct) => {
		const { success, message } = await updateProduct(pid, updatedProduct);
		onClose();
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: "Product updated successfully",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}
	};
  

  return (
    <Box 
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "lg"}}
      bg={bg}
    >
      <Image 
        src={product.image || "https://placehold.co/600x400"}
        alt={product.name} 
        h="48" 
        w="full" 
        objectFit="cover"
        fallbackSrc="https://placehold.co/600x400"
      />
      
      <Box>
        <Heading as="h3" size="md" mb="2">Name: {product.name}</Heading>
        
        <Text fontWeight="bold" fontSize="xl" color={textColor} mb="4">
          Price: ${product.price}
        </Text>
        
        <HStack spacing="2">
          <IconButton icon={<CiEdit />} colorScheme='blue' onClick={onOpen}/>
          <IconButton icon={<MdDelete />}  colorScheme='red' onClick={() => handleDeleteProduct(product._id)}/>
        </HStack>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={4}>
                <Input 
                  placeholder="Product Name"
                  name="name"
                  value={updatedProduct.name}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value})}
                />
                <Input 
                  placeholder="Price"
                  name="price"
                  type="number"
                  value={updatedProduct.price}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: Number(e.target.value)})}
                />
                <Input 
                  placeholder="Product Image"
                  name="image"
                  value={updatedProduct.image}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value})}
                />
              </VStack>
            </ModalBody>

            <ModalFooter>
            <Button 
                colorScheme='blue'
                variant='ghost' 
                onClick={() => handleUpdateProduct(product._id, updatedProduct)}
              >
                Update
              </Button>
              <Button  mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

      </Box>

    </Box>
  )
}

export default ProductCard

import Lainnya from "./components/Lainnya"
import { Toast, useToast } from "@chakra-ui/react"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Stack,
    Input,
    Box,
    FormLabel,
    Textarea,
    Button,
    useDisclosure
  } from '@chakra-ui/react'
import { useRef, useState } from "react"

function Comment() {
    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = useRef()

    async function commentApi(e){
        setIsLoading(true)
        const myForm = document.getElementById("comment-form")
        e.preventDefault()
        const name = myForm.name.value || "Anonim"
        const comment = myForm.comment.value
        if(!myForm.comment.value){
            setIsLoading(false)
            toast({
                status: "error",
                title: "Commentnya mana?",
                description: "comment required",
                isClosable: true,
                duration: 3000
            })
            return
        }
        try{
            // const response = await fetch("", {
            //     method: "POST",
            //     headers: {"Content-Type": "application/json"},
            //     body: JSON.stringify({
            //         name: name,
            //         comment
            //     })
            // })
            // const data = await response.json()
            if(true){
                toast({
                    status: "success",
                    title: "Ty commentnya :)",
                    description: "comment yg bagus :v",
                    isClosable: true
                })
            }
            
        }catch(err){
            toast({
                status: "error",
                title: "Oops ada error",
                description: "sory",
                isClosable: true
            })
        }finally{
            setIsLoading(false)
        }
        
    }
  
    return (
      <>
        <Button onClick={onOpen} w={"45%"} p={0} sx={{':focus': { outline: 'none'}}} h={""}>
            <Lainnya imgUrl={"comment.png"} title={"Comment"} wid={"100%"}/>
        </Button>
        <Drawer
            isOpen={isOpen}
            placement='right'
            initialFocusRef={firstField}
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
                Comment dong
            </DrawerHeader>

            <DrawerBody>
                <Stack spacing='24px'>
                    <form id="comment-form" onSubmit={commentApi}>
                        <Box>
                            <FormLabel htmlFor='username'>Name</FormLabel>
                            <Input name="name" placeholder='nama (kosong pun gpp)'/>
                        </Box>
                        <Box mt={4}>
                            <FormLabel htmlFor='desc'>Comment</FormLabel>
                            <Textarea name="comment" id='comment' placeholder="bagus/jelek/keren/saran/bebas/ dll"/>
                        </Box>
                    </form>
                </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth='1px'>
                <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
                </Button>
                <Button colorScheme='blue' type="submit" form="comment-form"
                spinnerPlacement='start' loadingText={"Loading"} isLoading={isLoading}>Submit</Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
      </>
    )
  }

export default Comment
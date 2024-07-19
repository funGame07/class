import Lainnya from "./components/Lainnya"
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
import { useRef } from "react"

function Comment() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = useRef()

    function commentApi(e){
        const myForm = document.getElementById("comment-form")
        e.preventDefault()
        console.log(myForm.name.value)
        console.log(myForm.comment.value)
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
                Comment
            </DrawerHeader>

            <DrawerBody>
                <Stack spacing='24px'>
                    <form id="comment-form" onSubmit={commentApi}>
                        <Box>
                            <FormLabel htmlFor='username'>Name</FormLabel>
                            <Input name="name" placeholder='nama (kosong pun gpp)'/>
                        </Box>
                        <Box mt={4}>
                            <FormLabel htmlFor='desc'>Description</FormLabel>
                            <Textarea name="comment" id='comment' placeholder="bagus/jelek/keren/saran/dll"/>
                        </Box>
                    </form>
                </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth='1px'>
                <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
                </Button>
                <Button colorScheme='blue' type="submit" form="comment-form">Submit</Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
      </>
    )
  }

export default Comment
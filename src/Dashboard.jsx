import { Container, Image, Box, Button, Text, AbsoluteCenter, Flex, Stack} from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { FiSun } from "react-icons/fi";
import { GiMoon } from "react-icons/gi";
import { FaAnglesDown } from "react-icons/fa6";


import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'


const Dashboard = () => {
    const [images, setImages] = useState("pc1.png")
    const [imgIndex, setImgIndex] = useState(0)
    const allImages = ["pc1.png", "pc2.png", "pc3.png", "pc4.png", "pc5.png", "pc6.png", "pc7.png"]

    useEffect(() =>{
        const myId = setInterval(() => {
            setImages(allImages[imgIndex])
            setImgIndex(imgIndex == allImages.length-1 ? 0 : imgIndex+1)
        }, 3500)
        return () => {
            clearInterval(myId)
        }
    }, [images, imgIndex])

  return (
    <Container w="100vw" h="100vh" p={0} overflowX={"hidden"} 
    bgGradient={"linear(to-b, rgba(255, 172, 101), gray.100, gray.100)"}>
        <Box h="38%" borderBottomRadius={"xl"} overflow={"hidden"} position={"relative"}>
            <Image src={images} objectFit={"fill"} h="100%" w={"100%"}/>
            <Button bg={"#FF8166"} pos={"absolute"} top={0} right="0" size={"fit"} 
            px={3} py={1} m={2} mt="5" sx={{':focus': { outline: 'none'}}} borderRadius={"full"}
            gap={1} border={"1px"} borderColor={"#FF8166"}>
                {true ? <GiMoon color={"white"}/> : <FiSun color={"white"}/>}
                {/* <Text fontSize={"small"} color={"white"}>Mode</Text> */}
            </Button>
            <AbsoluteCenter>
                <Text fontWeight={"bold"} color={"white"}
                fontFamily={"cursive"} fontSize={30} sx={{
                    textShadow: '60px 0px 20px rgba(0, 0, 0, 0.5)',
                  }} opacity={0.8}>
                    XII IPS 1
                </Text>
            </AbsoluteCenter>
            
        </Box>
        <Box position={"relative"} w={"100%"} p="3%" py={"20%"} bg={"white"}>
            <AbsoluteCenter top={1} w="93%">
                <Card display={"flex"} bg={"white"}>
                    <Box display={"flex"} alignItems={"center"}>
                        <CardHeader p={2} pl={5}>
                            <Image src="image.png" w={10}/>
                        </CardHeader>
                        <CardBody p={2} pl={2} display={"flex"} flexDirection={"column"} lineHeight={1} color={"black"}>
                            <Text fontSize={"sm"} fontWeight={"bold"} >Admin field is here:</Text>
                            <Text fontSize={"sm"} fontWeight={"semibold"} >come for an edit</Text>
                        </CardBody>
                        <CardFooter p={2}>
                            <Button bgGradient={"linear(to-r, yellow.400, yellow.200)"} sx={{':focus': { outline: 'none'}}} py={1} px={2} h={"fit-content"}>
                                <Text color={"white"} fontSize={"sm"} >Masuk</Text>
                            </Button>
                        </CardFooter>
                    </Box>
                </Card>
            </AbsoluteCenter>
            
            <Card overflow={"hidden"} bg={"#FE5353"} borderTopRadius={"xl"} top={-3}>
                {/* <CardHeader p={1.5} px={4} borderTopRadius={"xl"}>
                    <Text fontSize={"lg"} fontWeight={"bold"} color={"white"} fontFamily={"cursive"} letterSpacing={"-0.05em"}>Activities</Text>
                </CardHeader> */}
                <CardBody p={3} py={4} overflow={"hidden"} borderTopRadius={"lg"} bg="white">
                    <Flex align={"center"} justify={"space-between"} borderTopRadius={"lg"} flexWrap={"wrap"}
                    rowGap={4}>
                        <Box w={"48%"} borderRadius={"md"} display={"flex"} 
                        overflow={"hidden"} alignItems={"center"} lineHeight={1} justify={"space-evenly"}
                        bgImage={"abpc.png"} bgSize={"cover"}>
                            <Image src="task.png" w={"70px"} p={1}/>
                            <Text fontSize={"sm"} color={"gray.100"} fontWeight={"bold"} textShadow={"4px 3px 10px black"} >Class absence</Text>
                        </Box>
                        <Box w={"48%"} borderRadius={"md"} display={"flex"} 
                        overflow={"hidden"} alignItems={"center"} lineHeight={1} justify={"space-evenly"}
                        bgImage={"monpc.png"} bgSize={"cover"}>
                            <Image src="money.png" w={"70px"} p={1}/>
                            <Text fontSize={"sm"} color={"gray.100"} fontWeight={"bold"} textShadow={"4px 3px 10px black"} >Class Treasure</Text>
                        </Box>
                        <Box w={"48%"} borderRadius={"md"} display={"flex"} 
                        overflow={"hidden"} alignItems={"center"} lineHeight={1} justify={"space-evenly"}
                        backgroundImage={"viopc.png"} bgSize={"cover"}>
                            <Image src="violation.png" w={"70px"} p={1}/>
                            <Text fontSize={"sm"} color={"gray.100"} fontWeight={"bold"} textShadow={"4px 3px 10px black"} >Class Violation</Text>
                        </Box>
                    </Flex>
                </CardBody>
            </Card>

            <Stack p={3} m="-1" mt={2} overflow={"hidden"} borderRadius={"md"}>
                <Flex alignItems={"center"} justify={"space-between"} px={2}>
                    <Text fontFamily={"cursive"} fontSize={"lg"} letterSpacing={"-0.05em"} mb={2} color={"black"}>Lainnya</Text>
                    <FaAnglesDown color="black"/>
                </Flex>
                <Flex align={"center"} justify={"space-evenly"}
                gap={2} flexWrap={"wrap"}>
                    <Box border={"1px"} w={"45%"} borderRadius={"lg"} display={"flex"} 
                    overflow={"hidden"} alignItems={"center"} lineHeight={1} justify={"space-evenly"}
                    flexDirection={"column"} color={"white"} p={1} bgImage={"lainnya.png"} bgSize={"cover"}>
                        <Image src="cleanliness.png" w={"60px"} p={2}/>
                        <Text fontSize={"md"} fontWeight={"bold"} >Cleanliness</Text>
                    </Box>
                    <Box border={"1px"} w={"45%"} borderRadius={"lg"} display={"flex"} 
                    overflow={"hidden"} alignItems={"center"} lineHeight={1} justify={"space-evenly"}
                    flexDirection={"column"} color={"white"} p={1} bgImage={"lainnya.png"} bgSize={"cover"}>
                        <Image src="schedule.png" w={"60px"} p={2}/>
                        <Text fontSize={"md"} fontWeight={"bold"} >Schedule</Text>
                    </Box>
                    <Box border={"1px"} w={"45%"} borderRadius={"lg"} display={"flex"} 
                    overflow={"hidden"} alignItems={"center"} lineHeight={1} justify={"space-evenly"}
                    flexDirection={"column"} color={"white"} p={1} bgImage={"lainnya.png"} bgSize={"cover"}>
                        <Image src="structure.png" w={"60px"} p={2}/>
                        <Text fontSize={"md"} fontWeight={"bold"} >Structure</Text>
                    </Box>
                    <Box border={"1px"} w={"45%"} borderRadius={"lg"} display={"flex"} 
                    overflow={"hidden"} alignItems={"center"} lineHeight={1} justify={"space-evenly"}
                    flexDirection={"column"} color={"white"} p={1} bgImage={"lainnya.png"} bgSize={"cover"}>
                        <Image src="teacher.png" w={"60px"} p={2}/>
                        <Text fontSize={"md"} fontWeight={"bold"} >Teachers</Text>
                    </Box>
                    <Box border={"1px"} w={"45%"} borderRadius={"lg"} display={"flex"} 
                    overflow={"hidden"} alignItems={"center"} lineHeight={1} justify={"space-evenly"}
                    flexDirection={"column"} color={"white"} p={1} bgImage={"lainnya.png"} bgSize={"cover"}>
                        <Image src="comment3.png" w={"60px"} p={2}/>
                        <Text fontSize={"md"} fontWeight={"bold"} >Comment</Text>
                    </Box>
                </Flex>
            </Stack>

        </Box>

    </Container>
  )
}

export default Dashboard
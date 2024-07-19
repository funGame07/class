import { Container, Image, Box, Button, Text, AbsoluteCenter, Flex, Stack} from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { GiMoon } from "react-icons/gi";
import { FaAnglesDown } from "react-icons/fa6";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import Lainnya from "./components/Lainnya";
import Activities from "./components/Activities";
import Comment from "./Comment";


const Dashboard = () => {
    const [color, setColor] = useState("linear(to-b, rgba(255, 172, 101), gray.100)")
    const [images, setImages] = useState("pc1.png")
    const [imgIndex, setImgIndex] = useState(0)
    const allImages = ["pc1.png", "pc2.png", "pc3.png", "pc4.png", "pc5.png", "pc6.png", "pc7.png", "pc8.png"]

    function toggleColor(){
        setColor(color != "linear(to-b, red.400, gray.100)" ? 
                            "linear(to-b, red.400, gray.100)" : 
                            "linear(to-b, rgba(255, 172, 101), gray.100)")
    }

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
    bgGradient={color}>
        <Box h="35%" borderBottomRadius={"xl"} overflow={"hidden"} position={"relative"}>
            <Image src={images} objectFit={"fill"} h="100%" w={"100%"}/>
            <Button bg={"#FF8166"} pos={"absolute"} top={0} right="0" size={"fit"} 
            px={3} py={1} m={2} mt="5" sx={{':focus': { outline: 'none'}}} borderRadius={"full"}
            gap={1} border={"1px"} borderColor={"#FF8166"} onClick={toggleColor}>
                <GiMoon color={"white"}/>
                {/* <Text fontSize={"small"} color={"white"}>Mode</Text> */}
            </Button>
            <AbsoluteCenter>
                <Text fontWeight={"bold"} color={"white"}
                fontFamily={"serif"} fontSize={30} sx={{
                    textShadow: '60px 0px 20px rgba(0, 0, 0, 0.5)',
                  }} opacity={0.8}>
                    XII IPS 1
                </Text>
            </AbsoluteCenter>
            
        </Box>
        <Box position={"relative"} w={"100%"} p="3%" py={"20%"} >
            <AbsoluteCenter top={1} w="93%">
                <Card display={"flex"} bg={"white"}>
                    <Box display={"flex"} alignItems={"center"}>
                        <CardHeader p={2} pl={5}>
                            <Image src="admin.png" w={10}/>
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
                <CardHeader p={1.5} px={4} borderTopRadius={"xl"}>
                    <Text fontSize={"lg"} fontWeight={"bold"} color={"white"} fontFamily={"fantasy"} letterSpacing={"-0.0e4m"}>Activities</Text>
                </CardHeader>
                <CardBody p={3} py={4} overflow={"hidden"} borderTopRadius={"lg"} bg="white">
                    <Flex align={"center"} justify={"space-between"} borderTopRadius={"lg"} flexWrap={"wrap"}
                    rowGap={4}>
                        <Activities imgUrl={"task.png"} title={"Class Absence"} padd={3} bgUrl={"abpc.png"}/>
                        <Activities imgUrl={"money.png"} title={"Class Treasure"} padd={1} bgUrl={"monpc.png"}/>
                        <Activities imgUrl={"violation.png"} title={"Class Violation"} padd={0} bgUrl={"viopc.png"}/>
                        <Activities imgUrl={"clean.png"} title={"Class Cleanliness"} padd={2} bgUrl={"clpc.png"}/>
                        <Activities imgUrl={"schedules.png"} title={"Class Schedule"} padd={3} bgUrl={"scpc.png"}/>
                        <Activities imgUrl={"structures.png"} title={"Class Structure"} padd={2} bgUrl={"abpc.png"}/>
                        <Activities imgUrl={"teachers.png"} title={"Class's Teachers"} padd={3} bgUrl={"tcpc.png"}/>
                    </Flex>
                </CardBody>
            </Card>

            <Stack p={3} m="-1" mt={2} overflow={"hidden"} borderRadius={"md"}>
                <Flex alignItems={"center"} justify={"space-between"} px={2}>
                    <Text fontFamily={"fantasy"} fontWeight={"semibold"} fontSize={"lg"} letterSpacing={"-0.04em"} mb={2} color={"black"}>Lainnya</Text>
                    <FaAnglesDown color="black"/>
                </Flex>
                <Flex align={"center"} justify={"space-evenly"}
                gap={2} flexWrap={"wrap"}>
                    {/* <Lainnya imgUrl={"cleanliness.png"} title={"Cleanliness"}/>
                    <Lainnya imgUrl={"schedule.png"} title={"Schedule"}/>
                    <Lainnya imgUrl={"structure.png"} title={"Structure"}/>
                    <Lainnya imgUrl={"teacher.png"} title={"Teachers"}/> */}
                    {/* <Lainnya imgUrl={"comment.png"} title={"Comment"}/> */}
                    <Comment />

                </Flex>
            </Stack>

        </Box>

    </Container>
  )
}

export default Dashboard
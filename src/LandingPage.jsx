import { AspectRatio, Image, AbsoluteCenter, Box, Text, Progress} from "@chakra-ui/react"

const LandingPage = () => {
    setTimeout(() => location.assign("/class/dashboard"), 2500)
  return (
    <Box minW={"100vw"} h={"100vh"} position={"relative"}>
        <AbsoluteCenter top="40%">
            <AspectRatio ratio={1/1} maxW={"300px"} minW={"300px"}>
                <Image src="logo.png" alt="class logo" objectFit={"cover"}/>
            </AspectRatio>
        </AbsoluteCenter>
        <AbsoluteCenter top={"80%"} gap={8} display={"flex"} flexDirection={"column"}>
            <Text fontWeight={"bold"} fontSize={"xl"} fontFamily={"cursive"} letterSpacing={"-0.07em"}>
                XII IPS 1 GANK
            </Text>
            <Progress size='xs' isIndeterminate />
        </AbsoluteCenter>
    </Box>
    
  )
}

export default LandingPage
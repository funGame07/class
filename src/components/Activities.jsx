import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'

const Activities = ({imgUrl, title, padd, bgUrl}) => {
  return (
    <Box w={"48%"} borderRadius={"md"} display={"flex"} 
    overflow={"hidden"} alignItems={"center"} lineHeight={1} justify={"space-evenly"}
    bgImage={bgUrl} bgSize={"cover"}>
        <Image src={imgUrl} w={"70px"} p={padd}/>
        <Text fontSize={"sm"} color={"gray.100"} fontWeight={"bold"} textShadow={"4px 3px 10px black"} >{title}</Text>
    </Box>
  )
}

export default Activities
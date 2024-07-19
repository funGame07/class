import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'

const Lainnya = ({imgUrl, title}) => {
  return (
    <Box border={"1px"} w={"45%"} borderRadius={"lg"} display={"flex"} 
    overflow={"hidden"} alignItems={"center"} lineHeight={1} justify={"space-evenly"}
    flexDirection={"column"} color={"white"} p={1} bgImage={"lainnya.png"} bgSize={"cover"}>
        <Image src={imgUrl} w={"60px"} p={2}/>
        <Text fontSize={"md"} fontWeight={"bold"} >{title}</Text>
    </Box>
  )
}

export default Lainnya
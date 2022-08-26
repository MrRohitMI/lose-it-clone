import {Box,Text,Image} from "@chakra-ui/react"
export default function Card({avatar,title,desc}){
    return(<>
    <Box className="card">
        <Image src={avatar} alt="..." height="230px"></Image>
        <Text className="title">{title}</Text>
        <Text className="desc">{desc}</Text>
    </Box>
    </>)
}
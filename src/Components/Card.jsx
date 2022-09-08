import {Box,Text,Image} from "@chakra-ui/react"
import {Link} from "@chakra-ui/react"
export default function Card({avatar,title,desc}){
    return(<>
    <Box className="card">
        <Image src={avatar} alt="..." height="230px"></Image>
        <Link to="/"><Text className="title">{title}</Text></Link>
        <Text className="desc">{desc}</Text>
    </Box>
    </>)
}
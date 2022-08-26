import {Box,Text} from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import Card from "./Card"
export default function Blog(){
    const [data,setData]=useState()
    useEffect(()=>{
        fetch("https://rohitcena.herokuapp.com/loseit")
        .then((res)=>res.json())
        .then((res)=>setData(res))
    },[])
    console.log(data)
    return<>
       <Box>
        <Text className="nutrition">Nutrition & Fitness</Text>
        <Text className="welcome" mt="10px">Welcome to Running on Full! Get wellness tips, advice, and see motivational stories to help you lead a balanced, healthy</Text>
        <Text className="welcome">lifestyle.</Text>
        <Box className="container">
            {data?.map((el)=><Card key={el.id} {...el}/>)}
        </Box>
        </Box> 
    </>
}
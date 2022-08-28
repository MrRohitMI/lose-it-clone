import {Link,useNavigate} from 'react-router-dom'
import { Box,Button,FormControl,Input,Text
    } from "@chakra-ui/react";
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';


export default function Login(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const {handleLogin}=useContext(AppContext)
    function getData(){
        fetch(`https://rohitcena.herokuapp.com/login?email=${email}&passwaord=${password}`)
        .then((res)=>res.json())
        .then((res)=>
                {if(res.length==0)
                {
                  alert("Please make an account")
                  navigate("/signup")
                }
                else{
                  handleLogin()
                  alert("Successfully logged in")
                  navigate("/")
                }}
        )
        .catch((err)=>console.log(err))
    }
    // useEffect(()=>{
    //     getData()
    // },[])
    return(
  <>
  <Box w='450px' m='auto' mb='150px' mt='50' textAlign='center' >      
  <Text fontSize='40'>Login</Text>
      
      <FormControl>
      <Input mt='5' type='email' placeholder='Email address' value={email} name="email" onChange={(e)=>setEmail(e.target.value)}/>
      </FormControl>
      <FormControl>
      <Input mt='5' type='password' placeholder='Password' value={password} name="password" onChange={(e)=>setPassword(e.target.value)}/>
      </FormControl>
      <Text mt='5' textAlign='left'><a href='/'>Forgot your Password?</a></Text>
      <Button mt='10'pl='70' pr='70' pt='6' pb='6'  fontSize='large' backgroundColor='#475D4B' colorScheme='white' onClick={getData}>Sign in</Button>
      <Text mt='5' ><Link to='/signup'><Button>Create account</Button></Link></Text>
  </Box>
</>
)
}
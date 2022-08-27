import { Box,Button,FormControl,Input,Text
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Signup(){
  const [formState,setFormstate]=useState({
    fname:"",
    lname:"",
    email:"",
    password:""
  })
  function handleChange(e){
    const {name,value}=e.target
    setFormstate({
      ...formState,[name]:value
    })
  }
  function postData(e){
    e.preventDefault()
      fetch(
          "https://rohitcena.herokuapp.com/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formState),
          }
        ).then((res)=>res.json())
        .then((res)=>console.log(res))
        .catch((err)=>{console.log(err)})
  }
  console.log(formState)
return(
<>
<Box w='450px' m='auto' mb='150px' mt='50' textAlign='center' >      
<Text fontSize='40'>Create account</Text>
  <FormControl isRequired>
  <Input mt='5' placeholder='First name' value={formState.fname} name="fname" onChange={handleChange}/>
  </FormControl>
  <FormControl isRequired>
  <Input mt='5' placeholder='Last name' value={formState.lname} name="lname" onChange={handleChange}/>
  </FormControl>
  <FormControl>
  <Input mt='5' type='email' placeholder='Email address' value={formState.email} name="email" onChange={handleChange}/>
  </FormControl>
  <FormControl>
  <Input mt='5' type='password' placeholder='Password' value={formState.password} name="password" onChange={handleChange}/>
  </FormControl>
  <Button mt='10'pl='70' pr='70' pt='6' pb='6'  fontSize='large' backgroundColor='#475D4B' colorScheme='white' onClick={postData}>Create</Button>

</Box>
</>
)
}
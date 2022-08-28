import {Box,Image,Button} from "@chakra-ui/react"
import { useContext } from "react"
import { Link,Navigate,useNavigate } from "react-router-dom"
import { AppContext } from "../Context/AppContext"

export default function Navbar(){
    const {state,setState}=useContext(AppContext)
    const navigate=useNavigate()
    function textChange()
    {   
        if(!state)
        {
            navigate("/login")
        }
        else
        {
            setState(!state)
            alert("Successfully logged out")
        }
    }
    return(
        <>
        <Box className="Navdiv">
           <Link to="/"><Box w="200px" h="100px" mt="10px"><Image src="https://assets.loseit.com/website/corporate/LoseIt_Logo_FullColor+(1).svg" alt="..." height="83%"/></Box></Link>
           <Button color="white" backgroundColor="orange" padding="0px 37px 0px 37px" onClick={textChange}>{!state?"Login":"Logout"}</Button>
        </Box>
        </>
    )
}
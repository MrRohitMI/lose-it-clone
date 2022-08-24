import {Box,Image,Text} from "@chakra-ui/react" 
import {FaFacebookSquare,FaInstagram,FaTwitter,FaPinterest,FaInvision} from "react-icons/fa"
export default function Footer(){
    return(
        <>
        <Box className="Footdiv">
            <Box className="Ufdiv1">
                <Box className="Tdiv"></Box>
                <Box className="Tdiv">
                    <Image src="https://assets.loseit.com/website/home/Footer_WhiteKnockOutLogo.svg" alt="..." width="70%" margin="auto"/>
                </Box>
                <Box className="Tdiv"></Box>
                <Box className="Tdiv" mr="15px">
                    <Text fontWeight="800">Member Resources</Text>
                    <Text>How It Works</Text>
                    <Text>Premium</Text>
                    <Text>Lose It! Blog</Text>
                    <Text>Help Center</Text>
                </Box>
                <Box className="Tdiv">
                <Text fontWeight="800">Connect With Us</Text>
                    <Text>Press & Media Kit</Text>
                    <Text>Contact Us</Text>
                    <Text>Partners & API</Text>
                    <Text>Share Your Story</Text>
                </Box>
                <Box className="Tdiv">
                <Text fontWeight="800">Our Team</Text>
                    <Text>About Us</Text>
                    <Text>Careers</Text>
                    <Text>Diversity</Text>
                </Box>
                <Box className="Tdiv"></Box>
                <Box className="Tdiv"></Box>
            </Box>
            <Box className="Ufdiv2">
                <Box className="icdiv">
                <Box className="icons"><FaFacebookSquare/></Box>
                <Box className="icons"><FaInstagram/></Box>
                <Box className="icons"><FaTwitter/></Box>
                <Box className="icons"><FaPinterest/></Box>
                <Box className="icons"><FaInvision/></Box>
            </Box>
            <Box className="Btext">
               <Text>Copyright 2008-2021 FitNow, Inc, All Rights Reserved</Text>
               <Text>Privacy | Terms of Service</Text>    
            </Box>    
            </Box>
        </Box>
        </>
    )
}
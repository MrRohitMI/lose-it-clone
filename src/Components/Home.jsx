import {Box,Text,Image,Button} from "@chakra-ui/react"
import a from "../Image/image (1).png"
import b from "../Image/image (2).png"
import Carousel from "./Carausal"
export default function Home(){
    return(
        <><Box className="H1div">
            <Image src={a} alt="..." height="100%"/>
        </Box>
        <Text className="weight">Weight Loss Made Easy</Text>
        <Box className="H2div">
            <Box className="Sh2div">
                <Text className="settext">Set Your Goals</Text>
                <Image src="https://assets.loseit.com/website/home/Home_SetGoal.svg" alt="..." width="55%" ml="20%"/>
                <Text className="settext2">Tell us what you want to acheive and receive personalized goals.</Text>
            </Box>
            <Box className="Sh2div">
            <Text className="settext">Track Your Food</Text>
                <Image src="https://assets.loseit.com/website/home/Home_TrackFoods.svg" alt="..." width="55%" ml="20%"/>
                <Text className="settext2">Learn about the foods you’re eating and keep your calories within your daily budget.</Text>
            </Box>
            <Box className="Sh2div">
            <Text className="settext">Lose Weight</Text>
                <Image src="https://assets.loseit.com/website/home/Home_LoseWeight.svg" alt="..." width="55%" ml="20%"/>
                <Text className="settext2">Reach your goals and continue to set new ones for a happier, healthier you!</Text>
            </Box>
        </Box>
        <Box className="H3div">
            <Carousel/>
        </Box>
        <Box className="H4div">
            <Image src="https://assets.loseit.com/website/home/Ticker_Celebratory.svg" alt="..." width="15%" ml="42%"/>
            <Text className="bigtext">122,959,302</Text>
            <Text className="pounds">POUNDS LOST</Text>
            <Text border="5px solid #ff9400" width="50px" ml="49%"></Text>
        </Box>
        <Text className="asseen">AS SEEN ON</Text>
        <Box className="H5div">
            <Image src={b} alt="..."/>
        </Box>
        <Box className="H6div">
            <Text className="advice">Advice from Successful Members</Text>
            <Box className="sh6div">
                <Box className="sh6div1">
                    <Image src="https://assets.loseit.com/website/home/Advice_Carla.png" alt="..." width="58%" ml="20%"></Image>
                    <Text className="track">Track every single bite you take. You need to know how you’re doing before dinner. If you don’t, things can get away from you fast."</Text>
                    <Text className="carla">- Carla, 65 lbs lost without giving up pizza.</Text>
                </Box>
                <Box className="sh6div1">
                <Image src="https://assets.loseit.com/website/home/Advice_Alex.png" alt="..." width="58%" ml="20%"></Image>
                    <Text className="track">Everyday is a battle, and you have to make the choice each morning to fight for your health and wellness"</Text>
                    <Text className="carla">- Alex, lost 85 lbs for his wedding.</Text>
                </Box>
            </Box>
                <Button color="white" backgroundColor="orange" padding="8px 37px 10px 37px" mt="10px">Share Your Story</Button>
        </Box>
        </>
    )
}
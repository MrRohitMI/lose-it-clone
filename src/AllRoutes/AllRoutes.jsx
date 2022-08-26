import { Routes,Route } from "react-router-dom";
import Home from "../Components/Home"
import Login from "../Components/Login";
import Signup from "../Components/Signup";
// import Blog from "./Blog";
export default function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            {/* <Route path="/blog" element={<Blog/>} /> */}
        </Routes>
        </>
    )
}

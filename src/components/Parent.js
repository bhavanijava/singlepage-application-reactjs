
import { Route,Routes,NavLink } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
const Parent=()=>{
    return(
        <>
        <div>
            <Navbar/>  
            {/* <Header></Header> */}
            <br></br>
            <Routes>
                <Route path="" element={<Home></Home>}></Route>
                <Route path="services" element={<Services></Services>}></Route>
                <Route path="about" element={<About></About>}></Route>
                <Route path="contact" element={<Contact></Contact>}></Route>
            </Routes>
            <Footer />

        </div>
        </>
    )
}
export default Parent;
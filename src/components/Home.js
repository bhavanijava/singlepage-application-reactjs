import "./Home.css"
import img from "./graduation.jpg";
import {NavLink} from "react-router-dom";
import Carosual from "./Carosual";

const Home = () => {
    return (
        <>
    <div className="container mt-5">
            <div className="left-section">
                <div className="output-container">
                        <h2 className="font font-family calibri">Improve your skills with 
                            <h3 className="text text-primary">Sathya Technology</h3>
                        </h2>
                        <p>
                            we are making talented developers
                        </p>

                        <div className="mt-3">
                            <NavLink to="/services" className="btn btn-success btn-sm rounded">Register Here</NavLink>
                        </div>
                </div>
            </div>
            <div className="right-section">
                <div className="output-container" >
                    <img src={img} className="img-fluid animated" alt="error" /> 
                </div>
            </div>
    </div>
        <div className="container mt-5">
            <Carosual></Carosual>
        </div>
        </>
    );
  }
  
  export default Home;
  
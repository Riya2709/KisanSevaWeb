import React,{useEffect,useState} from "react";
import {GiFarmer,GiGrass} from "react-icons/gi";
import {FaTractor} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
//import { NavLink } from "react-router-dom";
import { NavLink} from "react-router-dom";


const Navbar=()=>
{
    const [navMenu,setNavMenu]=useState(false);

    
   
    return(
        <>
            <nav className="main-nav">
                <div className="logo">
                    <h2>
                        <span>K</span>isan
                        <span>S</span>eva
                    </h2>
                </div>

                <div className={navMenu?"menu-link mobile-menu-link":"menu-link"}>
                     <ul>
                         <li>
                             <NavLink  className="active-class" to="/">Home</NavLink>
                         </li>
                         <li>
                             <NavLink  className="active_class" to="/mandi">MandiPrice</NavLink>
                         </li>
                         <li>
                             <NavLink  className="active_class" to="/schemes">Schemes</NavLink>
                         </li>
                         <li>
                             <NavLink  className="active_class" to="/crop">Crop Production</NavLink>
                         </li>
                     </ul>

                </div>

                <div className="social-media">
                      <ul className="social-media-desktop">
                          <li ><GiFarmer size={50} className="farmer"/></li>
                          <li><FaTractor size={50} className="tractor"/></li>
                          <li><GiGrass size={50} className="crop"/></li>

                      </ul>
                      <div className="hamburger-menu">
                          <a  onClick={()=>setNavMenu(!navMenu)}>
                              <GiHamburgerMenu/>
                          </a>
                      </div>

                </div>
                
            </nav>
        </>
    )
}
export default Navbar;
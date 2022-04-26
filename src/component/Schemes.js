import React,{useState,useEffect} from "react";
import {HiOutlineLightBulb} from "react-icons/hi";
import { Link } from "react-router-dom";
import "./schemes.css";


const Schemes=()=>{
    const [schemes, setSchemes] = useState([]);
    const [loading, setLoading] = useState(true);

    const getSchemes = async () => {
        try {
            const response = await fetch('https://kisan-seva.herokuapp.com/agrititle');
             setLoading(false);
             var resi=await response.json();
             console.log(resi);
            setSchemes(resi);
            console.log(schemes);
        } catch (error) {
            setLoading(false);
            console.log("my error is "+ error);
        }
    }

    useEffect(() => {
        getSchemes();
    }, []);

    if (loading) {
        return (
            <>
            <div className="text-center spin">
               <div className="spinner-grow text-muted"></div>
               <div className="spinner-grow text-primary"></div>
               <div className="spinner-grow text-success"></div>
               <div className="spinner-grow text-info"></div>
               <div className="spinner-grow text-warning"></div>
               <div className="spinner-grow text-danger"></div>
               <div className="spinner-grow text-secondary"></div>
               <div className="spinner-grow text-dark"></div>
               <div className="spinner-grow text-light"></div>
            </div>
            </>

        )
    }
    

    
    return(
        <>
        <div className="container">
             <h2 className="text-center">Schemes</h2>
             <ul className="list-group list-group-flush">
             {schemes.map((currEle)=>{
                 return(
                <li className="list-group-item listG" key={currEle._id}>{currEle.title}<Link to='/schemedetail' state={{name:`${currEle.title}`}}><button className="know-more">Know more<HiOutlineLightBulb className="think"/></button></Link></li>
                 )
             })
                   
             }
    
            </ul>
       </div>
        </>
    )
}
export default Schemes;
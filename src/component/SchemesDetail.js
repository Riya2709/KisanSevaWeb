import React, {useState,useEffect,useRef}from "react";
import {useLocation} from "react-router-dom";
import "./schemeD.css";
import {GoCheck} from "react-icons/go"

const SchemesDetail=()=>{
    const mounted=useRef();
    const location=useLocation();
    const [schemesD, setSchemesD] = useState([]);
    const [loading, setLoading] = useState(true);
    let name=location.state.name;
    if(name==null){
        name="Kisan Credit Card (KCC)";
    }
    

    const getSchemesD = async () => {
        try {
            console.log(name);
            console.log("hii");
            const response = await fetch(`https://kisan-seva.herokuapp.com/agriinfo/${name}`);
            setLoading(false);
            setSchemesD(await response.json());
            console.log(schemesD);
        } catch (error) {
            setLoading(false);
            console.log("my error is "+ error);
        }
    }

    useEffect(() => {
        let controller=new AbortController();
        getSchemesD();
        return()=>controller?.abort();
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
    
    
    return(<>
    <div className="container fill">
    
        <div className="jumbotron fill" key={schemesD[0]? schemesD[0]._id:""}>
               <h1 className="text-center title">{schemesD[0]? schemesD[0].title:""}</h1>      
                <p className="description">{schemesD[0]? schemesD[0].desc:""}</p>
                <a href={schemesD[0]? schemesD[0].link:"k"} target="_blank" className="link">{schemesD[0]? schemesD[0].link:""}<GoCheck className="check"/></a>
         </div>
    
         

       
    </div>

         </>)
}

export default SchemesDetail;
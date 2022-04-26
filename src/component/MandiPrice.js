import React,{useState, useRef, useEffect} from "react";
import Navbar from "./Navbar";
import "./mandi.css";
import crop from "../image/crop.png";


const MandiPrice=()=>{
    const [clearB,setclearB]=useState(false);
    const [data,setData]=useState([]);
    const state = useRef(null);
    const[show, setShow] = useState(false);
    const[result,setResult]=useState(true);
    const [err,setErr]=useState(false);
    

    const getPriceCard=async(sV)=>{
        try{
            var response=await fetch(`https://kisan-seva.herokuapp.com/registers/${sV}`);
                
            console.log(response);
            const res=await response.json();
            //console.log(res);
            setShow(false);
            setclearB(true);
            setData(res);
            //GiCoinsPile.log(data);
            
        }catch (err){
            setShow(false);
            setErr(true);
            console.log("error");
            console.log(err);
        }
    }

    const getPrice=(e)=>{
        e.preventDefault();
        setShow(true);
        setResult(false);
        const sValue=state.current.value;
        getPriceCard(sValue);
    }
    const clearData=()=>{
        setData([]);
        setclearB(false);
        setResult(true);
        setShow(false);
    }
    


    return(
        <>
       <div  className="main">
                    <div className="centered">
                        <img src={crop} alt="Crop pic"/>
                        <h2>Commodity Price</h2>
                        <p>According to state</p>
                        <form onSubmit={getPrice}>
                        <label htmlFor="state">Choose a state:</label>
                        <select id="state" name="state" ref={state} >
                            <option  disabled selected>Select State</option>
                            <option value="West Bengal" >West Bengal</option>
                            <option>Punjab</option>
                            <option>Chattisgarh</option>
                            <option>Gujarat</option>
                            <option>Himachal Pradesh</option>
                            <option>Haryana</option>
                            <option>Uttar Pradesh</option>
                            <option>Uttrakhand</option>
                        </select>
                        <button type="submit">Search</button>

                        </form>
                        {result && <h4 >Results will be displayed here.</h4>}
                        {show && <h3>Loading.....</h3>}
                        {data!==[] && clearB && <button onClick={clearData}>Clear</button>}
                        


                    </div>
                    
                    <div className="result">
                        {data!==[] && data.map((currEle)=>{
                            return(
                            <div className="card w-100  text-black" key={currEle._id}>
                             <div className="card-body">
                                <h5 className="card-title">{currEle.commodity}({currEle.variety})</h5>
                                <p className="card-text">State: : {currEle.state}</p>
                                <p className="card-text">District : {currEle.district}</p>
                                <p className="card-text">Market : {currEle.market}</p>
                                <p className="card-text">Modal Price : {currEle.modal_price}</p>
                                <p className="card-text">Min/Max Price : {currEle.min_price}/{currEle.max_price}</p>
                                <p className="card-text">Arrival_date : {currEle.arrival_date}</p>
                                
                             </div>
                             
  
                    </div>
                            )
                            


                        })}
                        
                
                </div>
            </div>
            
                
            
        </>
    )

}
export default MandiPrice;
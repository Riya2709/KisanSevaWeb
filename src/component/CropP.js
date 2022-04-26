import React,{useState, useRef, useEffect} from "react";
import "./crop.css";
import img1 from "../image/img1.png";

const Crop=()=>{
    const [data,setData]=useState([]);
    const[result,setResult]=useState(true);
    const[show, setShow] = useState(false);
    const [err,setErr]=useState(false);
    const[formData,setFormData]=useState({})
    const [predict,setPredict]=useState(false);
;
    const getPredictData=async()=>{
         
       var d=new FormData();
       for(var key in formData){
           d.append(key,formData[key]);
       }
       console.log(d);
        
       
var requestOptions = {
    
    method: 'POST',
    body: d,
    redirect: 'follow'
  };     
        try{
            var response= await fetch("https://cors-anywhere.herokuapp.com/https://crop-recommendationkisan.herokuapp.com/predict",requestOptions
            );
            console.log(response);
            const res=await response.json();
            console.log(res);

            setShow(false);
            setData({...data,['crop']:res.crop});
            setPredict(true);
            console.log(data);
            //GiCoinsPile.log(data);
            

           

        }catch(err){
                setShow(false);
                setErr(true);
                console.log("error");
                console.log(err);
        }
    }
   const handleChange=(e)=>{
       setFormData({...formData,[e.target.name]:e.target.value});
       setPredict(false);
   }
    
   const getPredict=(e)=>{
        e.preventDefault();
       console.log(formData);
        setShow(true);
        setResult(false);
        getPredictData();
       
    }

    return(
        <>
        <div className="main">
            <div className="row1">
            <h1 className="autom"><span>CROP</span> Prediction</h1>
            </div>
            <div className="row2">
                <div className="col1">
                <form className="form" onSubmit={getPredict}>
                    <div className="form-group">
                        <label for="n">Nitrogen Content:</label>
                        <input type="text" className="form-control" id="n" name="n" value={formData.n} onChange={handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label for="p">Phosphorus Content:</label>
                        <input type="text" className="form-control" id="p" name="p" value={formData.p} onChange={handleChange}required/>
                    </div>
                    
                    <div className="form-group">
                        <label for="k">Potassium Content:</label>
                        <input type="text" className="form-control" id="k" name="k" value={formData.k} onChange={handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label for="temp">Enter the temperature:</label>
                        <input type="text" className="form-control" id="temp" name="temp" value={formData.temp} onChange={handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label for="humidity">Enter the humidity level:</label>
                        <input type="text" className="form-control" id="humidity" name="humidity" value={formData.humidity} onChange={handleChange}required/>
                    </div>
                    <div className="form-group">
                        <label for="ph">Enter the PH level:</label>
                        <input type="text" class="form-control" id="ph" name="ph" value={formData.ph} onChange={handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label for="ph">Enter the rainfall level:</label>
                        <input type="text" class="form-control" id="rain" name="rain" value={formData.rain} onChange={handleChange} required/>
                    </div>
                    <button type="submit">Predict</button>
                 </form>
                 <br></br>
                 {result && <h4 >Results will be displayed here.</h4>}
                 {show && <h3>Predicting.....</h3>}
                 {predict && <h2>According to the given parameters <strong>{data.crop}</strong> is best suited</h2>}
                
                </div>
                <div className="col2">
                    <img src={img1}></img>
                </div>
            </div>

        </div>
        </>
           
        
    )
}
export default Crop;
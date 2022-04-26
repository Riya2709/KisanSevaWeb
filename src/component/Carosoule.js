import React, {useEffect,useState} from "react";
import "./carasoule.css";
import img1 from "../image/img1.png";
import img2 from "../image/img2.png";
import img3 from "../image/img3.png";
import video1 from "../image/video1.mp4";
import video2 from "../image/video2.mp4";

const Carasoule=()=>{


    return(
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
			  <ol className="carousel-indicators">
			    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			    
			  </ol>
			  <div className="carousel-inner">
			    <div className="carousel-item active">

				<div className="info">
                         <video autoPlay loop muted>
                             <source src={video1} type="video/mp4"/>
                         </video>
			      		<h1>Commodity Price & Agriculture Schemes</h1>
			      		
			      	</div>
			    	
                    
			    </div>
				<div className="carousel-item ">
				<div className="info">
                         <video autoPlay loop muted>
                             <source src={video2} type="video/mp4"/>
                         </video>
			      		<h1>Crop Prediction</h1>
			      		
			      	</div>
				</div>
			
			  </div>
			  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span className="sr-only">Previous</span>
			  </a>
			  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			    <span className="carousel-control-next-icon" aria-hidden="true"></span>
			    <span className="sr-only">Next</span>
			  </a>
			</div>
			

        </>
    )
}
export default Carasoule;
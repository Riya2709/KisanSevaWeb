import logo from './logo.svg';
import './App.css';
import "./component/navbar.css";
import {Route,Routes} from "react-router-dom";
import Navbar from "./component/Navbar";
import MandiPrice from './component/MandiPrice';
import Schemes from "./component/Schemes";
import CropP from "./component/CropP";
import Home from "./component/Home";
import SchemesDetail from './component/SchemesDetail';


function App() {
 
  return (
    <>
      <Navbar/>
      <Routes>
        <Route  exact path="/" element={<Home/>}/>
        <Route exact path="/schemes" element={<Schemes/>}/>
        <Route exact path="/mandi" element={<MandiPrice/>}/>
        <Route exact path="/crop" element={<CropP/>}/>
        <Route exact path="/schemedetail" element={<SchemesDetail/>}/>
        <Route  path="*" element={<Home/>}/>
       
      </Routes>
    </>

      
    
    
  )
    
}

export default App;

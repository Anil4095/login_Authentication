import React, { useState,useEffect } from 'react'
import '../App.css';
import axios from 'axios'
import { useLocation, useHistory } from 'react-router-dom';
  import 'react-toastify/dist/ReactToastify.css';


const Confirmation = (props) => {
  

     const [otp, setOtp]=useState()
     const [data,setData]=useState()
     const [mobileNum, setMobileNum]=useState()
    //  const [auth, setAuth]=useState()
   
     
     let location = useLocation();
     let history = useHistory()


     const handleClick = () => {

    
 
         const postMessage = {
             otp:otp,
             tempuser:data.tempuser,
             newuser:data.newuser
 
         };

         axios.post(`http://143.110.244.110/tija/frontuser/registeruser`, postMessage)
             .then(response => {
              let otpVerify=response.data[0]
                  // setAuth(otpVerify.auth_key)
              
               if(otpVerify.success){
              localStorage.setItem("Auth",JSON.stringify(otpVerify.auth_key))
                 props.setToken(otpVerify.auth_key)
                 history.push({
                  pathname: './'  
               })
              //  alert(otpVerify.message)
              }else{
                 alert("Invalid OTP...")
               }
             })
      
        
     }
     useEffect(() => {
        setData(location.state)
        setMobileNum(location.mobileNum)
      },[])



   
    return (
        <>
        <h1 style={{marginLeft:"20%", marginTop:"80px"}}>Welcome, This is <span style={{color:"red"}}>"IMG GLOBAL INFOTECH"</span></h1>
        <div className="login-div" 
             style={{padding:"30px 0px 0px 10px"}}>
       
        <div className="inp-fil" 
             style={{ paddingBottom:"30px",paddingLeft:"5%"}}>
               <input className="input-dis" type="text" value={mobileNum} disabled/>
          <input  type="text" placeholder="Enter OTP..." value={otp} onChange={(e)=>setOtp(e.target.value)}/>
       </div>

        

       <div className="btn-div" style={{padding:"20px 0 0 32%"}}>
          <button  style={{height: "30px",width: "45%",borderRadius: "10px",marginBottom:"20%"}} onClick={handleClick} >Verify</button>
       </div>
       </div>
       
   

      </> 
    )
}

export default Confirmation;

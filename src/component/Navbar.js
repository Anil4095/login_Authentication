import React from 'react'
import { NavLink,useHistory } from 'react-router-dom';
import '../App.css'


const Navbar = (props) => {
    let authKey=props.authToken
    

    // console.log(authKey)
    
   
    const history=useHistory()
    // const Login = JSON.parse(localStorage.getItem("verifyToken"));
    
    // console.log(Login)
   
 
   const eventClick=()=>{
    
       history.push('/login')
      
   }
   const handleClick=()=>{
    localStorage.clear()
    props.setToken('');
    history.push('./login')
   
   }
    return (
        <>
           <div>
              
               <ul  className=" main-div" style={{zIndex:"1", paddingBottom:"1rem",justifyContent:"left"}}>
               <img src="https://www.visitsarasota.com/sites/default/files/styles/listing_node_full/public/mmg_lfef_images/img-academy-156-e1cc497311032f22eae4e66ce77b23f3.jpg?itok=A128LF3B" style={{width:"4%" , height:"40px", marginLeft:"10px"}} alt="Logo IMG"/>
               <div className="d-flex" style={{justifyContent:"right", alignItems:"baseline"}} >
                   <li>
                       <NavLink className="text-decoration-none"  to="/"  ><p style={{paddingLeft:"16px", paddingRight:"16px", color:"white",margin:"0 0 0 800px"}}>Home</p></NavLink>
                   </li>
                   <li>
                       <NavLink  className="text-decoration-none" to="/user"  ><p style={{paddingLeft:"16px", paddingRight:"16px",paddingTop:"20%", color:"white"}}>User</p></NavLink>
                   </li>
                   <li>
                       <NavLink  className="text-decoration-none" to="/career"  ><p style={{paddingLeft:"16px", paddingRight:"16px", color:"white"}}>Career</p></NavLink>
                   </li>

            
                       
                     
                   
                   </div>
                   {(authKey)?
                       <div>
                           <button className="button-div" style={{paddingLeft:"16px", paddingRight:"16px", color:"white"}} onClick={handleClick}><p>Logout</p></button>
                      
                
                   </div>
                   :
                   <button className="button-div" style={{paddingLeft:"16px", paddingRight:"16px", color:"white"}} onClick={eventClick}  ><p >Login</p></button>
                   }
               </ul>
               </div> 
        </>
    )
}

export default Navbar

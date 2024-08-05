import React,{useState} from "react";
function Signup(){
    const[name,setname]=useState("");
    const[Password,setpassword]=useState("");
    const[email,setemail]=useState("");
    const collectiondata=()=>{
    console.log(name,Password,email);
    
    }
    return(
        <>
        <h1>registration</h1>
        <div className="div1">
        <input className="inputbox" type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter Name"/>
        <input className="inputbox" type="text"  value={Password} onChange={(e)=>setpassword(e.target.value)}  placeholder="Enter email"/>
        <input className="inputbox" type="text"  value={email} onChange={(e)=>setemail(e.target.value)}  placeholder="Enter Password"/>
        <button className="button" onClick={collectiondata}>Sign Up</button>
        </div>
        
        </>
    )
}
export default Signup;
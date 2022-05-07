import React, { useState } from "react";
export const Radio=()=>{
        


       let colorlist=['red','green','blue'] ;  
       const[disp,setDisp]=useState('blue')
       const handlechange=(e)=>{
           const{name,value}=e.target
           setDisp(value)

       }
       const[my,setMy]=useState()
       const change=(e)=>{
           const{name,value}=e.target
           setMy(value)     
       }
       const[chkdisp,setChkdsp]=useState([])

       const chkchange=(e)=>{
           const{value,checked}=e.target
           chkdisp.push(value)}
       return(
        <>
        <center>
        <h5>Selecting Radio Button</h5>
        {colorlist.map((obj)=>(
        <>
        <input type="radio" name='color' value={obj} checked={disp===obj} onClick={handlechange}/>
        <b>{obj}</b>
        </>
        ))}
         <div>
             <input type="radio" name="col" value="red" onClick={change}/>red
             <input type="radio" name='col' value="orange" onClick={change}/>ORANGE
             <input type="radio" name="col" value="blue" onClick={change}/>BLUE
         </div>
         <div>
             <input type="checkbox" name="c1" value="football"  onClick={chkchange}/>football
             <input type="checkbox" name="c2" value="cricket" onClick={chkchange}/>cricket
             <input type="checkbox" name="c3" value="basketball" onClick={chkchange}/>basketball
             </div>


        <div>
            {disp} {my}
        </div>
        <div style={{backgroundColor:"darkblue",color:"cyan",width:"500px"}}>
            {chkdisp}
        </div>
                  
        
        </center>
        </>
    )
}
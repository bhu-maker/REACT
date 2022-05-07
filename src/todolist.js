import { useState,useEffect } from 'react'
import { Createtask } from './createtask'
import './todo.css'
import {Carding} from './card'

export const Todolist=()=>{
    const[modal,setmodal]=useState(false)
    const[tasklist,settasklist]=useState([])
    const getlocal=()=>{
        let arr=localStorage.getItem("tasklist")
        if (arr)
        {
            let obj=JSON.parse(arr)
            settasklist(obj)
        }
    }
    useEffect(()=>{getlocal()},[])
    
    const savefunction=(taskobj)=>{
        let templist=tasklist
            templist.push(taskobj)
            localStorage.setItem("tasklist",JSON.stringify(templist))

            settasklist(templist)
            setmodal(false)

    }
    const toggle=()=>
    {
        setmodal(modal)
    }
    return(
        <>
        <div className='row justify-content-center'>
        <div className='task-header text-center'> 
        <h4>TODOLIST</h4>
        <button className="btn btn-outline-primary" onClick={()=>{setmodal(true)}}>Create Task</button>
        </div>
        </div>
        <div className='task-container'>
            {tasklist.map((obj)=><li>{obj.Name}</li>)}
        </div>
        <div className='task-footer'>    
            {tasklist.map((obj,index)=><Carding taskobject={obj} index={index}/>)}
            
        </div>
        <Createtask toggle={toggle} modal={modal} save={savefunction}/>
        </>
    )
}
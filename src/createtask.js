import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export const Createtask=({modal,toggle,save})=>
{
   const[textname,settextname]=useState('')
   const[description,setdescription]=useState('')
   const handlechange=(obj)=>{
       const{name,value}=obj.target
       if (name==='textname')
       {
           settextname(value)
       }
       else
         setdescription(value)


   }
   const handlesave=()=>
   {
       let taskobj={}
       taskobj["Name"]=textname
       taskobj["Description"]=description
       save(taskobj)
   }
    return(
        <>
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>CREATE TASK</ModalHeader>
          <ModalBody>
           <form>
               <div className='form-group'>
                   <label >TASKNAME</label>
                   <input type="text" name="textname" value={textname} onChange={handlechange}  className='form-control'/>
                   
               </div>
               <div className='form-group'>
                   <label >DESCRIPTION</label>
                   <textarea rows="5" name="description" value={description} onChange={handlechange} className='form-control' ></textarea>
                   
               </div>

           </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handlesave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </>
    )
}
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import {MdCancel} from 'react-icons/md'


const Card = ({id,title, des}) => {
   
    const [open, setOpen] = useState(false);
    const [list, setList] = useState([]);
    const [priority, setPriority] = useState('')
    
    
    const handleEdit = async (listId)=>{
      setOpen(true);
      await axios.get(`http://localhost:5000/api/get-single-list/${listId}`).then((res)=>{
        console.log(res, ":res");
        setPriority(res.data[0].priority)
        setList(res.data)
      }).catch((err)=>{
        console.log(err);
        
      })
    }
    const handleCancel = () =>{
      setOpen(false);
    }
    
    console.log(priority, ':type');
       const [data, setData] = useState([]);
          const initial = {
            title: "",
            description: "",
            type: {}
          }
      
        const [add, setAdd] = useState(initial);
        console.log("add: ", add);
        
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // console.log(data);
          setData((prev) =>[...prev, add]);
          setAdd(initial)
          
        }
        console.log(data);
      
        
        
      
        const handleChange = (e) => {
      
          setList((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }

   

   const handleDel = (e) =>{

   }

  return (
    
    <div className='h-fit w-[20rem] border-2 border-black rounded-lg flex flex-col'>
      <div className='h-[12rem] w-full'>
      
        <h1 className='text-6xl font-bold'>{title}</h1>
        {/* <p className='text-justify'>{des.slice(0, 100) + "..."}</p> */}
        <p>{des}</p>
        <div className='flex gap-5'>
          <button className='border-2 border-black rounded-md bg-slate-500' onClick={()=>handleEdit(id)}>Edit</button>
          <button className='border-2 border-black rounded-md bg-slate-500' onClick={handleDel}>Delete</button>
        </div>
      </div>
       {
                    open &&  <div className='absolute top-48'>
                    
                    <form action="" onSubmit={handleSubmit} className='flex flex-col p-4 bg-lime-200 w-[22rem] gap-4 rounded-lg ' >
                    <h1>Edit List</h1>
                      <div className='w-full relative'><button className='right-0 absolute' onClick={handleCancel} >< MdCancel className=''/></button></div>
                      <br />
                      <input onChange={handleChange} value={list[0]?.title} type="text" name='title' placeholder='Enter Title' className=' p-2 rounded-md outline-none ' required />
                      <textarea value={list[0]?.description} onChange={handleChange} className='resize-none rounded-md outline-none p-2' name="description" id="" placeholder='Enter Description' required></textarea>
                   
                    <select className='rounded-lg w-1/2 outline-none p-2'  onChange={handleChange} name='type' id=" " required>
                      <option value="">--Select Priority---</option>
                      <option selected={priority === 'important' } value={true}>Important</option>
                      <option selected={priority === 'normal' } value={false}>Normal</option>
              
                    </select>
                    <div className='flex justify-end'>
                      <button className='bg-slate-500 p-2 px-4 rounded-md '  type='submit'>Submit</button>
                    </div>
                    </form>
                    </div>
                  }
    </div>
    

  )
}

export default Card
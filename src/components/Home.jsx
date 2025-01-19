import React from 'react'
import Card from './Card'
import CardContent from './CardContent'
// import Model from './Model'
import { useState } from 'react'
import { MdCancel } from "react-icons/md";


const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClick = ()=>{
    setOpen(true);


  }
  const handleCancel = () =>{
    setOpen(false);
  }

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
  
      setAdd((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  
    }
  
  return (
    <>
    <div className='bg-[#6b4012] w-full'>
        <h1 className='text-6xl font-serif text-center w-full text-lime-600'>TODO LIST</h1>
        <div className='flex flex-row items-center justify-center  p-10 text-xl gap-16'>
            <input type="text" placeholder='Search' className='w-[27rem] border-2 border-green-800 rounded-md h-10' />
            <button className='bg-[#e7adc8] w-16 rounded-md  text-lime-600 font-bold h-8' onClick={handleClick}>Add</button>
            {
              open &&  <div className='absolute top-48'>
              <h1>Add List</h1>
              <form action="" onSubmit={handleSubmit} className='flex flex-col p-4 bg-lime-200 w-[22rem] gap-4 rounded-lg ' >
                <div className='w-full relative'><button className='right-0 absolute' onClick={handleCancel} >< MdCancel className=''/></button></div>
                <br />
                <input onChange={handleChange} value={add.title} type="text" name='title' placeholder='Enter Title' className=' p-2 rounded-md outline-none ' required />
                <textarea value={add.description} onChange={handleChange} className='resize-none rounded-md outline-none p-2' name="description" id="" placeholder='Enter Description' required></textarea>
             
              <select className='rounded-lg w-1/2 outline-none p-2' value={add.type} onChange={handleChange} name='type' id=" " required>
                <option value="">--Select Priority---</option>
                <option value={true}>Important</option>
                <option value={false}>Normal</option>
        
              </select>
              <div className='flex justify-end'>
                <button className='bg-slate-500 p-2 px-4 rounded-md '  type='submit'>Submit</button>
              </div>
              </form>
              </div>
            }
        </div>
         
    </div>
       
    <div>
       <CardContent cardData={data}/>
    </div>

    </>
  )
}

export default Home




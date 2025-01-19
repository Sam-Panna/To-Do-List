import React, { useState } from 'react'
import { MdCancel } from "react-icons/md";
// import Home from './Home';

const Model = ({state}) => {
  console.log(state);
  

  const handleCancel = () => {

  }

  const [data, setData] = useState([]);
    const initial = {
      title: "",
      description: "",
      type: {}
    }

  const [add, setAdd] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);
    setData((prev) =>[...prev, add]);
    setAdd(initial)
  }

  
  

  const handleChange = (e) => {

    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  }

  return (
     <div className='absolute top-48'>
      <h1>Add List</h1>
      <form action="" onSubmit={handleSubmit} className='flex flex-col p-4 bg-lime-200 w-[22rem] gap-4 rounded-lg ' >
        <div className='w-full relative'><button className='right-0 absolute' onClick={handleCancel} >< MdCancel className=''/></button></div>
        <br />
        <input onChange={handleChange}value={add.title} type="text" name='title' placeholder='Enter Title' className=' p-2 rounded-md outline-none ' required />
        <textarea onChange={handleChange} className='resize-none rounded-md outline-none p-2' name="description" id="" placeholder='Enter Description' required></textarea>
     
      <select className='rounded-lg w-1/2 outline-none p-2' onChange={handleChange} name='type' id=" " required>
        <option value="">--Select Priority---</option>
        <option value={true}>Important</option>
        <option value={false}>Normal</option>

      </select>
      <div className='flex justify-end'>
        <button className='bg-slate-500 p-2 px-4 rounded-md ' type='submit'>Submit</button>
      </div>
      </form>
      </div>
  )
}

export default Model
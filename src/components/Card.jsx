import React from 'react'


const Card = ({title, des}) => {
  return (
    
    <div className='h-fit w-[20rem] border-2 border-black rounded-lg flex flex-col'>
      <div className='h-[12rem] w-full'>
      
        <h1 className='text-6xl font-bold'>{title}</h1>
        {/* <p className='text-justify'>{des.slice(0, 100) + "..."}</p> */}
        <p>{des}</p>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
    

  )
}

export default Card
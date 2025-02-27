import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';

const CardContent = ({cardData}) => {
  console.log(cardData);

  const [data, setData] = useState([]);

    const fetchList = async() =>{
      await axios.get('http://localhost:5000/api/get-list').then((res)=>{
        // console.log(res.data);
        setData(res.data)
      }).catch((err)=>{
        console.log(err);        
      })
    }

    useEffect(()=>{
      fetchList();
    },[])
  

  // const data = [
  //   {
  //     Title: "Shopping",
  //     Description : "Buy groceries product such as egg, milk, rice, oil and spinich. ",
  //     Priority : "High",
  //   },
  //   {
  //     Title: "Shopping",
  //     Description : "Buy groceries product such as egg, milk, rice, oil and spinich. ",
  //     Priority : "High",
  //   },
  //   {
  //     Title: "Shopping",
  //     Description : "Buy groceries product such as egg, milk, rice, oil and spinich. ",
  //     Priority : "High",
  //   },
  // ]
  return (
    <div className='w-full p-8'>
      <div className='grid grid-cols-3 gap-2'>
      {
      data.map((item,index) => {
        return(
          <div key={index}>
            <Card id={item.id} title = {item.title} des = {item.description} />

          </div>
      )
      })
    }
    </div>
    </div>
  )
}

export default CardContent
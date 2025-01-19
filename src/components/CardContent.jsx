import React from 'react'
import Card from './Card'

const CardContent = ({cardData}) => {
  console.log(cardData);
  

  const data = [
    {
      Title: "Shopping",
      Description : "Buy groceries product such as egg, milk, rice, oil and spinich. ",
      Priority : "High",
    },
    {
      Title: "Shopping",
      Description : "Buy groceries product such as egg, milk, rice, oil and spinich. ",
      Priority : "High",
    },
    {
      Title: "Shopping",
      Description : "Buy groceries product such as egg, milk, rice, oil and spinich. ",
      Priority : "High",
    },
  ]
  return (
    <div className='w-full p-8'>
      <div className='grid grid-cols-3 gap-2'>
      {
      data.map((item,index) => {
        return(
          <div key={index}>
            <Card title = {item.Title} des = {item.Description} />

          </div>
      )
      })
    }
    </div>
    </div>
  )
}

export default CardContent
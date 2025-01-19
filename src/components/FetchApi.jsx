import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const FetchApi = () => {
    const[data, setData] = useState([]);
    console.log('Data:', data);

    
    const fetchFun = async () =>{
      await  axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        console.log(res);
        
      }).catch((err) =>{
        console.log(err);
      })
    }
    useEffect(() =>{
      fetchFun();
  }, [])

  return (
    <div>
      {
        data.map((item, index) =>{
          return(
            <div key={index} className='flex flex-col w-[100%] border-2 border-black'>
              <Link  to={`/products/${item.id}`}>
              <button className='bg-sky-400'>goto</button></Link>
              <h1>{item.title}</h1>
              <br />
              <p>{item.body}</p>
              <p>{item.price - (item.price * item.discount /100)}</p>
              <p>{item.price}</p>

            </div>
          )

        })
      }
    </div>
  )
}

export default FetchApi
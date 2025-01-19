import React from 'react'
import axios from 'axios'

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
            <div>
              <h1>{item.title}</h1>
              <br />
              <p>{item.body}</p>

            </div>
          )

        })
      }
    </div>
  )
}

export default FetchApi
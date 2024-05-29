import React, { useEffect, useState } from 'react'

import axios  from 'axios'
import { jwtDecode } from 'jwt-decode';
import './Home.css';
import { useNavigate } from 'react-router-dom';


  function Home() {
    let [trend,setTrend]=useState([]);
    let navigate= useNavigate();
   

    const [decodedToken, setDecodedToken] = useState(null);

    useEffect(() => {
      // Function to decode token
      const decodeToken = () => {
        // Retrieve token from localStorage
        const token = localStorage.getItem('responseData');
        if (token) {
          try {
            // Decode the token
            const decoded = jwtDecode(token);
            setDecodedToken(decoded);
            console.log("okk");
          } catch (error) {
            console.error('Error decoding token:', error);
            setDecodedToken(null);
          }
        }
      };
  
      decodeToken();
    }, []);
  

    
  async  function  getTrend(){

  let {data} = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=604a6646ea75fc10cd1c19a24a536a6f');
  setTrend(data.results);
    }
  useEffect(()=>{
    getTrend();
  },[])

let pre = 'https://image.tmdb.org/t/p/w500';
function getD(id){

navigate(
  {pathname:'/detalis',
    search:`?id=${id}`
  }
);
}



  return (
    <div className='container'>
    
    
    <div className='row'>
        <div className='col-md-4 d-flex  align-items-center' >
            <div>
           
                <hr></hr>
                <h2 className='text-warning'>Trending Movies !</h2>
             <p>This is Top Rating Movies..</p>
              <hr></hr>
             </div>
             
        </div>
       
  {trend.map((mov,index)=>
  <div onClick={()=>getD(mov.id)} className='col-md-4 my-2 text-center' key={index}>
    <div>
         <img src={pre+mov.poster_path} className='w-75 hover-image '  />
      <h2 className='fs-6 py-2' >{mov.title}</h2>
      <p className='text-warning' >{mov.vote_average} <i className="fa-solid fa-star text-warning"></i> </p>
     
    </div>  
  </div>
)}  
</div>
<div>
      {decodedToken ? (
        <div>
          <h2>Decoded Token:</h2>
          <pre>{JSON.stringify(decodedToken, null, 2)}</pre>
        </div>
      ) : (
        <p>No token found or failed to decode.</p>
      )}
    </div>
   
   </div>
    


  )
}

export default Home
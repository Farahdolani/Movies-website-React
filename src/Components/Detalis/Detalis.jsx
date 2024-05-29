import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import { useSearchParams } from 'react-router-dom';

function Detalis() {
    let [trend,setTrend]=useState({});
    let [serId,setserId]=useSearchParams();
    async  function  getdet(){
        let current=serId.get('id')
    let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${current}?api_key=604a6646ea75fc10cd1c19a24a536a6f`);
    setTrend(data);
      }
    useEffect(()=>{
      getdet();
    },[])
  
  let pre = 'https://image.tmdb.org/t/p/w500';
  
  
  
  
    return (
      <div className='container'>
      
      
      <div className='row'>
          
               
    <div className='col-md-4 my-2' >
      
           <img src={pre+trend.poster_path} className='w-100  '  />
           </div> 
           <div className='col-md-4 my-5 '>
            <h2 className='text-center py-2' >{trend.title}</h2>
            <p className='fs-6 text-center'>{trend.tagline}</p>
            <p>{trend.overview}</p>
          
           <p><i className="fa-solid fa-star text-warning"></i>
           <i className="fa-solid fa-star text-warning"></i>
           <i className="fa-solid fa-star"></i>
           <i className="fa-solid fa-star"></i>
           </p>
            
           <p>'vote_count :    '{trend.vote_count}</p>
           <p> 'vote_average :    '{trend.vote_average}</p>
 




        
       
            
        
        
    </div>
   
  </div>
  
     
     </div>
      
  
  
    )
}

export default Detalis
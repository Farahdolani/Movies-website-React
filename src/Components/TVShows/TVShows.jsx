
import React, { useEffect, useState } from 'react'
import axios  from 'axios'
function TVShows() {
  let [trend,setTrend]=useState([]);

  async  function  getTrend(){
  let {data} = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=604a6646ea75fc10cd1c19a24a536a6f');
  setTrend(data.results);
    }
  useEffect(()=>{
    getTrend();
  },[])

let pre = 'https://image.tmdb.org/t/p/w500';





  return (
    <div className='container'>
    
    
    <div className='row '>
        <div className='col-md-4 d-flex  align-items-center' >
            <div>
           
                <hr></hr>
                <h2 className=' '>Trending TVShows</h2>
             <p>This is Top Rating TVShows..</p>
              <hr></hr>
             </div>
             
        </div>
       
  {trend.map((mov,index)=>
  <div className='col-md-4 my-2 text-center' key={index}>
    <div>
         <img src={pre+mov.poster_path} className='w-75 hover-image '  alt='there is no pic' />
      <h2 className='fs-6 py-2' >{mov.original_name}</h2>
  
     
    </div>  
  </div>
)}  
</div>

   
   </div>
    
  )
}

export default TVShows
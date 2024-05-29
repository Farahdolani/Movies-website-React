
import React, { useEffect, useState } from 'react'
import axios  from 'axios'
function People() {
  let [trend,setTrend]=useState([]);

  async  function  getTrend(){
  let {data} = await axios.get('https://api.themoviedb.org/3/person/popular?api_key=604a6646ea75fc10cd1c19a24a536a6f');
  setTrend(data.results);
    }
  useEffect(()=>{
    getTrend();
  },[])

let pre = 'https://image.tmdb.org/t/p/w500';





  return (
    <div className='container'>
    
    
    <div className='row'>
        <div className='col-md-4 d-flex  align-items-center' >
            <div>
           
                <hr></hr>
                <h2 className=' '>Trending People</h2>
             <p>This is Top Rating People..</p>
              <hr></hr>
             </div>
             
        </div>
       
  {trend.map((mov,index)=>
  <div className='col-md-4 my-2 text-center' key={index}>
    <div>
         <img src={pre+mov.profile_path} className='w-75 hover-image '  alt='there is no pic' />
      <h2 className='fs-6 py-2' >{mov.name}</h2>
      <p>{mov.popularity}</p>
     
    </div>  
  </div>
)}  
</div>

   
   </div>
    
  )
}

export default People
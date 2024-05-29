import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <><nav className="navbar navbar-expand-lg bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Nove</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse text-light" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto  ">
        <li className="nav-item ">
          
          <Link className="nav-link active text-light " color='' aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item">
        
          <Link className="nav-link active text-light" aria-current="page"  to="movies" >Movie</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active text-light" aria-current="page" color='black' to="tv" >TVShows
        </Link>
       </li>
      
        <li className="nav-item">
          <link  />

          <Link className="nav-link active text-light" aria-current="page" color='black' to="people"> People </Link>
        </li>
        <li className="nav-item">
       
       <Link className="nav-link active text-light " aria-current="page" to="about" > About </Link>
     </li>
       <form className="d-flex" role="search">
  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  <button className="btn btn-outline-warning" type="submit">Search</button>
</form>


       
      </ul>


      <ul className="navbar-nav ms-auto ">
      <li className="nav-item">
        
          <Link className="nav-link active text-light" aria-current="page" color='black' to="login"> Login </Link>
        </li>


        <li className="nav-item">
        

          <Link className="nav-link active text-light" aria-current="page" color='black' to="register"> Register </Link>
        </li>
        <li className="nav-item">
    

          <Link className="nav-link active text-light" aria-current="page" color='black' to="logout"> LogOut </Link>
        </li>
      </ul>


      



    </div>
  </div>
</nav>
</>
    
  )
}

export default Navbar
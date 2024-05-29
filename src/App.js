import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import TVShows from './Components/TVShows/TVShows';
import People from './Components/People/People';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import { Routes,Route } from 'react-router-dom';
import LogOut from './Components/LogOut/LogOut';
import Detalis from './Components/Detalis/Detalis';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="">
 <Navbar></Navbar>

 <div className=''>
  <Routes>
  <Route  path='/' element={ <Home></Home>} ></Route>
  <Route   path='movies' element={ <Movies></Movies>} ></Route>
  <Route  path='tv' element={ <TVShows></TVShows>} ></Route>
  <Route   path='people' element={ <People></People>} ></Route>
  <Route  path='about' element={ <About></About> } ></Route>
  <Route path='login'element={  <Login></Login>} ></Route>
  <Route path='register'element={<Register></Register>} ></Route>
  <Route path='logout'element={<LogOut></LogOut>} ></Route>
  <Route path='*'element={   <NotFound></NotFound>} ></Route>
  <Route path='/detalis' element={<Detalis></Detalis>} ></Route>

</Routes  >

 </div>
 <Footer></Footer>


  
      
   
      
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import axios from 'axios';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';
function Register() {
  const [formData, setFormData] = useState({
    id: '11',
    email: '',
    username: '',
    password: 'm38rmF$',
    name: {
      firstname: 'John',
      lastname: 'Doe'
    },
    address: {
      city: 'kilcoole',
      street: '7835 new road',
      number: 3,
      zipcode: '12926-3874',
      geolocation: {
        lat: '-37.3159',
        long: '81.1496'
      }
    },
    phone: '1-570-236-7033'
  });
  
  let [Errorlist,setError]=useState([]);

  function formValidation() {
   

    const schema = Joi.object({
      id: Joi.string().required(),
      email: Joi.string().email({ tlds: { allow: false } }).required(),
      username: Joi.string().min(1).required(),
      password: Joi.string().min(6).required(),
      name: Joi.object({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
      }).required(),
      address: Joi.object({
        city: Joi.string().required(),
        street: Joi.string().required(),
        number: Joi.number().required(),
        zipcode: Joi.string().required(),
        geolocation: Joi.object({
          lat: Joi.string().required(),
          long: Joi.string().required(),
        }).required()
      }).required(),
      phone: Joi.string().required(),
    });

    return schema.validate(formData,{abortEarly:false});// to return all error 
  }
 



  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();


    let valid= formValidation();
    if (valid.error)
        {
             setError(valid.error.details);
            console.log(valid.error.details);
             
        }
      
    else{
      console.log(valid);

   


    try {
      const response = await axios.post('https://fakestoreapi.com/users', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Data submitted successfully:', response.config.data);
      localStorage.setItem('responseData', response.config.data); //
          nav('/login')
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  }
  };

  return (

    <  div className='container'>
    { Errorlist.length > 0 && Errorlist.map((e, index) =>
      <div key={index} className='alert alert-danger'>
          {e.message}
      </div>
  )}

    <form onSubmit={handleSubmit}  className="my-2 w-75 ms-5 " >
      <div>
        <label className="form-label" >Email:</label>
        <input className="form-control"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label className="form-label" >Username:</label>
        <input className="form-control"
          type="text"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
      </div>
      <div>
        <label className="form-label" >Password:</label>
        <input className="form-control"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>
      <div>
        <label className="form-label" >First Name:</label>
        <input className="form-control"
          type="text"
          value={formData.name.firstname}
          onChange={(e) => setFormData({ ...formData, name: { ...formData.name, firstname: e.target.value } })}
        />
      </div>
      <div>
        <label className="form-label">Last Name:</label>
        <input className="form-control"
          type="text"
          value={formData.name.lastname}
          onChange={(e) => setFormData({ ...formData, name: { ...formData.name, lastname: e.target.value } })}
        />
      </div>
      <div>
        <label className="form-label">City:</label>
        <input className="form-control"
          type="text"
          value={formData.address.city}
          onChange={(e) => setFormData({ ...formData, address: { ...formData.address, city: e.target.value } })}
        />
      </div>
      <div>
        <label className="form-label">Street:</label>
        <input className="form-control"
          type="text"
          value={formData.address.street}
          onChange={(e) => setFormData({ ...formData, address: { ...formData.address, street: e.target.value } })}
        />
      </div>
      <div>
        <label className="form-label">Number:</label>
        <input className="form-control"
          type="number"
          value={formData.address.number}
          onChange={(e) => setFormData({ ...formData, address: { ...formData.address, number: e.target.value } })}
        />
      </div>
      <div>
        <label className="form-label" >Zip Code:</label>
        <input className="form-control"
          type="text"
          value={formData.address.zipcode}
          onChange={(e) => setFormData({ ...formData, address: { ...formData.address, zipcode: e.target.value } })}
        />
      </div>
      <div>
        <label className="form-label" >Latitude:</label>
        <input className="form-control"
          type="text"
          value={formData.address.geolocation.lat}
          onChange={(e) => setFormData({ ...formData, address: { ...formData.address, geolocation: { ...formData.address.geolocation, lat: e.target.value } } })}
        />
      </div>
      <div>
        <label className="form-label">Longitude:</label>
        <input className="form-control"
          type="text"
          value={formData.address.geolocation.long}
          onChange={(e) => setFormData({ ...formData, address: { ...formData.address, geolocation: { ...formData.address.geolocation, long: e.target.value } } })}
        />
      </div>
      <div>
        <label className="form-label">Phone:</label>
        <input className="form-control"
          type="text"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div className="d-grid gap-2">
<button type="submit" className="btn btn-warning my-5 "  >Register</button>
      </div>
      
    </form>

    </div>



  );
}

export default Register;

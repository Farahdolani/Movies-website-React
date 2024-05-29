import axios from 'axios';
import React, { useState } from 'react';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const [Errorlist, setError] = useState([]);

  const submitFormData = async (e) => {
    e.preventDefault();

    const valid = formValidation();
    if (valid.error) {
      setError(valid.error.details);
    } else {
      try {
        const response = await axios.post('https://fakestoreapi.com/auth/login', user, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('Data submitted successfully:', response.data);
        localStorage.setItem('responseData', JSON.stringify(response.data));
        navigate('/');
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    }
  };

  const getFormData = (e) => {
    const myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };

  const formValidation = () => {
    const schema = Joi.object({
      username: Joi.string().min(1).required(),
      password: Joi.string().min(6).required(),
    });

    return schema.validate(user, { abortEarly: false });
  };

  return (
    <div className='container'>
      {Errorlist.length > 0 && Errorlist.map((e, index) => (
        <div key={index} className='alert alert-danger'>
          {e.message}
        </div>
      ))}

      <form onSubmit={submitFormData} className='my-3'>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            onChange={getFormData}
            className="form-control"
            placeholder='Username'
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            onChange={getFormData}
            className="form-control"
            placeholder='Password'
          />
        </div>

        <button type="submit" className="btn btn-warning">Login</button>
      </form>
    </div>
  );
}

export default Login;

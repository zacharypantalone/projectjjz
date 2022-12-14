import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormField from '../components/FormField';
import backgroundImage from '../assets/background-image.jpg';

import '../styles/Register.scss'
import DropDownMenu from '../components/DropDownMenu';
import Careersquared from '../assets/Careersquared.svg';

export default function Register() {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordconfirm: '',
  });

  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      user,
    };
    axios.post('/register', data)
    .then(() => {navigate('/dashboard')});
  };

  const handleChange = event => {
    const stateValue = event.target.id;
    setUser(prev => ({
      ...prev,
      [stateValue]: event.target.value,
    }));
  };

  const formFields = [
    {
      id: 'firstname',
      value: user.firstname,
      user,
      handleChange,
      placeholder: 'First Name',
      type: 'text',
    },
    {
      id: 'lastname',
      value: user.lastname,
      user,
      handleChange,
      placeholder: 'Last Name',
      type: 'text',
    },
    {
      id: 'email',
      value: user.email,
      user,
      handleChange,
      placeholder: 'Email',
      type: 'email',
    },
    {
      id: 'password',
      value: user.password,
      user,
      handleChange,
      placeholder: 'Password',
      type: 'password',
    },
    {
      id: 'passwordconfirm',
      value: user.passwordconfirm,
      user,
      handleChange,
      placeholder: 'Confirm Password',
      type: 'password',
    },
  ];

  return (
    <div id='Register-page'>
      <DropDownMenu />
      <div className='register-page-container'>
      <h1>New here? Register!</h1>
      <form className='register-form'>
        
        {formFields.map(field => {
          return (
            <FormField
              key={field.id}
              id={field.id}
              value={field.value}
              label={field.label}
              handleChange={field.handleChange}
              placeholder={field.placeholder}
              type={field.type}
            />
          );
        })}
        <button onClick={handleSubmit}>Register</button>
      </form>
      </div>
      <img
        className='background-image'
        src={backgroundImage}
      />
      <img
        className='Careersquared'
        src={Careersquared}
      />
    </div>
  );
}
import React, { useEffect, useState, useNavigate } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FormField from '../components/FormField';

export default function Register() {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordconfirm: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      user,
    };
    axios.post('/register', data).then(res => {
      console.log(res.data[0]);
    });
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
      label: 'First Name',
      type: 'text',
    },
    {
      id: 'lastname',
      value: user.lastname,
      user,
      handleChange,
      label: 'Last Name',
      type: 'text',
    },
    {
      id: 'email',
      value: user.email,
      user,
      handleChange,
      label: 'Email',
      type: 'email',
    },
    {
      id: 'password',
      value: user.password,
      user,
      handleChange,
      label: 'Password',
      type: 'password',
    },
    {
      id: 'passwordconfirm',
      value: user.passwordconfirm,
      user,
      handleChange,
      label: 'Confirm Password',
      type: 'password',
    },
  ];

  return (
    <div id='Register-page'>
      <h1>New here? Register!</h1>
      <form>
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
  );
}

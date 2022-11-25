import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import FormField from './components/FormField';
import Logo from './assets/Logo.svg';

import './styles/App.css';
import backgroundImage from './assets/background-image.jpg';

function App() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = event => {
    const stateValue = event.target.id;
    setUser(prev => ({
      ...prev,
      [stateValue]: event.target.value,
    }));
  };

  const handleLogin = event => {
    event.preventDefault();
    const currentUser = {
      user,
    };
    axios.post('/login', currentUser).then(res => {
      console.log(res.data);
      localStorage.setItem('user', res.data.user);
      navigate('/dashboard');
    });
  };

  const formFields = [
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
  ];

  return (
    <main className='App'>
      <img
        className='background-image'
        src={backgroundImage}
      />
      <img
        className='Logo'
        height={200}
        width={100}
        src={Logo}
        alt='Logo SVG'
      />
      <form className='login-form'>
        {formFields.map(field => {
          return (
            <FormField
              className='form-field'
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
        <button onClick={handleLogin}>Login</button>
      </form>
      <button
        className='Register'
        onClick={() => {
          navigate('/register');
        }}
      >
        Create Account
      </button>
    </main>
  );
}

export default App;

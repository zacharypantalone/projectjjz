import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import FormField from './components/FormField';
import Logo from './Resources/Logo.svg';

import './App.css';

function App() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  // const [articles, setArticles] = useState({
  //   articles: [],
  // });

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
    <div className='App'>
      <img
        height={200}
        width={100}
        src={Logo}
        alt='Logo SVG'
      />
      <h1>This is the Landing Page!</h1>
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
        <button onClick={handleLogin}>Login</button>
      </form>
      <button
        onClick={() => {
          navigate('/register');
        }}
      >
        Create Account
      </button>
    </div>
  );
}

export default App;

import { React, useEffect, useState } from 'react';
import axios from 'axios';

import Login from './components/Login';
import FormField from './components/FormField';

import './App.css';

function App() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = event => {
    const stateValue = event.target.id;
    setUser(prev => ({
      ...prev,
      [stateValue]: event.target.value,
    }));
  };

  const handleClick = event => {
    event.preventDefault();
    const currentUser = {
      user,
    };
    axios.post('/dashboard', currentUser).then(res => {
      console.log(res);
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
        <button onClick={handleClick}>Login</button>
      </form>
      <button>Create Account</button>
    </div>
  );
}

export default App;

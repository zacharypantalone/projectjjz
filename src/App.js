import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './styles/App.scss';
import './styles/Button.scss'
import FormField from './components/FormField';
import Logo from './assets/Logo.svg';
import backgroundImage from './assets/background-image.jpg';


function App() {
  const [user, setUser] = useState({
    email: '',
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
    axios
      .post('/login', currentUser)
      .then(res => {
        if (res.status === 201) {
          navigate('/dashboard');
        }
      })
      .catch(res => {
        console.log(res.response.data.Message);
      });
  };

  const formFields = [
    {
      id: 'email',
      value: user.email || '',
      user,
      handleChange,
      placeholder: 'Email',
      type: 'email',
    },
    {
      id: 'password',
      value: user.password || '',
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
      <p className='mission-statement'>
        Whether you are rejoining the workforce, or looking for a new career, it can be hard to know which direction to go!
        The modern world is fast paced and constantly changing and with those changes comes new avenues and opportunities.
        Career Squared is here to help you start your adventure towards the future of your dreams. We've developed a comprehensive career quiz
        based on your skills and preferences aimed to guide you in the right direction.Your quiz results will offer you resources in your
        best fitting careers and even an option to chat with professionals in those fields.
      </p>
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

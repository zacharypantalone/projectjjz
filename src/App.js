import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './styles/App.scss';
import './styles/Button.scss'
import FormField from './components/FormField';
import DropDownMenu from './components/DropDownMenu';
import Logo from './assets/Logo.svg';
import backgroundImage from './assets/background-image.jpg';
import Careersquared from './assets/Careersquared.svg';


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
      <DropDownMenu />
      <img
        className='background-image'
        src={backgroundImage}
      />
      <img
        className='Careersquared'
        src={Careersquared}
      />
      <article className='landing-page-container'>

        <img
          className='Logo'
          height={200}
          width={100}
          src={Logo}
          alt='Logo SVG'
        />
        <h4 className='mission-statement'>
          Whether you are rejoining the workforce, or looking for a new career, it can be hard to know which direction to go!
          The modern world is fast paced and constantly changing and with those changes comes new avenues and opportunities.
          Career Squared is here to help you start your adventure towards the future of your dreams. We've developed a comprehensive career quiz
          based on your skills and preferences aimed to guide you in the right direction.Your quiz results will offer you resources in your
          best fitting careers and even an option to chat with professionals in those fields.
        </h4>
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
          <div className='login-button-contianer'>
            <button onClick={handleLogin}>Login</button>
            <button
              className='Register'
              onClick={() => {
                navigate('/register');
              }}
            >
              Create Account
            </button>
          </div>
        </form>
        <div className='facts-container'>
          <p className='fact'>The average person changes their career 7 times in their lifetime</p>
          <p className='fact'>70% of the workforce is actively looking for a change in career.</p>
          <p className='fact'>39% of people considering changes in career, do so because of better salaries. </p>
        </div>
      </article>
    </main>
  );
}

export default App;
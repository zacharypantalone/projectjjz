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
    passwordConfirm: '',
  });

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const data = {
  //     firstname: firstname,
  //   };
  //   axios.post('/register', data).then(res => {
  //     console.log(res.data[0]);
  //   });
  // };

  const handleChange = event => {
    setUser(prev => ({
      ...prev,
      firstname: event.target.value,
    }));
  }

  return (
    <div id='Register-page'>
      <h1>New here? Register!</h1>
      <form>
        <FormField field="First Name" user={user} handleChange={handleChange} />
        <div className='lastname'>
          <label className='form__label'>Last Name </label>
          <input
            value={user.lastname}
            onChange={event => {
              setUser(prev => ({
                ...prev,
                lastname: event.target.value,
              }));
            }}
            type='lastname'
            id='lastname'
            className='form__input'
            placeholder='Last Name'
          />
          {user.lastname}
        </div>
        <div className='email'>
          <label className='form__label'>Email</label>
          <input
            value={user.email}
            onChange={event => {
              setUser(prev => ({
                ...prev,
                email: event.target.value,
              }));
            }}
            type='email'
            id='email'
            className='form__input'
            placeholder='Email'
          />
          {user.email}
        </div>
        <div className='password'>
          <label className='form__label'>Password</label>
          <input
            value={user.password}
            onChange={event => {
              setUser(prev => ({
                ...prev,
                password: event.target.value,
              }));
            }}
            type='password'
            id='password'
            className='form__input'
            placeholder='Password'
          />
          {user.password}
        </div>
        <div className='passwordConfirm'>
          <label className='form__label'>Confirm Password</label>
          <input
            value={user.passwordConfirm}
            onChange={event => {
              setUser(prev => ({
                ...prev,
                passwordConfirm: event.target.value,
              }));
            }}
            type='passwordConfirm'
            id='passwordConfirm'
            className='form__input'
            placeholder='Password'
          />
          {user.passwordConfirm}
        </div>

        {/* <button onClick={handleSubmit}>Register</button> */}
      </form>
    </div>
  );
}

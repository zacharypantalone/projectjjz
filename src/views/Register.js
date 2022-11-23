import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [] = useState([
  ]);

  useEffect(() => {
    axios.get(`/register`).then(data => {
      console.log();
    });
  }, []);

  return (
    <div id='Register-page'>
     <h1>New here? Register!</h1>
      <form>
        <div className='firstname'>
          <label
            className='form__label'
            for='firstname'
          >
            First Name{' '}
          </label>
          <input
            type='firstname'
            id='firstname'
            className='form__input'
            placeholder='First Name'
          />
        </div>
        <div className='lastname'>
          <label
            className='form__label'
            for='lastname'
          >
            Last Name{' '}
          </label>
          <input
            type='lastname'
            id='lastname'
            className='form__input'
            placeholder='Last Name'
          />
        </div>
        <div className='email'>
          <label
            className='form__label'
            for='email'
          >
            Email{' '}
          </label>
          <input
            type='email'
            id='email'
            className='form__input'
            placeholder='Email'
          />
        </div>
        <div className='password'>
          <label
            className='form__label'
            for='password'
          >
            Password{' '}
          </label>
          <input
            className='form__input'
            type='password'
            id='password'
            placeholder='Password'
          />
        </div>
        <div className='confirmpassword'>
          <label
            className='form__label'
            for='confirmpassword'
          >
            Confirm Password{' '}
          </label>
          <input
            className='form__input'
            type='confirmpassword'
            id='confirmpassword'
            placeholder='Password'
          />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
}
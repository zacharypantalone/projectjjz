import React, { useEffect, useState, useNavigate } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [user, setUser] = useState([]);
  const [firstname, setFirstName] = useState('Bob');

  // const [lastname, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmpassword, setConfirmPassword] = useState('');

  // const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      firstname: firstname,
    };
    axios.post('/register', data).then(res => {
      console.log(res.data[0]);
    });
  };

  return (
    <div id='Register-page'>
      <h1>New here? Register!</h1>
      <form>
        <div className='firstname'>
          <label className='form__label'>First Name </label>
          <input
            value={firstname}
            onChange={event => setFirstName(event.target.value)}
            type='firstname'
            id='firstname'
            className='form__input'
            placeholder='First Name'
          />
        </div>
        {/* <div className='lastname'>
          <label className='form__label'>Last Name </label>
          <input
            type='lastname'
            id='lastname'
            className='form__input'
            placeholder='Last Name'
          />
        </div>
        <div className='email'>
          <label className='form__label'>Email </label>
          <input
            type='email'
            id='email'
            className='form__input'
            placeholder='Email'
          />
        </div>
        <div className='password'>
          <label className='form__label'>Password </label>
          <input
            className='form__input'
            type='password'
            id='password'
            placeholder='Password'
          />
        </div>
        <div className='confirmpassword'>
          <label className='form__label'>Confirm Password </label>
          <input
            className='form__input'
            type='confirmpassword'
            id='confirmpassword'
            placeholder='Password'
          />
        </div> */}
        <button onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
}

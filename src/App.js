import { React, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>This is the Landing Page!</h1>
      <form>
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
        <button>Sign in</button>
      </form>
    </div>
  );
}

export default App;

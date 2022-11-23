import { useState } from "react";
import axios from "axios";


export default function Login() {
  //TO DO Have yet to implement function
  const userLogin = () => {
    axios.post('/' /*or 'http://localhost...'*/, {
      email: email, password: password
    }).then((response) => {
      console.log(response);
    })
  };


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <div className='email'>
        <label
          className='form__label'
        >
          Email{' '}
        </label>
        <input
          type='email'
          id='email'
          className='form__input'
          placeholder='Email'
          // onchange event to grab the value entered
          onChange={(e) => { setEmail(e.target.value) }}
        />
      </div>
      <div className='password'>
        <label
          className='form__label'
        >
          Password{' '}
        </label>
        <input
          className='form__input'
          type='password'
          id='password'
          placeholder='Password'
          onChange={(e) => { setPassword(e.target.value) }}
        />
      </div>
      <button>Sign in</button>
    </form>
  );
};






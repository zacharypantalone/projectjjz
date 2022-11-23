import { React, useEffect } from 'react';
import axios from 'axios';

import Login from './views/Login';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>This is the Landing Page!</h1>
      <Login />
    </div>
  );
}

export default App;

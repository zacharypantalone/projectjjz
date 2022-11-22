import { React, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  useEffect(() => {
    axios.get('/').then(data => {
      console.log(data.data);
    });
  }, []);

  return (
    <div className='App'>
      <h1>This is the Landing Page!</h1>
    </div>
  );
}

export default App;

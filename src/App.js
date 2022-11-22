import { React, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  useEffect(() => {
    axios.get('/db').then(data => {
      console.log(data.data);
    });
  }, []);

  return (
    <div className='App'>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;

import { React, useEffect } from 'react';
// Imported axios to create CRUD requests
import axios from 'axios';

import './App.css';

function App() {
  // useEffect will be called each time our App component is rendered
  useEffect(() => {
    //created an axios get request to a dummy route labelled /test (see line 7 in our FINAL-API Codebase src/index.js)
    axios.get('/test').then(data => {
      //Log the data that is received from the server once it processes the get request
      console.log(data);
    });
  }, []);

  return (
    <div className='App'>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;

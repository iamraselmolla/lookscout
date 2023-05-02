import { RouterProvider } from 'react-router-dom';
import './App.css';

import { useEffect } from 'react';
import { router } from './router/router';

function App() {

  // useEffect(  () => {
  //    fetch('https://i.ibb.co/B3pJJTs/logo.png')
  //    .then(res => res.json())
  //    .then(data=> console.log(data))
  //    .catch(err => console.log(err.message))
  // }, [])
  return (
    <div className="App">

     <RouterProvider router={router}>

     </RouterProvider>
    </div >
  );
}

export default App;

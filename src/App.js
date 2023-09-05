import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './component/Main';
import Login from './component/Login';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Main/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import './index.css'
import {Route,Routes} from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import Services from './routes/services';
import Contact from './routes/contact';
function App() {
  return (
    <>
    
      <Routes>
      <Route path='/' element= {< Home />} />
        <Route path='/about' element= {< About/>} />
        <Route path='/services' element= {< Services/>} />
        <Route path='/contact' element= {< Contact/>} />
      </Routes>
    </>
  );
}

export default App;

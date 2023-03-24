import React from 'react';
import {Route,Routes} from 'react-router-dom';
import home from './routes/home';
import about from './routes/about';
import services from './routes/services';
import contact from './routes/home';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element= {<home/>} />
        <Route path='/about' element= {<about/>} />
        <Route path='/services' element= {<services/>} />
        <Route path='/contact' element= {<contact/>} />
      </Routes>
    </>
  );
}

export default App;

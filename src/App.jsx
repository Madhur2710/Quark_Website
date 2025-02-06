import React from 'react';
import Homepage from './pages/Homepage.jsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Sponsors from './pages/Sponsors.jsx';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Homepage/>}></Route>
      <Route path='/sponsors' element={<Sponsors/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;

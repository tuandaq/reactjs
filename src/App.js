import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PhoneContact from './features/PhoneContact';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/contact' element={<PhoneContact />} />
      </Routes>

    </div>
  );
}

export default App;

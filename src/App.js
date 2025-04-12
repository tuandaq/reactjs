import React from 'react';
import Todofeature from './features/Todo';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PhoneContact from './features/PhoneContact';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/todo' element={<Todofeature />} />
        {/* <Route path='/album' element={<AlbumFeature />} /> */}
        <Route path='/contact' element={<PhoneContact />} />
      </Routes>

    </div>
  );
}

export default App;

import NavBar from './Components/Layouts/NavBar';
import Header from './Components/Layouts/Header';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
    if (! sessionStorage.getItem('user')) {
        return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
        )
    }

    // To clear a specific item
// localStorage.removeItem('Name');

// To clear the whole data stored in localStorage
// localStorage.clear();


  return (
      <div className="min-h-full">
          <NavBar />
          <div className="py-10">
              <Header />
              <BrowserRouter>
                  <Routes>
                      {/* <Route exact path="/" element={<Login />} /> */}
                      <Route path="/" element={<Register />} />
                  </Routes>
              </BrowserRouter>
          </div>
      </div>
  );
}

export default App;

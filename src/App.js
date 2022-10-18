import NavBar from './Components/Layouts/NavBar';
import Header from './Components/Layouts/Header';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="min-h-full">
          <NavBar />
          <div className="py-10">
              <Header />
              <BrowserRouter>
                  <Routes>
                      <Route exact path="/" element={<Login />} />
                      <Route path="register" element={<Register />} />
                  </Routes>
              </BrowserRouter>
          </div>
      </div>
  );
}

export default App;

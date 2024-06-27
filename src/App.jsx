import './App.css';
import Navbar from './components/Navbar.jsx';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from "./pages/Signup.jsx";
import Dashboard from './pages/Dashboard.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import { useState } from 'react';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='app-super-div' >
      <div className="app-main-div">
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/login' element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} ></Route>
          <Route path='/signUp' element={<Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn} ></Signup>} ></Route>
          <Route path='/Dashboard' element={
            <PrivateRoute loggedIn={loggedIn} >
              <Dashboard />
            </PrivateRoute>
          } ></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App

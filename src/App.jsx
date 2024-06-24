import './App.css'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard.jsx'

function App() {

  return (
    <div className='app-super-div' >
      <div className="app-main-div">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/signUp' element={<Signup></Signup>} ></Route>
          <Route path='/Dashboard' element={<Dashboard />} ></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App

import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/ज्ञानयात्री.png'
const Navbar = ({loggedIn,setLoggedIn}) => {


    return (
        <div className="nav-div">
            <span className="logo">
                <NavLink to="/">
                    <img className=' w-32 h-20 object-cover	 ' src={logo} alt="" />
                </NavLink>
            </span>

            <span>
                <NavLink className="NavLink" to="/" >Home</NavLink>
                <NavLink className="NavLink" to="/" >About</NavLink>
                <NavLink className="NavLink" to="/" >Contact</NavLink>
            </span>
            {loggedIn === false ? (<span className="log-sign-span">
                <NavLink className="NavLink" to="/login" >Log in</NavLink>
                <NavLink className="NavLink" to="/signUp" > Sign up </NavLink></span>)

                :

                (<span className="log-sign-span">
                    <NavLink onClick={() => {
                        setLoggedIn(false)
                        toast.success('Log Out Successfully');
                    }} className="NavLink" to="/">Log Out</NavLink>
                    <NavLink className="NavLink" to="/Dashboard">Dashboard</NavLink></span>
                )}

        </div>
    )
};

export default Navbar

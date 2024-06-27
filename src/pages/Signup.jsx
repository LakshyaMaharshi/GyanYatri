import { useState } from 'react';
import MyImage from '../assets/signupImg.png'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Signup = ({ setLoggedIn }) => {
  let chalo = useNavigate()
  const [signupData, setSignupData] = useState({ firstName: '', lastName: '', email: '', createPassword: '', confirmPassword: '' , user: "" })
  const [user, setUser] = useState('student')

  function changeHendler(event) {
    let { name, value } = event.target;
    setSignupData((prevData) => {
      return (
        {
          ...prevData,
          [name]: value
        }
      )
    })
  }

  // console.log(signupData);

  //create and confirm password should be same.
  function signInHendler(event) {
    event.preventDefault();
    if (signupData.createPassword === signupData.confirmPassword) {
      signupData.user = user
      console.log(signupData);
      setLoggedIn(true);
      toast.success('Account Created !');
      chalo('/Dashboard');
    }else{
      toast.error('Passwords are not same !');
    }
   
  }
  return (
    <div className=' my-4 flex justify-between relative gap-4 ' >

      <div className="image-div w-2/5 ">
        <img style={{ boxShadow: '-10px 10px 20px #86EFAC' }} src={MyImage} alt="loginImg" />
      </div>
      <div className="form-div w-1/2">

        <h2 className='text-4xl font-extrabold text-slate-200 font-sans' >Join Us Now !!</h2>

        <p className='text-slate-300'>Phadna Start kar de tera Kal nahi aayega...</p><br />

        {/* student-instructor div */}
        <div className="student-instructor flex gap-2 bg-green-300 w-52 rounded-full h-11 justify-center items-center ">
          <button className= {`px-4 ${user === 'student' ? "rounded-full bg-green-500 h-9" : "bg-transparent	"} transition-all duration-200		  `} onClick={ () => setUser('student') } >Student</button>
          <button className={`px-4 ${user === 'instructor' ? "rounded-full bg-green-500 h-9" : "bg-transparent	"} transition-all	duration-200	  `} onClick={ () => setUser('instructor') } >Instructor</button>
        </div>

        <form onSubmit={signInHendler}>
          <div className='grid grid-cols-2 gap-x-7 text-slate-400 my-4'>
            <div>
              <label htmlFor="firstNmae">First Name</label>
              <input className='bg-slate-800 rounded-sm  px-4 py-1 mt-2 mb-4 text-slate-200 w-full' type="text" name='firstName' placeholder='Enter first name' required onChange={changeHendler} value={signupData.firstName} />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input className='bg-slate-800 rounded-sm  px-4 py-1 mt-2 mb-4 text-slate-200 w-full' type="text" name='lastName' placeholder='Enter last name' required onChange={changeHendler} value={signupData.lastName} />
            </div>

            <div className='col-span-2'>
              <label htmlFor="email">Email Address</label>
              <input className='bg-slate-800 rounded-sm  px-4 py-1 mt-2 mb-4 text-slate-200 w-full ' type="email" name='email' placeholder='Enter Email Address' required onChange={changeHendler} value={signupData.email} />
            </div>

            <div>
              <label htmlFor="createPassword">Create Password</label>
              <input className='bg-slate-800 rounded-sm  px-4 py-1 mt-2 mb-4 text-slate-200 w-full' type="password" name="createPassword" placeholder='Enter Password' required onChange={changeHendler} value={signupData.createPassword} />
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input className='bg-slate-800 rounded-sm  px-4 py-1 mt-2 mb-4 text-slate-200 w-full' type="password" name="confirmPassword" placeholder='Confirm Password' onChange={changeHendler} value={signupData.confirmPassword} />
            </div>

          </div>

          <button className='bg-amber-400 w-full h-9 rounded mt-5'>Create Account</button>

          <div className="or-div">
            <span className="line-start w-full bg-slate-300 h-px inline-block"></span>
            <p className='text-slate-300 text-center ' >OR</p>
            <span className="line-end w-full bg-slate-300 h-px inline-block mb-3"></span>
          </div>

          <button className='text-slate-300 text-center bg-cyan-950 rounded w-full h-9 inline-block ' >
            <span><FcGoogle className='inline m-2' />Sign in with Google</span>
          </button>
        </form>
      </div>
    </div>

  )
};

export default Signup

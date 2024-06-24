import MyImage from '../assets/loginImg.png'
import Frame from '../assets/frame.png'
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', e_password: '' })
  // console.log(loginData);

  function changeHendler(event) {
    setLoginData((prevData) => {
      let { name, value } = event.target;
      return (
        {
          ...prevData,
          [name]: value
        }
      )
    })
  }

  function signInHendler(event) {
    event.preventDefault();
    console.log(loginData);
    setLoginData({ email: '', e_password: '' });
  }


  return (
    <div className=' mt-4 flex justify-around relative ' >

      <div className="image-div w-2/5 ">
        <img className='absolute w-2/5 top-11 left-10 z-0 ' src={Frame} alt="bg-frame" />
        <img className='relative z-1 ' style={{ transform: 'rotateY(180deg)' }} src={MyImage} alt="loginImg" />
      </div>
      <div className="form-div">

        <h2 className='text-4xl font-extrabold text-slate-200 font-sans' >Welcome Back</h2>

        <p className='text-slate-300'>Build Skills for today, tomorrow, beyond.</p><br />

        <form>
          <label className='text-slate-400' htmlFor="email">Email Address</label><br />
          <input className='bg-slate-800 rounded-sm w-full  px-4 py-1 mt-2 mb-4 text-slate-200 ' onChange={changeHendler} type="email" name="email" placeholder='Enter email address' value={loginData.email} /><br />

          <label className='text-slate-400' htmlFor="e_password">Password</label><br />
          <input className='bg-slate-800 rounded-sm w-full px-4 py-1 mt-2 text-slate-200 ' onChange={changeHendler} type="password" name="e_password" placeholder='Enter password' value={loginData.e_password} /><br />

          <a className='forget-link text-xs text-cyan-400 text-right block	 ' href="#">Forget Password</a><br />

          <button className='bg-amber-400 w-full h-9 rounded mt-5' onClick={signInHendler} >Sign in</button>

          <div className="or-div">
            <span className="line-start w-full bg-slate-300 h-px inline-block"></span>
            <p className='text-slate-300 text-center ' >OR</p>
            <span className="line-end w-full bg-slate-300 h-px inline-block mb-3"></span>
          </div>

          <button className='text-slate-300 text-center bg-cyan-950 rounded w-full h-9 inline-block ' onClick={signInHendler} >
            <span><FcGoogle className='inline m-2' />Sign in with Google</span>
          </button>
        </form>
      </div>
    </div>
  )
};

export default Login
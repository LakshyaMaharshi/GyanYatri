import MyImage from '../assets/loginImg.png'
import { FcGoogle } from "react-icons/fc";
const Signup = () => {
  function signInHendler() {

  }
  return (
    <div className=' my-4 flex justify-between relative gap-4 ' >

      <div className="image-div w-2/5 ">
        <img style={{ transform: 'rotateY(180deg)' }} src={MyImage} alt="loginImg" />
      </div>
      <div className="form-div w-1/2">

        <h2 className='text-4xl font-extrabold text-slate-200 font-sans' >Join Us Now !!</h2>

        <p className='text-slate-300'>Build Skills for today, tomorrow, beyond.</p><br />

        {/* student-instructor div */}
        <div className="student-instructoR">
          <button>Student</button>
          <button>Instructor</button>
        </div>

        <form>
          <div className='grid grid-cols-2 gap-x-7 text-slate-400 my-4'>
            <div>
            <label htmlFor="firstNmae">First Name</label>
            <input className='bg-slate-800 rounded-sm  px-4 py-1 mt-2 mb-4 text-slate-200 w-full' type="text" name='firstName' placeholder='Enter first name' required />
            </div>

            <div>
            <label htmlFor="lastName">Last Name</label>
            <input className='bg-slate-800 rounded-sm  px-4 py-1 mt-2 mb-4 text-slate-200 w-full' type="text" name='lastName' placeholder='Enter last name' required />
            </div>

            <div className='col-span-2'>
            <label htmlFor="email">Email Address</label>
            <input className='bg-slate-800 rounded-sm  px-4 py-1 mt-2 mb-4 text-slate-200 w-full ' type="text" name='email' placeholder='Enter Email Address' required />
            </div>

            <div>
              <label htmlFor="createPassword">Create Password</label>
              <input className='bg-slate-800 rounded-sm  px-4 py-1 mt-2 mb-4 text-slate-200 w-full' type="password" name="createPassword" placeholder='Enter Password' required/>
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input className='bg-slate-800 rounded-sm  px-4 py-1 mt-2 mb-4 text-slate-200 w-full' type="password" name="confirmPassword" placeholder='Confirm Password'/>
            </div>

          </div>

          <button className='bg-amber-400 w-full h-9 rounded mt-5' onClick={signInHendler} >Create Account</button>

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

export default Signup

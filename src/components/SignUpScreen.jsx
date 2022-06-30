import React, { useRef } from 'react'
import './styles/SignInScreen.css'
import { auth } from './firebase'
import { motion } from 'framer-motion';



const SignUpScreen = () => {

  const emailRef = useRef(null); //referance to email input
  const passwordRef = useRef(null); //referance to password input

  const register = (e)=>{
    e.preventDefault() // to protect refresh freshing if we click signin it return back to loginpage to protect this e usr this
    auth.createUserWithEmailAndPassword(
      emailRef.current.value, // whatever user enter keep track on it
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser)
    }).catch((error)=>alert(error.message))
  }

  const signIn = (e)=>{
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value, 
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser)
    }).catch((error)=>alert(error.message))
  }

  

  return (
    <motion.div
    whileInView={{ opacity: [0, 1] }}
    transition={{ duration: 0.5, type: 'tween' }}
    >
      <div className='signupScreen'>
        <form className='signup_form'>
        <h1 className='form_title'>Sign In</h1>
        <input ref={emailRef} className='signup__inp'  type='email' placeholder='Email' />
        <input ref={passwordRef} className='signup__inp'  type='password' placeholder='Password' />
        <button className='btn_signUp' onClick={signIn} type='submit'>Sign In</button>
        <h4 className='call_to_action'>
          <span className="signup-screen__grey">New to Netflix?</span>
          <span className="signup-screen__link" onClick={register}>Sign Up now.</span>
        </h4>
        </form>
    </div>
    </motion.div>
  )
}

export default SignUpScreen
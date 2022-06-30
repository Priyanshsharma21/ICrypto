import React, { useState } from 'react'
import SignUpScreen from './SignUpScreen';
import './styles/LoginScreen.css'
import { motion } from 'framer-motion';



const LoginScreen = () => {

    const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
    <div className="loginScreen__background">
        <img className='loginScreen__logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="login logo" />
        <button className="loginScreen__button" type='button' onClick={()=>setSignIn(true)}>
        Sign In
        </button>

        <div className="loginScreen__gradient" />

        <div className="loginScreen__body">
        {signIn ? <SignUpScreen /> : (
            <>
            <motion.div
             whileInView={{opacity:1}}
            whileHover={{scale:1.1}}
            whileTap={{ scale: 0.9 }}
            transition={{duration:0.5,type:'tween'}}   
            >
            <h1>Watch TV shows & movies anytime,<br /> anywhere</h1>
                <h2 className='h2'>Watch Anywhere. Cancel Anytime</h2>
                <h3 className='h3'>Ready to watch? Enter your email to create or restart your membership</h3>
                <div className="loginScreen__input">
                    <form action="">
                        <input type="email" placeholder='Email Address'/>
                        <button onClick={()=>setSignIn(true)} className='loginScreen__getStarted'>GET STARTED</button>
                    </form>
                </div>
            </motion.div>
               
            
            </>
        )}
            
        </div>
    
    
    </div>
    </div>
  )
}

export default LoginScreen

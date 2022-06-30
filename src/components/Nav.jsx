import React, { useState } from 'react'
import './styles/Nav.css'
import logo from '../assets/netflix.png'
import avatar from '../assets/netflix_acount.png'
import { useEffect } from 'react'
import {useNavigate, Link} from "react-router-dom";




const Nav = () => {
  const [show, handelShow] = useState(false);
  const navigate = useNavigate();

  const transictionNavBar = ()=>{
    if(window.scrollY>100){
      handelShow(true);
    }else{
      handelShow(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",transictionNavBar)
    return ()=> window.removeEventListener("scroll",transictionNavBar)
  },[])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
{/* useHistory or useNevigate helps us to push next page to dom  */}
    <div className="nav__contents">
    {/* on click on netflix we navigate to home and on avatar to profile  */}
        <img className='nav__logo' src={logo} alt="logo" onClick={()=>navigate('/')} />
        <ul className="navigation">
            <li className="li_item"><Link to="/">Home</Link></li>
            <li className="li_item"><Link to="/tvshow">TV Shows</Link></li>
            <li className="li_item"><Link to="/movies">Movies</Link></li>
            <li className="li_item"><Link to="/new&popular">New & Popular</Link></li>
            <li className="li_item"><Link to="/search">Search</Link></li>
         </ul>
        <img className='nav__avatar' src={avatar} alt="avatar" onClick={()=>navigate('/profile')}/>
    </div>


    </div>
  )
}

export default Nav
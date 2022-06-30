import React from 'react'
import './styles/ProfileScreen.css'
import Nav from './Nav'
import avatar from '../assets/netflix_acount.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from './firebase'



const ProfileScreen = () => {
    const user = useSelector(selectUser)




  return (
    <div className='profileScreen'>
    <Nav />
    <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
            <img src={avatar} alt="" />
            <div className="profileScreen__details">
                <h2>{user.email}</h2>
                <div className="profileScreen__plans">
                <h3>Plans (Current Plan: premium)</h3>
                <p>Renewal date : 12/05/22</p>
                <div className="profileScreen__planList">
                    <div className="std class">
                        <h4>Netflix Standard</h4>
                        <button>Subscribe</button>
                    </div>
                    <div className="basic class">
                        <h4>Netflix Basic</h4>
                        <button>Subscribe</button>
                    </div>
                    <div className="premium class">
                        <h4>Netflix Premium</h4>
                        <button className='btn-choose'>Current Package</button>
                    </div>
                </div>
                    <button onClick={()=>auth.signOut()}  className="profileScreen__signOut">Sign Out</button>
                </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default ProfileScreen
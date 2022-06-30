import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import ProfileScreen from './components/ProfileScreen'
import TVShow from './components/pages/TVShow';
import Movies from './components/pages/Movies';
import NewPopular from './components/pages/NewPopular';
import Search from './components/pages/Search'
import All from './components/pages/All';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {auth} from './components/firebase'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //onAuthChange is a listner it detect when any user loggrd in, it fire that up and access it from global storage

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(userAuth=>{
      //this will store user in local storage
      if(userAuth){
        // logged in 
        dispatch(login({
          uid: userAuth.uid,
          email : userAuth.email,
        }))
      }else{
      // logged out
      dispatch(logout())
      }
    })
    return unSubscribe;
  }, [dispatch])
  


  return (
    <div className="app">
     <BrowserRouter>
        <Routes>
        {!user ? ( <Route exact  path="/login" element={<LoginScreen />} />) : 
        (
          <>
          <Route exact  path="/" element={<HomeScreen />} />
          </>
        )
        }
        <Route  exact  path="/profile" element={<ProfileScreen />} />
        <Route exact  path="/tvshow" element={<TVShow />} />
        <Route exact  path="/movies" element={<Movies />} />
        <Route exact  path="/new&popular" element={<NewPopular />} />
        <Route exact  path="/search" element={<Search />} />
        <Route exact  path="/all" element={<All />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { useDispatch } from 'react-redux';
import {logOut} from '../../redux/actions'
import { getAuth, signOut } from "firebase/auth";
import Header from '../../components/Header';
import { Link } from 'react-router-dom'
import './Style.css'



const HomeScreen = () =>{
    const dispatch = useDispatch()
    const auth = getAuth()
    const user = {
        name: auth.currentUser.displayName,
        perfilImage: auth.currentUser.photoURL
    }
    console.log(auth)
    const handleLogOut = () =>{
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        dispatch(logOut())
        }).catch((error) => {
        // An error happened.
        });
    }


    return(
        <div className='HomeScreen'>
            <Header user={user} handleLogOut={handleLogOut} />
            <div className='buttons-conatiner'>
                <Link to ='/start' className='button'>Start</Link>
                <Link to = '/scores' className='button'>Scores</Link>
                <Link to='/rules' className='button'>Rules</Link>
            </div>
        </div>
    )
}

export default HomeScreen
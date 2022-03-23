/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import {logOut} from '../../redux/actions'
import { getAuth, signOut } from "firebase/auth";
import Header from '../../components/Header';
import { Link } from 'react-router-dom'
import gameIcon from '../../assets/gameIcon.png'
import rulesIcon from '../../assets/rulesIcon.png'
import scoreIcon from '../../assets/scoreIcon.png'
import './Style.css'



const HomeScreen = () =>{
    const dispatch = useDispatch()
    const auth = getAuth()
    const user = {
        name: auth.currentUser.displayName,
        perfilImage: auth.currentUser.photoURL
    }
    
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
                <Link to ='/start' className='button-home'>
                    <img src={gameIcon} alt='game icon' className='icon' />
                    <p>Start</p>
                </Link>
                <Link to = '/scores' className='button-home'>
                    <img src={scoreIcon} alt='score icon' className='icon' />
                    <p>Score</p>
                </Link>
                <Link to='/rules' className='button-home'>
                    <img src={rulesIcon} alt='rules icon' className='icon' />
                    <p>Rules</p>
                </Link>
            </div>
        </div>
    )
}

export default HomeScreen
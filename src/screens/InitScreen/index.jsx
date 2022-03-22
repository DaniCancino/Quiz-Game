/* eslint-disable no-unused-vars */
import React from 'react';
import './Style.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import googleLogo from '../../assets/googleLogo.png'
import app from '../../firebase'
import logo from '../../assets/triviaLogo.png'
import { useDispatch, useSelector } from "react-redux";



const InitScreen = () =>{
    const auth = getAuth();
    auth.languageCode = 'es';
    const provider = new GoogleAuthProvider();
    

    const handleLoginGoogle = () =>{
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return(
        <div className='Init'>
            <img src={logo} alt='trivia logo' className='triviaLogo' />
            <button className='button' onClick={() => handleLoginGoogle()}>
                <img src={googleLogo} alt='google logo'className='googleLogo'/>
                <p>Sign in with Google</p>
            </button> 
        </div>
    )
}

export default InitScreen;


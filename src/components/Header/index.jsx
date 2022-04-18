import React from 'react';
import logo from '../../assets/logoQuiz.png'
import star from '../../assets/star.png';
import './Style.css'
import Perfil from '../Perfil';


const Header = ({user, handleLogOut}) =>{
    return(
        <div className='Header'>
            <img src={logo} alt='trivia logo' className='trivia-logo'/>
            <h2 className='greeting'>Hello {user.name}!</h2>
            <div className='right-container'>
                <div className='life-container'>
                    {/* <p>5</p>
                    <img src={star} alt='star' className='star' /> */}
                </div>
                <img src={user.perfilImage} alt='phot' className='perfil-photo'/>
                <Perfil handleLogOut={handleLogOut}/>
            </div>
        </div>
    )
}

export default Header;
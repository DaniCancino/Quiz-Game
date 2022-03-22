import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css'
import scoreImage from '../../assets/score2.png'


const ScoreModal = ({score}) =>{
    let aproved = false

    if(score > 4){
        aproved = true
    }

    return(
        <div className='score-modal'>
            <div className='modal'>
                <img src={scoreImage} alt='score logo' className='score-logo' />
                <div className='text-container'>
                    <h3 className='aproved'>{aproved ? 'Congratulation! 😁' : 'Sorry! 😔'}</h3>
                    <p className='score-text'>Your final score is : {score} of 10</p>
                </div>
                <Link to='/' className='go-home-link'>Go Home</Link>
            </div>
        </div>
    )
}

export default ScoreModal;
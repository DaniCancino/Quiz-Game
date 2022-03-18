import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import './Style.css';

const Score = () =>{
    return(
        <div className='Score'>
            <div className='head-container'>
                <Link to='/'><FaArrowLeft className='arrow' /></Link>
                <h1 className='test-title'>This is score screen</h1>
            </div>
        </div>
    )
}

export default Score
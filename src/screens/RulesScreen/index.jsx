import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Style.css'


const Rules = () =>{
    return(
        <div className='Rules'>
            <div className='head-container'>
                <Link to='/'><FaArrowLeft className='arrow'/></Link>
                <h1 className='test-title'>This is rules screen</h1>
            </div>
        </div>
    )
}

export default Rules;
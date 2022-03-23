import React from 'react'
import error from '../../assets/error2.png'
import './Style.css'


const Error = () =>{
    return(
        <div className = 'Error'>
            <p className='error-text'>ERROR 404</p>
            <p className='page-text'>PAGE NOT FOUND</p>
            <img src={error} alt='error' className='error-image' />
        </div>
    )
}


export default Error;
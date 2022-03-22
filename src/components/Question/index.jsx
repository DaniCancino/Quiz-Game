import React from 'react';
import './Style.css'


const Question = ({question}) =>{
    return(
        <div className='Question'>
            <div className='quiestion-container'>
                <p>{question}</p>
            </div>
        </div>
    )
}

export default Question
import React, {useState} from 'react'
import './Style.css'


const Answers = ({answers, correctAnswer, handleClickAnswer}) =>{
    let mixedAnswer = answers.sort(() => Math.random() - 0.5)
    const [click, setClick] = useState(false)


    const handleClick = (e) =>{
        setClick(true)
        handleClickAnswer(e)
    }

    return(
        <div className= 'Answers'>
            {mixedAnswer.map(
                (e) => <button 
                        className={`button-answer ${click && correctAnswer === e ? 'correct' : ''}`} 
                        value={e}
                        key={e}
                        onClick={(e) => handleClick(e)}>
                    {e}
                    </button>
                )
            }
        </div>
    )
}

export default Answers;
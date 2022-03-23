/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Question from '../../components/Question';
import ScoreModal from '../../components/Score';
import Data from '../../Data/Data.json';
import './Style.css';


const Start = () =>{
    const [currentQuestion, setCurrentQuestion] = useState(1); //---> PARA CONTROLAR EL NUMERO DE LA PREGUNTA.
    const [score, setScore] = useState(0); //---> PARA CONTROLAR EL MARCADOR DE RESPUESTAS CORRECTAS.
    const [finished, setFinished] = useState(false); //--->PARA SABER CUANDO ESTA EN LA ULTIMA PREGUNTA.
    const [clicked, setClicked] = useState(false) //---> PARA SABER SI LE DIO CLICK A UNA DE LAS RESPUESTAS.
    const [selectQuestion, setSelectQuestion] = useState(Math.round((Math.random() * 110))) //--->PARA SELECCIONAR EL INDICE DE LA PREGUNTADE EL JSON.
    const [timeRemaining, setTimeRemaining] = useState(20)
    const[changeClass, setChangeClass] = useState('button-answer')



    const question = Data.results[selectQuestion].question;
    const correctAnswer = Data.results[selectQuestion].correct_answer
    const answers = Data.results[selectQuestion].incorrect_answers
    // let mixedAnswer = answers.sort(() => Math.random() - 0.5)


    //CAMBIA ESTADOS Y ASIGNA UNA CLASE AL BOTON AL HACER CLICK
    const handleAnswerSubmit =  (correctAnswer, e) =>{
        let hello = false
        if(e.target.value === correctAnswer){
             setScore(score + 1)
            //  setClick(true)
            hello = true
        }

        setClicked(true)
        e.target.classList.add(hello ? 'correct' : 'incorrect')

        if(currentQuestion === 10){
            setFinished(true)
            setTimeRemaining(0)
        }
    }

    //PARA SETEAR EL ESTADO DE LA PREGUNTA EN UN NUEVO NUMERO 
    const nextQuestion = () =>{
        setCurrentQuestion(currentQuestion + 1)
    }

    //PARA CONTROLAR ESTADOS ENTRE PREGUNTAS
    const indexQuestion =  () =>{
        const index = Math.round((Math.random() * 110));
         setSelectQuestion(index)
         setClicked(false)
         setTimeRemaining(20)
         setChangeClass('button-answer')
        nextQuestion()
    }
    

    useEffect(()=>{
        const interval = setInterval(()=> {
            if(timeRemaining > 0){
                setTimeRemaining(timeRemaining - 1)
            }
            
            if(timeRemaining === 0){
                if(currentQuestion === 10){
                    setFinished(true)
                }
                setClicked(true)
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [timeRemaining])



    return(
        <div className='Start'>
            <h3 className='question-counter'>Question {currentQuestion} of 10</h3>
            <Question question={question}/>
            
            <div className= 'Answers'>
            {answers.map(
                (element) => <button 
                        disabled={clicked}
                        className={changeClass}
                        key={element}
                        value={element}
                        onClick={(e) => handleAnswerSubmit(correctAnswer, e)}>
                    {element}
                    </button>
                    )
                 }
            </div>

            {clicked && currentQuestion < 10 ?
                <button className='next-button' onClick={() => indexQuestion()}>Next</button>
                : ''
            }
            <div className='count-down'>{timeRemaining}</div>

            {finished ? <ScoreModal score={score}/> : ''}

        </div>
    )
}

export default Start;
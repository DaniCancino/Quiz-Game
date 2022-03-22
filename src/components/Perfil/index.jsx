import React, { useState } from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { RiLogoutBoxLine } from "react-icons/ri";
import { motion } from "framer-motion"
import './Style.css'


const Perfil = ({handleLogOut}) =>{
    const [select, setSelect] = useState(false);

    const clicked = () =>{
        setSelect(!select)
    }

    const hello = {hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
        duration: 0.4
        }
    },
}

    const goodBye = {hidden: { opacity: 1 },
    show: {
        opacity: 0,
        transition: {
        duration: 0.4
        }
    },
}


    return(
        <div className='Perfil'>
            {select ? 
            <TiArrowSortedUp size={28} onClick={() => clicked()} className='arrowDown'/>
                    : <TiArrowSortedDown size={28} onClick={() => clicked()} className='arrowDown'/>
            }

            {select ?
            <motion.div 
                className='perfil-window'
                variants={select ? hello : goodBye}
                initial= "hidden"
                animate="show"
            >
                <button 
                    onClick={() => handleLogOut()} 
                    className='logOut-button'>
                        <RiLogoutBoxLine size={20} className='logOut-icon'/>
                        Log Out
                </button>
            </motion.div>  
            : ''
        }   
        </div>
    )
}

export default Perfil;
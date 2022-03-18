/* eslint-disable default-case */
const initialState = {
    log : 2
}

export default function rootReducer (state = initialState, action){
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                    log: action.payload
            };

        case 'LOGOUT':
            return{
                ...state,
                    log: action.payload
            }
        default: 
        return{
            state
        }
    }
}
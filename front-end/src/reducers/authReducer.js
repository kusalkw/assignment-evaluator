import {SET_CURRENT_USER,SET_ROLE,GET_USER_PROFILE} from '../actions/types'
import { object } from 'prop-types';


const initialState ={
    isAuthenticated :false,
    user :{},
    Role:'',

}
export default function(state = initialState ,action){
    switch(action.type){
    case SET_CURRENT_USER:
        return {
            ...state,
            isAuthenticated : !isEmpty(action.payload),
            user :action.payload
        }
    case SET_ROLE:
    console.log(action.payload)
        return{
            ...state,
            Role:action.payload
        }
    case GET_USER_PROFILE:{
        
        return{
            ...state,
            user:action.payload
        }
    }

    default:
        return state;
}
}
const isEmpty = value =>
value === undefined ||
value === null ||
(typeof value ==='object' && Object.keys(value).length ===0)||
(typeof value ==='string' && value.trim().length ==0);

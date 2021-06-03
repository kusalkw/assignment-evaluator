import {GET_ERRORS,SET_ROLE,GET_USER_PROFILE} from './types'
import axios from 'axios'
import setAuthtoken from '../utils/setAuthToken'
import { SET_CURRENT_USER } from './types';
import jwt_decode from 'jwt-decode'
import swal from 'sweetalert';
import { decode } from 'punycode';

//login authentications
// export const registerUser = userData => dispath =>{
//     axios.post('http://localhost:4000/api/Student/register',userData)
//     .then(res => {
//         console.log(res.data)
//     }).catch(
//         err=>{
//            dispath({
//                type :GET_ERRORS,
//                payload :err.response.data

//            })
//         }
//     )
// }

export const registerUser = (userData, history) => dispatch => {
    axios
      .post('http://localhost:8080/api/auth/signup', userData)
      .then(res => {swal({
              title: "Good job!",
              text: "You have succesfully registered!",
              icon: "success",
            });
        })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        }, swal ( "Oops" ,  err.response.data ,  "error" )),
       
    
      );
  };

export const loginStudent = userData => dispatch =>{
    axios.post('http://localhost:8080/api/auth/signin',userData)
    .then(
        res=>{
            const {token} =res.data
            localStorage.setItem('jwttoken',token)
            setAuthtoken(token)
            var decoded =jwt_decode(token);
            axios.get('http://localhost:4000/api/userprofile',{headers:{"Authorization" : `Bearer ${token}`}}).then(res=>{
                decoded.user=res.data
                dispatch(setCurrentUser(decoded))
                console.log(decoded)

            })
            .catch(err=>{
              console.log(err)
            })
            
            
        })
        .catch(err =>{
            swal ( "Oops" ,  err.response.data.message ,  "error" )
            
        }
    )
};

export const getuserprofile=()=>dispatch=>{

  var token =localStorage.getItem('jwttoken')

  axios.get('http://localhost:4000/api/userprofile',{headers:{"Authorization" : `Bearer ${token}`}}).then(res=>{
    dispatch({
      type : GET_USER_PROFILE,
      payload:res.data.user
  },console.log(res.data.user))

            })
            .catch( err=>{
              dispatch({
                  type :GET_ERRORS,
                  payload:err.response.data
              })

  })

}

export const setCurrentUser =(decoded)=>{
    return {
        type:SET_CURRENT_USER,
        payload:decoded
    }
};

function getuserpayload(){
    var token =localStorage.getItem('jwttoken')
    console.log(token +"====")
    if (token) {
        var userPayload = atob(token.split('.')[1]);
        return JSON.parse(userPayload);
      }
      else
        return null;

}

export function whologgedin(){
    var payload = getuserpayload()
    if (payload){
      console.log(payload)
      if((payload.exp > Date.now() / 1000)&&(payload.type=="pcoordinator")){
        return "pcoordinator"
       
      }
      else if(((payload.exp > Date.now() / 1000)&&(payload.type=="student"))){
        return "student"
     
      }
      else if(((payload.exp > Date.now() / 1000)&&(payload.type=="evaluator"))){
        return "evaluator"
     
      }
      else{
        return ""
      }

      
    }
    else{
    return ""

    }
}

export const isStudentLoggedin=()=>{
    var payload = getuserpayload()
    if (payload)
      return (payload.exp > Date.now() / 1000)&&(payload.type=="student");
    else
      return false;


}

export const deletetoken=()=>{
  localStorage.removeItem('jwttoken');

}


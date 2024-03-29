import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {

    const [{}, dispatch] = useStateValue();

    const setUser=()=>{
        auth.signInWithPopup(provider).then((result)=>{
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user,
            })
        }).catch((error)=> alert(error.message));

    }

    return (
        <div className="login">
            <div className="login__card">
                <img src="/logo.png" alt="" />

                <Button onClick={setUser}>SIGN UP WITH GOOGLE</Button>
            </div>
        </div>
    )
}

export default Login

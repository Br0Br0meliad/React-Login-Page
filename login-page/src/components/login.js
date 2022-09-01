import React from 'react';
import UsernameInput from './username';
import PasswordInput from './password';
import SigninButton from './sign-in-btn';



class LogInCard extends React.Component {
    render() {
        return(
    <div className='card'>

    <h3>Log In</h3>
 
            <UsernameInput />
            <PasswordInput />
            <SigninButton />

    <footer>
        <span><a href='#'>Forgot password</a></span>
        
        <span>Not a member?<a href='#'>Sign up.</a></span>
    </footer>
    </div>
        )
    }
}


export default LogInCard;

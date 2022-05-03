import { useRef, useContext, useState, useEffect } from "react";
import SignInContext from "../Contexts/SignInContext";
import useLocalStorage from "../Hooks/useLocalStorage";

const SignIn = () => {
    const [loggedUser, setLoggedUser] = useContext(SignInContext);
    const [localLoggedUser, setLocalLoggedUser] = useLocalStorage('login', "");
    
    const loginRef = useRef();
    const passRef = useRef();

    const handleLoggingIn = () => {
        setLoggedUser(loginRef.current.value);      //context
        setLocalLoggedUser(loginRef.current.value); //localStorage
    }

    const handleLoggingOut = () => {
        setLocalLoggedUser("");  //localStorage
        setLoggedUser("");       //context
    }

    if(loggedUser === ""){
        return (
            <>
                <label htmlFor="login">Login: </label>
                <input name="login" type="text" ref={loginRef}/> <br/>
                <label htmlFor="passwd">Hasło: </label>
                <input name="passwd" type="password" ref={passRef}/> <br/>
                <button onClick={handleLoggingIn}>Zaloguj się</button>
            </>
        );
    }
    else{
        return (
            <>
                <h2>Zalogowany użytkownik: {loggedUser}</h2><br/>
                <button onClick={handleLoggingOut}>Wyloguj się</button>
            </>
        )
    }
}

export default SignIn;
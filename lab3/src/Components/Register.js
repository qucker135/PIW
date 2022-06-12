import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/init";
import {logInWithEmailAndPassword, logInWithGithub, logInWithGoogle, registerWithEmailAndPassword } from "../firebase/users";
import { useAuthState } from "react-firebase-hooks/auth";


function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (loading)
            return
        if (user)
            navigate("/");
        if(error)
            console.error({error});
        }, [user, loading]);

    return (
    <div className="login">

        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
        />
        <br/>
        <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
        />
        <br/>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />
        <br/>
        <button
            onClick={() => registerWithEmailAndPassword(name, email, password)}
        >
            Register / Sign up
        </button>
    </div>
    );
}
export default Register;

import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, getRedirectResult, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, } from "firebase/auth";
import { app } from '../../Firebase/Firebase.config';


export const AuthContext = createContext(null)

const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)

    const createUser = (email,password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const singUp = (email,password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSing = () => {
        setLoader(true)
        return signInWithPopup(auth,provider)
    }

    const googleLogin = () => {
        setLoader(true)
       return getRedirectResult(auth);
    }

    useEffect(()=> {
       const unsubscribe = onAuthStateChanged (auth, currentUser =>{
            setUser(currentUser);
            setLoader(false)
        });
        return () => {
            return  unsubscribe()
            
        }
    },[])

    const authInfo = {
        user,
        loader,
        createUser,
        singUp,
        googleSing,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
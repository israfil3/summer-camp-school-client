import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
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
        return signInWithPopup(auth,provider)
    }

    useEffect(()=> {
        unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoader(false)
        });
        return ()=> {
            return unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        loader,
        createUser,
        singUp,
        googleSing
    }
    return (
        <AuthContext.Provider value={authInfo}>

        </AuthContext.Provider>
    );
};

export default AuthProvider;
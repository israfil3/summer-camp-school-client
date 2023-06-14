import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, getRedirectResult, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import { app } from '../../Firebase/Firebase.config';
import axios from 'axios';


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

    const singOut = () => {
      return signOut(auth)
    }
     const updateUser = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
     }
    useEffect(()=> {
       const unsubscribe = onAuthStateChanged (auth, currentUser =>{
            setUser(currentUser);

            if(currentUser){
                axios.post('https://server-israfil3.vercel.app/jwt',{
                   email: currentUser.email 
                })
                .then(data => {
                    console.log(data.data)
                    localStorage.setItem('jwt-token',data.data)
                })
            }
            else{
                localStorage.removeItem('jwt-token')
            }

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
        updateUser,
        singOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
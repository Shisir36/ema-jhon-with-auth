import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
 const [user, setUser] = useState(null)
 const [loading, setLoading] = useState(true)

 const createUser = (email, password) =>{
  setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
 }
 const Signin = (email, password) =>{
  setLoading(true)
    return signInWithEmailAndPassword (auth, email, password)
 };
 const logOut = ()=>{
    return signOut(auth)
 }
//  Observer user auth state
useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, CurrentUser =>{
        setUser(CurrentUser)
        setLoading(false)
    });
    return ()=>{
        return unsubscribe()
    }
},[])
    const authInfo = {
      user,
      createUser,
      Signin,
      logOut,
      loading
    }
    return (
      <AuthContext.Provider value={authInfo}>
          {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;

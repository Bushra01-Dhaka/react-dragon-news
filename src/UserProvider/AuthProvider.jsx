import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase";

export const AuthContext = createContext(null);
 const googleProvider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    //slove reloading issues
    const [loading, setLoading] = useState(true);
   

    //create user for register
     const createUser = (email,password) => 
    {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        //aita akta promise
    }

    //for Signin
    const signInUser = (email,password) =>
    {
        return signInWithEmailAndPassword(auth, email, password); 
        //aita akta promise
    }

    //observe state 
    useEffect(() => {
           const unSubscribe = onAuthStateChanged(auth, currentUser => {
             console.log("Current on state user", currentUser);
             setUser(currentUser);
             setLoading(false);
             
           })
           return () => {
            unSubscribe();
           }
    }, []);

    //for Signout
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    //google logIn
    const signInGoogle = () =>
    {   setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //github login
    const signInGithub = () => 
    {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }



    const authInfo = {user, createUser, signInUser, logOutUser, signInGoogle, signInGithub, loading}
    return (
        <AuthContext.Provider value={authInfo}>
              {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;
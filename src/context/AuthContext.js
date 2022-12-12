import { createContext,useEffect,useState } from "react"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from "../firebase";

export const UserContext=createContext();
export const AuthContextProvider=props=>{
    const [user,setUser]=useState({});

    const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
 }  

     const signIn=(email,password)=>{
     return signInWithEmailAndPassword(auth,email,password);
     }

     const logOut=()=>{
        return signOut(auth);
     }
     useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
       // get the user details of currently created account
        console.log(currentUser);
        setUser(currentUser);
       
    })
    return ()=>{
        unsubscribe()
    }
     },[])
   
    return(
    <UserContext.Provider value={{createUser,user,setUser,logOut,signIn}}>
        {props.children}
    </UserContext.Provider>
 )
}


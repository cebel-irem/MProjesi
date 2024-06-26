import { onAuthStateChanged , createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut} from "firebase/auth";
import { children, createContext, useContext, useEffect, useState } from "react";
import {auth} from "../firebaseConfig";
import {doc, getDoc, setDoc} from "firebase/firestore";
import { update } from "firebase/database";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);


    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user)=> {
            //console.log('got user:', user);
            if(user){
                setIsAuthenticated(true);
                setUser(user);
                updateUserData(user.uid);
            }else{
                setIsAuthenticated(false);
                setUser(null);
            }
        });

        return unsub;
    }, []);

    const updateUserData = async (userId) => {
        const docRef = doc(db, 'users', userId);
        const doxSnap = await getDoc(docRef);

        if(DocumentSnapshot.exists()){
            let data = docSnap.data();
            setUser({...user, userId: data.userId})
        }
    }

    const login = async (email, password) => {
        try{
            const response = await signInWithEmailAndPassword(auth, email, password);
            return {success: true};

        }catch(e){
            let msg = e.message;
            if(msg.includes('auth/invalid-emil')) msg='Invalid email'
            if(msg.includes('auth/invalid-credential')) msg='Wrong credentials'

            return{success:false, msg};

        }
    }

    const logout = async () => {
        try{
            await signOut(auth);
            return {success:true};

        }catch(e){
            return {success: false, msg: e.message, error:e};
        }
    }


    const register = async (email, password,username, profilUrl) => {
        try{
            const response = await createUserWithEmailAndPassword(auth, email,password);
            console.log('response.user:', response?.user);

            //setUser(response.user);
            //setIsAuthenticated(true);

            await setDoc(doc(db, "users", response?.user?.uid), {
                username,
                profilUrl,
                userId: response?.user?.uid
            });
            return{success:true, data: response?.user};
        }catch(e){
            let msg = e.message;
            if(msg.includes('auth/invalid-emil')) msg='Invalid email'
            if(msg.includes('auth/email-already-in-use')) msg='This email is already in use'

            return{success:false, msg};
        
        }
    }


    return(
        <AuthContext.Provider value={{user, isAuthenticated, login, register,logout}}>
            {children}
        </AuthContext.Provider>
    )


}

export const useAuth = () => {
    const value = useContext(AuthContext);

    if(!value){
        throw new Error("useAuth, AuthContextProvider'ın içine sarılmalıdır");

    }
    return value;
}
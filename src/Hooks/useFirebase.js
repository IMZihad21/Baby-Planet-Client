import {
    getAuth,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    updateProfile,
    signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import initFirebase from "../Utilities/FirebaseInit/FirebaseInit";

initFirebase();

const useFirebase = () => {
    const [ user, setUser ] = useState({});
    const [ loading, setLoading ] = useState(true)
    const auth = getAuth();

    // Register with email pass
    const emailPassRegister = (displayName, email, password, { redirectURI, history }) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                updateProfile(auth.currentUser, { displayName });
                history.replace(redirectURI);
            })
            .catch(err => toast.error(err.message))
            .finally(() => setLoading(false));
    }

    // Login with Email Pass
    const emailPassLogin = (email, password, { redirectURI, history }) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(() => history.replace(redirectURI))
            .catch(err => toast.error(err.message))
            .finally(() => setLoading(false));
    }

    // Google Login
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = ({ redirectURI, history }) => {
        signInWithPopup(auth, googleProvider)
            .then(() => history.replace(redirectURI))
            .catch(err => toast.error(err.message))
            .finally(() => setLoading(false));
    }

    // Log Out
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    // Still unclear about this so just copied it 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [ auth ])

    return {
        user,
        loading,
        emailPassRegister,
        emailPassLogin,
        googleLogin,
        logOut
    }
}

export default useFirebase;
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import initFirebase from "../Utilities/FirebaseInit/FirebaseInit";

initFirebase();

const useFirebase = () => {
    const [ user, setUser ] = useState({});
    const [ loading, setLoading ] = useState(true)
    const auth = getAuth();

    // Google Login
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
            .catch(err => {
                toast.error(err.message)
            })
            .finally(() => { setLoading(false) });
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
        googleLogin,
        logOut
    }
}

export default useFirebase;
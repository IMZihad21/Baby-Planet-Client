import axios from "axios";
import {
    getAuth,
    getIdToken,
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
    const [ loading, setLoading ] = useState(true);
    const [ isAdmin, setIsAdmin ] = useState(false);
    const [ token, setToken ] = useState('');
    const auth = getAuth();

    // Register with email pass
    const emailPassRegister = (displayName, email, password, { redirectURI, history }) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                saveUser(displayName, email);
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
            .then((result) => {
                const user = result.user;
                saveUser(user.displayName, user.email);
                history.replace(redirectURI)
            })
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

    // Save user to DB
    const saveUser = (displayName, email) => {
        const user = { displayName, email };
        axios.put('http://localhost:9000/users', user)
            .then(() => { });
    };

    // Still unclear about this so just copied it 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [ auth ])

    useEffect(() => {
        axios.get(`http://localhost:9000/users/${user.email}`)
            .then((response) => {
                setIsAdmin(response.data.isAdmin);
                console.log(response.data.isAdmin);
            });
    }, [ user.email ])

    return {
        user,
        token,
        isAdmin,
        loading,
        emailPassRegister,
        emailPassLogin,
        googleLogin,
        logOut
    }
}

export default useFirebase;
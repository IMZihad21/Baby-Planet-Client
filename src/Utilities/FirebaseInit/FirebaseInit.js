import { initializeApp } from "firebase/app";

const config = process.env.REACT_APP_FIREBASE_CONFIG;
const firebaseConfig = JSON.parse(config);

const initFirebase = () => {
    initializeApp(firebaseConfig);
};

export default initFirebase;
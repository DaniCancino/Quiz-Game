import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyC90wz1enMj68YOdr7lggN700Bk-PcHC5g",
    authDomain: "quiz-game-app-5646d.firebaseapp.com",
    projectId: "quiz-game-app-5646d",
    storageBucket: "quiz-game-app-5646d.appspot.com",
    messagingSenderId: "173117319676",
    appId: "1:173117319676:web:3fbbf268ace477d2b0aa79",
    measurementId: "G-ML198MLQEJ"
};

const app = initializeApp(firebaseConfig);

export default app;
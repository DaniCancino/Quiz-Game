import React from 'react';
import './App.css'
import InitScreen from './screens/InitScreen';
import { Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux';
import { login, logOut } from './redux/actions';
import Rules from './screens/RulesScreen';
import Score from './screens/ScoreScreen';
import Start from './screens/StartScreen';
import Error from './screens/Erorr404';


function App() {
  const dispatch = useDispatch()
  const logState = useSelector((state) => state.log)
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // eslint-disable-next-line no-unused-vars
      const uid = user.uid;
      // ...
      dispatch(login())
    } else {
      // User is signed out
      // ...
      dispatch(logOut())
    }
  });

  function render (){
    if(logState === 1){
      return(
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/start' element={<Start />} />
          <Route path='/rules' element={<Rules />} />
          <Route path='/scores' element={<Score />} />
          <Route path = '*' element={<Error />} />
        </Routes>
      )
    } else if(logState === 2 || logState === 0){
      return(
        <Routes>
          <Route path='/' element={<InitScreen />} />
          <Route path = '*' element={<Error />} />
        </Routes>
      )
    }
  }

  
  return (
    <div className="App">
      {logState !== 2 ? (
        render() )
        : (
          <InitScreen />
        )

      }
    </div>
  );
}

export default App;

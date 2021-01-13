import React from "react";
import SignIn from "./pages/SignIn";
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCgDJvVRe-JKmf4BmHBUBDvYOdEizGtvRM",
  authDomain: "dinder-3e460.firebaseapp.com",
  projectId: "dinder-3e460",
  storageBucket: "dinder-3e460.appspot.com",
  messagingSenderId: "444635835340",
  appId: "1:444635835340:web:8769b52b5bfd87b504cb69"
}


firebase.initializeApp(config)
firebase.firestore()


function App(){
  
  
  return ( 
    <Router>
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
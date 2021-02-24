import React, {useEffect} from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom" 
import Header from "./components/Header"
import Home from "./components/Home"
import Login from "./components/Login"
import { auth } from './components/Firebase';
import Checkout from "./components/Checkout"
import { useStateValue } from "./components/StateProvider";
import Footer from "./components/Footer"
function App() {
  const [{basket}, dispatch] = useStateValue();
  //useEffect is piecec of code which run based on agiven condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
        return ()=>{
          //clean up operation
          unsubscribe();
        }
      }
    })  
  }, [])
  return (
   <Router>
      <div className="app">
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
         
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </div>
   </Router>
  );
}

export default App;

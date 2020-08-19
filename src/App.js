import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
// import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { blue } from '@material-ui/core/colors';


function App() {

  const [{ user }, dispatch] = useStateValue();
  
  
  //useEffect <<<<<<<<<<<<<<<<<POWERFULL
  // piece of code that run on a given condition
  
  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          // the user is logged in......
          dispatch({
            type: "SET_USER",
            user: authUser
          });
        } else {
          // the user is logged out.....
          dispatch({
            type: "SET_USER",
            user: null
          });

        }
      });
        return () => {
          // any cleanup operations go in here.....
          unsubscribe();
        }
    }, []);
  


  return (
    <>
    <h1 style={{backgroundColor:"blue"}}>Hello</h1>
    <Router>
      <Switch>
        {/* <Route path="/checkout"> */}
          {/* <Header /> */}

         {/* <Checkout /> */}
        {/* </Route> */}
        <Route path="/login" component={<Login />}/>
          
        {/*--this is the default route--*/}
        {/* <Route path="/">
          <Header />
          <Home />
        </Route> */}
      </Switch>
    </Router>
  </>
  );
}

export default App;

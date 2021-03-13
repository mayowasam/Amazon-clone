import React, {useEffect}from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header/Header'
import Home from './Home/Home'
import './App.css';
import Checkout from './Checkout/Checkout';
import Login from './firebase/Login';
import { useStateVal } from './StateProvider';
import {auth} from './firebase/Firebase'
import { Unsubscribe } from '@material-ui/icons';

function App() {

  const [{user},setBasket] = useStateVal()
  console.log(user)

  useEffect(()=>{
    const unsubsribe = auth.onAuthStateChanged((authState)=>{
      if(authState){
        setBasket({
          type:'SET_USER',
          user:authState
        })

      }else{
        setBasket({
          type:'SET_USER',
          user:null
        })


      }
    })

    return () => Unsubscribe()

  },[])




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
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import React from 'react';
import {Route,Redirect, Router} from "react-router-dom";
import Login from './Components/Login/Login';
import Register from "./Components/Register/Register";
import Home from '../src/Components/Tailors/pages/Posts/Home';
import Requests from "./Components/Tailors/pages/Requests/Requests";
import UploadPosts from "./Components/Tailors/pages/UploadPosts/UploadPosts";
import MyPosts from "./Components/Tailors/pages/MyPosts/MyPosts";
import Profile from '../src/Components/Tailors/pages/Profile/Profile';
import MainLogin from "./Components/MainLogin/MainLogin";
import RegisterCustomer from '../src/Components/Register/RegisterCustomer';
import HomeCustomer from './Components/Customers/Posts/HomeCustomer';
import Tailors from "./Components/Customers/Tailors/Tailors";


function App() {
  return (
    <>
       <Route path="/" exact>
            <MainLogin />
            <Redirect to="/"></Redirect>
       </Route>
       <Route path="/login" exact>
            <Login />
        </Route>

       <Route path="/register" exact>
            <Register />
       </Route>   

       <Route path="/registerCustomer" exact>
            <RegisterCustomer />
       </Route>   


       <Route path="/allPostsTailor" exact>
            <Home />
       </Route>   

       <Route path="/requests" exact>
            <Requests />
       </Route> 

       <Route path="/uploadPosts" exact>
            <UploadPosts />
       </Route> 

       <Route path="/tailorsMyPost" exact>
            <MyPosts />
       </Route>

       <Route path="/profile">
            <Profile />
       </Route>

       <Route path="/allPostsCustomer">
            <HomeCustomer />
       </Route>

       <Route path="/allTailors">
            <Tailors />
       </Route>

      
    </>

  );
}

export default App;

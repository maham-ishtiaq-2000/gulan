import React,{useEffect, useState} from 'react';
import Navigation from '../../../Navigation/Navigation';
import axios from 'axios';
import './UpdateProfile';
import UpdateProfile from './UpdateProfile';


const Profile = () =>{
  
    return(
        <>
          <Navigation />
          <UpdateProfile />
        </>
    )
}

export default Profile;
import React from 'react';
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Navigation.css';


const Navigation = () =>{
    let history = useHistory();
    const logOut = () =>{
        localStorage.clear()
        history.push("/")
        console.log("here from logout buton")
    }
    let person = localStorage.getItem("person");
    console.log("start of the navigatiion tab")
    console.log(person + "here from the navigation tab")
    console.log("end of the navigation tab")

    let AllPosts;
    if(person === "tailor"){
        AllPosts = "/allPostsTailor"
    }
    else{
        AllPosts = "/allPostsCustomer"
    }
    
    return(
  
        <>
          <div className='main'>
                <p>Gulaan</p>
                        <div className='mainLinks'>
                            <li className='lists'>
                                <NavLink to={AllPosts}>Posts</NavLink></li>
                            <li className='lists'>
                                <NavLink to="/requests">Requests</NavLink></li>
                                {person === "customer" && <li className='lists'>
                            <NavLink to="/allTailors">Tailors</NavLink>
                            </li>}
                            <li className='lists'>
                            <NavLink to="/uploadPosts">Upload_Posts</NavLink>
                            </li>
                           
                            
                            {person === "customer" && <li className='lists'>
                            <NavLink to="/tailorsMyPost">Customize_Dress</NavLink>
                            </li>}
                            {person === "customer" && <li className='lists'>
                            <NavLink to="/tailorsMyPost">Latest_Fashion</NavLink>
                            </li>} 
                            {person === "customer" && <li className='lists'>
                            <NavLink to="/customerMyPost">My_Posts</NavLink>
                            </li>}
                            <li className='lists'>
                            <NavLink to="/profile">Profile</NavLink>
                            </li>
                          
                        

                        </div>
                        <button onClick={logOut}>
                                LogOut
                            </button>
                        
               
          </div>
        </>
     
    )
}

export default Navigation;



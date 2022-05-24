import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Navigation from '../../../Navigation/Navigation';

import './MyPostCard';
import MyPostCard from './MyPostCard';



const MyPosts = () =>{

 

    let [alltailors,setAllTailors] = useState([
        {
            "images": [],
            "description": "fdfd",
            "updated": false,
            "date": "fdfdf",
            "user_post": false,
            "tailor_post": true,
            "_id": "",
            "tailor_id": "",
            "first_name": "",
            "last_name": "",
            "profile_photo": "",
            "__v": 0
        }
    ]); 
    
  
    let user = localStorage.getItem("user");
    let userJson = JSON.parse(user);
   
    const evenNums = alltailors.filter( num => num.tailor_id  === userJson);
 
    console.log(evenNums)
    useEffect(() => {
        getAllPosts()
    },[])

  const getAllPosts = () => {
        axios.get("http://localhost:8080/api/tailor/all_posts_by_tailors")
            .then((response) => {
               
                if (response.data.success) {
                    console.log(response.data.data)
                    setAllTailors(response.data.data)
                }
    
            })
    
            .catch(function (error) {
                
            });
    }
    return(
        <>
          <Navigation />
          {evenNums.map((item) => {
              return(
                <MyPostCard item={item}/>

              )
          })}
        
        
        </>
    )
}

export default MyPosts;

import Navigation from '../../Navigation/Navigation';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AllUsersCard from '../../Customers/Cards/AllUserCards';
import CustomersCard from '../../Tailors/pages/Cards/CustomersCard';
import './AllPost.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



const HomeCustomer = () =>{
    var axios = require('axios');
    const [value, setValue] = React.useState('1');
    let user = localStorage.getItem("user");
    console.log(user)
    let [data,setData] = useState([])
    let [customizedData,setCustomizedData] = useState([])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    useEffect(() => {
        getAllPosts()
        getAllCustomizedPosts()
    },[])

    const getAllPosts = () => {
        axios.get("http://localhost:8080/api/user/all_posts")
            .then((response) => {
               
                if (response.data.success) {
                    setData(response.data.data)
                }
    
            })
    
            .catch(function (error) {
                
            });
    }

    const getAllCustomizedPosts = () => {
        axios.get("http://localhost:8080/api/user/all_customization")
            .then((response) => {
               
                if (response.data.success) {
                    setCustomizedData(response.data.data)
                }
    
            })
    
            .catch(function (error) {
                
            });
    }
   

    return(
        <>
          <Navigation></Navigation>
       
            
                
                
                     {data.map((item) => {
                         return(
                            <div className='container'>
                            <div className='col-10 mx-auto mt-3 pt-3'>
                                <AllUsersCard item={item}/>
                                
                            </div>
                        
                          </div>
                         )
                     })}
                        
                
                
          
           
           
           
        </>
    )
}

export default HomeCustomer;


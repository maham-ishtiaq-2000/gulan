import React, { useEffect, useState } from 'react';
import Navigation from '../../Navigation/Navigation';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AllTailorsCard from '../Cards/AllTailorsCard';
import axios from 'axios';


function TabPanel(props) {

    const { children, value, index, ...other } = props;
    
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const Tailors = () =>{
  let [dataArray,setDataArray] = useState([]);
  const getAllTailors = () => {
    axios.get("https://gulaan.herokuapp.com/api/admin/get_all_tailors")
        .then((response) => {
           
            if (response.data.success) {
                setDataArray(response.data.data)
            }
            
        })
  
        .catch(function (error) {
            
        });
        
  }

  useEffect(() => {
    getAllTailors()
  },[])

  console.log(dataArray)

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

     return(
    <>
        <Navigation />
        
        <Box sx={{ width: '100%' , marginLeft : '40%'}} >
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All tailors" {...a11yProps(0)} />
          <Tab label="Nearby tailors" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {dataArray.map((item) => {
          return(
            <AllTailorsCard item={item}/>
          )
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        nearby tailors
      </TabPanel>
     
    </Box>
    

    </>
    )
}

export default Tailors;
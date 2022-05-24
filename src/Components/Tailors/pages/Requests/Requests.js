import React from 'react';
import Navigation from '../../../Navigation/Navigation';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

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

const Requests = () =>{
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <>
          <Navigation />
          <Box sx={{ width: '100%', typography: 'body1' }} >
            <TabContext value={value}>
                <Box sx={{ marginLeft : '43%' , borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" >
                    <Tab style={{fontSize : '15px' }} label="Incomings" value="1" />
                    <Tab style={{fontSize : '15px' }} label="Sent" value="2" />
                    
                </TabList>
                </Box>
                <TabPanel value="1">1</TabPanel>
                <TabPanel value="2">2</TabPanel>
                
            </TabContext>
            </Box>
           
        </>
    )
}

export default Requests;
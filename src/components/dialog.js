import * as React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Summary from './Summary';
import Detail from './Detail';
import Ranking from './Ranking'


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

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog onClose={handleClose} open={open} >
        <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",mt:2,paddingBottom:5}}>
      <>
      <List sx={{ pt: 0 }}>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1,}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Summary" {...a11yProps(0)}
          />
          <Tab label="Detail" {...a11yProps(1)} />
          <Tab label="Ranking" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Summary />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Detail />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Ranking />
      </TabPanel>
    </Box>
        

       
      </List>
      </>
            <CloseIcon sx={{display:'flex',justifyContent:'flex-end',cursor:"pointer",paddingRight:2}} onClick={handleClose}/>
            </Box>

    </Dialog>
  );
}







TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};






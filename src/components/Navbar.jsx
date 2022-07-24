import { AppBar,Typography,Box } from '@mui/material'
import { Container } from '@mui/system'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react'
import SimpleDialog from "./dialog";

const Navbar = () => {
    
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState([]);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
      setSelectedValue(value);
    };
  
      
       
      
    
  
  return(
    <AppBar sx={{position:'sticky'}}>
        <Container sx={{display:'flex', 
        justifyContent:'space-around',
        padding:2
        }}>
            <Box sx={{display:'flex'}}>
                <CheckCircleIcon  sx={{mr:1}}/>
                <Typography sx={{display:{xs:'none', sm:'block'}}}>
                    Timer
                </Typography>
            </Box>
            <Box sx={{display:'flex'}}>
                <Box sx={{cursor:'pointer',display:'flex'}} onClick={handleClickOpen}>
                <AssessmentIcon />
                <Typography sx={{mr:1.5,display:{xs:'none', sm:'block'}}}>
                    Report
                </Typography>
                </Box>
                <Box sx={{cursor:'pointer',display:'flex'}}>
                <SettingsIcon />
                <Typography sx={{mr:1.5,display:{xs:'none', sm:'block'}}}>
                    Settings
                </Typography>
                </Box>
                <Box sx={{cursor:'pointer',display:'flex'}}>
                <PersonIcon />
                <Typography  sx={{mr:1.5,display:{xs:'none', sm:'block'},cursor:'pointer'}}>
                  Login
                </Typography>
                </Box>
                <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
            </Box>
        </Container>
    </AppBar>
  )
}

export default Navbar
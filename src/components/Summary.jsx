import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const Summary = () => {
  return (
    <Box>
      <Typography variant='h6'>
        Activity Summary
      </Typography>
        <Box sx={{display:'flex',margin:2}}>
          <Card sx={{width:80 ,padding:2,background:'#ed9172',margin:2}}>
            <AccessTimeIcon />
            <Typography>
              Hours Focused
            </Typography>
          </Card>
          <Card sx={{width:80 ,padding:2,background:'#ed9172',margin:2}}>
            <CalendarMonthIcon />
            <Typography>
              Days accessed
            </Typography>
          </Card>
          <Card sx={{width:80 ,padding:2,background:'#ed9172',margin:2}}>
            <WhatshotIcon />
            <Typography>
              Days Streak
            </Typography>
          </Card>
        </Box>
      <Typography>
        Focus Hours
      </Typography>
    </Box>
  )
}

export default Summary;
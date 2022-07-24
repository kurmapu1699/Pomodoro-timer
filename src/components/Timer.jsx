import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

const Timer = ({changeIndex,stage,getClicking,seconds,clicking,setClicking}) => {

const headers = ["Timer","Short Timer","Long Timer"];
  return (
    <Box>
        <Box sx={{display:'flex',justifyContent:'center',marginRight:5,}}>
        {headers.map((header,index) => {
            return <Typography key={index}
            onClick={()=>changeIndex(index)} 
            variant='h6' sx={{
                mr:2,
                fontFamily:'Roboto',
                fontWeight:300,
                mt:5,
                cursor:'pointer',
                hover:{
                    "&:hover":{
                        backgroundColor:'black',
                        color:'white'
                    }
                }
            }}>
                {header}
            </Typography>
        })}
        </Box>
        <Box sx={{display:'flex', justifyContent:'center', mt:8}}>
            <Typography variant='h1'>
                {getClicking()}:{seconds.toString().padStart(2, '0')}
            </Typography>
        </Box>
        <Box sx={{display:'flex', justifyContent:'center', mt:8}}>
        <Button variant="contained"
        onClick={()=>setClicking((clicking) => !clicking)}
        >{clicking? "STOP" : "START"}</Button>
        </Box>
    </Box>
    
  )
}

export default Timer
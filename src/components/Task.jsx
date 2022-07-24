import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React,{useState}from 'react'
import List from './List'

const Task = () => {

    const [item,setItem] = useState("");
    const [todos,setTodos] = useState([]);
  
    const onChangeHandler = e => {
      setItem(e.target.value);
    }
  
  
    const additem = () => {
      setTodos([...todos,{item:item,key:Date.now()}]);
      console.log(todos)
      setItem("")
    }
  return (
    <Box>
        <Box sx={{display:'flex', justifyContent:'center', mt:5, flexDirection:'column',alignItems:'center',
            bgcolor:'darkgray',padding:5}}>
        <Typography variant='h5' sx={{fontFamily:"Roboto", fontWeight:500}}>
            Task
        </Typography>
        <TextField id="outlined-basic" variant="outlined" placeholder='Write task Here....' sx={{width:400,
        borderColor:'blue'}} value={item} onChange={onChangeHandler}/>&nbsp;
        <Button variant="contained" onClick={additem}>ADD</Button>
        </Box>
        <List todos={todos} setTodos={setTodos}/>
    </Box>
  )
}

export default Task
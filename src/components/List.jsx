import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

const List = (props) => {

const deleteitem = (key) => {
    const newList = props.todos.filter((itemObj) => {
        return itemObj.key !== key;
    })
    props.setTodos(newList)
}
  return (
    <Box sx={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center',mt:3}}>
        {props.todos.map((itemObj) => {
        return <div style={{display:'flex', justifyContent:'space-between'}}>
            <Typography padding={1}>
                {itemObj.item}
            </Typography>
            <Button variant="contained" sx={{bgcolor:'red',margin:1}} onClick={() => deleteitem(itemObj.key)}>Delete</Button>
        </div>
                
        })}
    </Box>
  )
}




export default List;
import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import Task from './components/Task';

const App = () => {

  const [timer,setTimer] = useState(25)
  const [shortTimer,setShortTimer] = useState(5)
  const [longTimer,setLongTimer] = useState(15)
  const [seconds,setSeconds] = useState(0)
  const [clicking,setClicking] = useState(false)
  const [ stage, setStage] = useState(0)
  const [consumedSeconds,setConsumedSeconds] = useState(0)


  const changeIndex = (index) => {
    const isYes = consumedSeconds && stage !== index ? window.confirm("Are you sure to switch the Change ") : false
    if (isYes){
      reset();
      setStage(index)
    }else if(!consumedSeconds){
      setStage(index);
    }
  }

  const getClicking = () => {
    const timeIndex = {
      0:timer,
      1:shortTimer,
      2:longTimer
    };
    return timeIndex[stage];
  }

  const updateTime = () => {
    const updatedTim = {
      0:setTimer,
      1:setShortTimer,
      2:setLongTimer
    };
    return updatedTim[stage]

  }



  const reset = () => {
    setClicking(false);
    setConsumedSeconds(0)
    setSeconds(0)
    setTimer(25)
    setShortTimer(5)
    setLongTimer(15)
  }

  const clickingTime = () => {
    const minutes = getClicking();
    const setMinutes = updateTime();
    if(minutes === 0 && seconds === 0){
      reset();
    }else if(seconds === 0){
      setMinutes((minute) => minute -1)
      setSeconds(59)
    }else{
      setSeconds((second) => second -1)
    }
  }

  useEffect(()=> {
    const timesetter = setInterval(() => {
      if(clicking){
        setConsumedSeconds((value) => value + 1)
        clickingTime();
      }
    },1000)
    return () => {
      clearInterval(timesetter)
    }
  },[seconds,timer,shortTimer,longTimer,clicking])

  return (
    <Box>
      <Navbar/>
      <Stack>
        <Timer stage={stage}  changeIndex={changeIndex} getClicking={getClicking} seconds={seconds}
        clicking={clicking} setClicking={setClicking}/>
        <Task />
      </Stack>
    </Box>
  )
}

export default App
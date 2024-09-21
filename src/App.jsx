import { useDebugValue, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setJokes]=useState([])

  useEffect(()=>{
    axios.get('')
  },[])

  return (
    <>
      <div>
        <h1>Hello</h1>
      {jokes.map((joke,index)=>{
        <h3>{joke.title}</h3>
      })}
      </div>
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [dashboardData, setDashboardData] = useState([])

  console.log(dashboardData)

  const getDashboardData = async () => {
    try{
      const response = await axios.get("http://localhost:8080/dashboard/")
      setDashboardData(response.data.data)
      
    }catch(error){
      console.log("Error: ",Error)
    }
  }

  useEffect(() => {
    getDashboardData()
  },[])

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

export default App

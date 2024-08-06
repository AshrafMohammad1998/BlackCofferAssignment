import { useState, useEffect } from 'react'
import axios from "axios"
import Header from "./components/header/Header"
import './App.css'
import { Outlet } from 'react-router-dom'
import configVariables from './configurations/Config'

function App() {
  const [dashboardData, setDashboardData] = useState([])

  console.log(dashboardData)

  const getDashboardData = async () => {
    try {
      const response = await axios.get(`${configVariables.ipAddress}/dashboard/`)
      setDashboardData(response.data.data)

    } catch (error) {
      console.log("Error: ", Error)
    }
  }

  useEffect(() => {
    getDashboardData()
  }, [])

  return (
    <div className="pt-6 bg-white dark:bg-slate-800 dark:text-white flex flex-col min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App

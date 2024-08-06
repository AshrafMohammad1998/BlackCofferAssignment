import { useState, useEffect } from 'react'
import axios from "axios"
import Header from "./components/header/Header"
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
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
      <div className="chart-container">
        <BarChart
          width={600}
          height={300}
          data={dashboardData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="topic" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="intensity" fill="#8884d8" />
          <Bar dataKey="likelihood" fill="#82ca9d" />
          <Bar dataKey="relevance" fill="#ffc658" />
        </BarChart>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App

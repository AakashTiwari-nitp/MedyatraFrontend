import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import DoctorDashboard from './pages/DoctorDashboard.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <DoctorDashboard />
    </BrowserRouter>
  )
}

export default App
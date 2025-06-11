import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DoctorDashboard from './pages/DoctorDashboard'
import Dashboard from './pages/Dashboard'
import Appointments from './pages/Appointments'
import Patients from './pages/Patients'
import Documents from './pages/Documents'
import Invoices from './pages/Invoices'
import Availability from './pages/Availability'
import AiAssistant from './pages/AiAssistant'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DoctorDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="patients" element={<Patients />} />
          <Route path="documents" element={<Documents />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="availability" element={<Availability />} />
          <Route path="ai-assistant" element={<AiAssistant />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

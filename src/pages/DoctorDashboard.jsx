import React, { useState } from 'react';
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaUsers,
  FaFileAlt,
  FaReceipt,
  FaClock,
  FaRobot,
} from 'react-icons/fa';

// Import your components
import Dashboard from './Dashboard';
import Appointments from './Appointments';
import Patients from './Patients';
import Documents from './Documents';
import Invoices from './Invoices';
import Availability from './Availability';
import AiAssistant from './AiAssistant';

const menuItems = [
  { label: 'Dashboard', icon: <FaTachometerAlt />, component: Dashboard },
  { label: 'Appointments', icon: <FaCalendarAlt />, component: Appointments },
  { label: 'Patients', icon: <FaUsers />, component: Patients },
  { label: 'Documents', icon: <FaFileAlt />, component: Documents },
  { label: 'Invoices', icon: <FaReceipt />, component: Invoices },
  { label: 'Availability', icon: <FaClock />, component: Availability },
  { label: 'AI Assistant', icon: <FaRobot />, component: AiAssistant },
];

const drawerWidth = 260;

const DoctorDashboard = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const CurrentComponent = menuItems[selectedIndex].component;

  return (
    <div className="flex bg-slate-800 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Sidebar */}
      <aside
        className={`w-[${drawerWidth}px] flex flex-col bg-white text-blue-700 shadow-lg`}
        style={{ minWidth: drawerWidth }}
      >
        <div className="flex items-center gap-3 px-6 py-4 border-b border-blue-300">
          <div className="relative w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold select-none overflow-hidden">
            <span>M</span>
          </div>
          <h1 className="text-xl font-extrabold truncate">MedYatra</h1>
        </div>

        <nav className="flex flex-col flex-grow overflow-y-auto px-2 py-4 space-y-2">
          {menuItems.map((item, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <button
                key={item.label}
                onClick={() => setSelectedIndex(idx)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 w-full
                  ${isSelected
                    ? 'bg-blue-100 text-blue-900 shadow-md font-semibold'
                    : 'text-blue-700 hover:bg-blue-50 hover:text-blue-900'
                  }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <footer className="p-4 text-center text-sm text-blue-700 border-t border-blue-300">
          © {new Date().getFullYear()} MedYatra
        </footer>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-4 md:p-6 flex justify-center items-start min-h-screen overflow-auto">
        <div className="w-full max-w-7xl bg-white bg-opacity-95 rounded-xl shadow-xl p-6 md:p-10 mt-8">
          <h2 className="text-3xl font-extrabold mb-6 text-blue-900">
            {menuItems[selectedIndex].label}
          </h2>
          <CurrentComponent />
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;

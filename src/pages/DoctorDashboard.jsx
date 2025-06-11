import React from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaUsers,
  FaFileAlt,
  FaReceipt,
  FaClock,
  FaRobot,
} from 'react-icons/fa';

const menuItems = [
  { label: 'Dashboard', icon: <FaTachometerAlt />, path: '/' },
  { label: 'Appointments', icon: <FaCalendarAlt />, path: '/appointments' },
  { label: 'Patients', icon: <FaUsers />, path: '/patients' },
  { label: 'Documents', icon: <FaFileAlt />, path: '/documents' },
  { label: 'Invoices', icon: <FaReceipt />, path: '/invoices' },
  { label: 'Availability', icon: <FaClock />, path: '/availability' },
  { label: 'AI Assistant', icon: <FaRobot />, path: '/ai-assistant' },
];

const drawerWidth = 260;

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex bg-slate-800 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Sidebar */}
      <aside
        className={`w-[${drawerWidth}px] flex flex-col bg-white text-blue-700 shadow-lg`}
        style={{ minWidth: drawerWidth }}
      >
        <div className="flex items-center gap-3 px-6 py-4 border-b border-blue-300">
          <div className="relative w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
            <span>M</span>
          </div>
          <h1 className="text-xl font-extrabold truncate">MedYatra</h1>
        </div>

        <nav className="flex flex-col flex-grow overflow-y-auto px-2 py-4 space-y-2">
          {menuItems.map((item) => {
            const isSelected = location.pathname === item.path;
            return (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
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

      {/* Main content */}
      <main className="flex-1 flex justify-center items-start min-h-screen overflow-auto">
        <div className="w-full max-w-7xl bg-white bg-opacity-95 rounded-xl min-h-screen shadow-xl p-6 md:p-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;

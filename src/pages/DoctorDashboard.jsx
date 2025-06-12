import React, { useState } from 'react';
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
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io"

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
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex bg-slate-800 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar}>
          {isOpen ? <IoMdClose size={28} /> : <CiMenuBurger size={28} />}
        </button>
        <nav className="flex flex-col flex-grow overflow-y-auto py-4 gap-5">
          {menuItems.map((item) => {
            const isSelected = location.pathname === item.path;
            return (
              <button
                key={item.label}
                onClick={() => {
                  navigate(item.path);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-4 px-2 py-3 rounded-lg transition-colors duration-200 w-full
                  ${isSelected
                    ? "bg-blue-700 text-white shadow-md font-semibold"
                    : "text-blue-700 hover:bg-blue-50 hover:text-blue-900"
                  }`}
              >
                <span className="text-lg">{item.icon}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out 
        w-[${drawerWidth}px] text-blue-700 flex flex-col
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:h-auto`}
        style={{ minWidth: drawerWidth }}
      >
        {/* Logo Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-blue-300">
          <div className="relative w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
            <span>M</span>
          </div>
          <h1 className="text-xl font-extrabold truncate">MedYatra</h1>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col flex-grow overflow-y-auto px-2 py-4 space-y-2">
          {menuItems.map((item) => {
            const isSelected = location.pathname === item.path;
            return (
              <button
                key={item.label}
                onClick={() => {
                  navigate(item.path);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 w-full
                  ${isSelected
                    ? "bg-blue-100 text-blue-900 shadow-md font-semibold"
                    : "text-blue-700 hover:bg-blue-50 hover:text-blue-900"
                  }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <footer className="p-4 text-center text-sm text-blue-700 border-t border-blue-300">
          © {new Date().getFullYear()} MedYatra
        </footer>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex justify-center items-start min-h-screen overflow-auto">
        <div className="w-full max-w-7xl bg-white bg-opacity-95 rounded-xl min-h-screen shadow-xl p-2 md:p-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;

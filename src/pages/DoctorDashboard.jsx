import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaUsers,
  FaFileAlt,
  FaReceipt,
  FaClock,
  FaRobot,
  FaMoon,
  FaAngleUp
} from 'react-icons/fa';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io"
import { MdSunny } from "react-icons/md";

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

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check localStorage on load
    const theme = localStorage.getItem('theme');
    if (theme === '1') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? '0' : '1';
    localStorage.setItem('theme', newTheme);

    if (newTheme === '1') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  };

  // console.log(isDark)

  return (
    <div className="flex bg-black dark:bg-slate-800 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-800">
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar} className='sticky top-5 z-50 flex items-center justify-center w-10 h-10 text-black dark:text-white rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110'>
          {!isOpen && <CiMenuBurger size={28} />}
        </button>
        <nav className="flex flex-col fixed flex-grow overflow-y-auto dark:bg-gray-750 py-4 gap-5">
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
                    ? "bg-blue-100 text-blue-900 dark:bg-slate-900 dark:text-blue-100 shadow-md"
                    : "text-blue-700 hover:bg-blue-50 hover:text-blue-900 dark:hover:bg-slate-700 dark:text-white"
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
        className={`fixed z-40 top-0 left-0 h-full dark:bg-gray-700 dark:text-white bg-white shadow-lg transform transition-transform duration-300 ease-in-out 
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
                className={`flex items-center gap-3 dark:text-white px-4 py-3 rounded-lg transition-colors duration-200 w-full
                  ${isSelected
                    ? "bg-blue-100 text-blue-900 dark:bg-slate-900 dark:text-blue-100 shadow-md font-semibold"
                    : "text-blue-700 hover:bg-blue-50 hover:text-blue-900 dark:hover:bg-slate-800 dark:hover:text-white"
                  }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <footer className="p-4 text-center text-sm text-blue-700 dark:text-blue-300 border-t border-blue-300">
          © {new Date().getFullYear()} MedYatra
        </footer>
      </aside>

      {/* Main content */}
      <main className="relative flex-1 dark:bg-gray-800 flex justify-center items-start min-h-screen overflow-auto">
        {/* Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="absolute top-2 right-4 z-2 flex items-center w-24 h-9 bg-gray-200 dark:bg-gray-600 rounded-full transition-all duration-500"
        >
          {/* Sun Icon */}
          <span
            className={`text-md flex items-center z-100 ml-2 justify-center w-8 h-8 rounded-full transition-all duration-500 ${isDark ? "text-yellow-500" : "text-slate-500 scale-125"
              }`}
          >
            <MdSunny size={20} />
          </span>

          {/* Sliding knob */}
          <div
            className={`w-12 h-9 rounded-full z-80 absolute transition-transform duration-500 transform
              ${isDark
                ? "translate-x-[3rem] bg-slate-500"
                : "translate-x-0 bg-yellow-400"}
              `}>
          </div>

          {/* Moon Icon */}
          <span
            className={`text-md flex items-center z-100 mr-2 justify-center w-8 h-8 rounded-full transition-all duration-500 ml-auto ${isDark ? "text-slate-100" : "text-slate-400"
              }`}
          >
            <FaMoon size={20} />
          </span>
        </button>


        {/* Content */}
        <div className="w-full max-w-7xl dark:bg-gray-800 dark:text-white bg-opacity-95 rounded-xl min-h-screen shadow-xl p-2 md:px-2 pt-12">
          <Outlet />
        </div>
      </main>

      {/* Page up */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
        aria-label="Scroll to top"
      >
        <FaAngleUp size={24} />
      </button>
    </div>
  );
};

export default DoctorDashboard;

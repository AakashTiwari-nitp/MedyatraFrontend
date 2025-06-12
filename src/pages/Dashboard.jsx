import React from 'react';
import {
  MdPersonOutline,
  MdAccessTime,
  MdArticle,
  MdMonetizationOn,
  MdTrendingUp,
  MdTrendingDown,
  MdVideocam,
  MdPhone,
  MdPersonAdd,
  MdCalendarMonth,
  MdReceiptLong,
  MdMeetingRoom,
  MdMoreVert,
  MdNotificationsNone,
  MdArrowForward,
  MdStar,
} from 'react-icons/md';

// Mock data (same as yours)
const dashboardStats = {
  totalPatients: {
    value: 247,
    change: 12,
    trend: 'up',
    icon: <MdPersonOutline size={24} />,
    label: 'Total Patients',
    subtext: 'vs last month',
    progress: 78,
  },
  appointments: {
    value: 8,
    completed: 3,
    upcoming: 5,
    icon: <MdAccessTime size={24} />,
    label: "Today's Appointments",
    subtext: 'completed, upcoming',
    progress: 62,
  },
  documents: {
    value: 14,
    icon: <MdArticle size={24} />,
    label: 'New Documents',
    subtext: 'This week',
    progress: 45,
  },
  revenue: {
    value: 8429,
    change: 8,
    trend: 'up',
    icon: <MdMonetizationOn size={24} />,
    label: 'Revenue',
    subtext: 'vs last month',
    progress: 85,
  },
};

const upcomingAppointments = [
  {
    id: 1,
    patientName: 'John Smith',
    type: 'video',
    time: '09:41 am',
    date: '24/3/2025',
    startsIn: '29 minutes',
  },
  {
    id: 2,
    patientName: 'Emily Johnson',
    type: 'phone',
    time: '11:11 am',
    date: '24/3/2025',
    startsIn: 'about 2 hours',
  },
  {
    id: 3,
    patientName: 'Michael Brown',
    type: 'in-person',
    time: '12:11 pm',
    date: '24/3/2025',
    startsIn: 'about 3 hours',
  },
];

const quickActions = [
  { label: 'New Patient', icon: <MdPersonAdd size={20} />, color: 'green' },
  { label: 'Schedule', icon: <MdCalendarMonth size={20} />, color: 'blue' },
  { label: 'Video Call', icon: <MdVideocam size={20} />, color: 'purple' },
  { label: 'Phone Call', icon: <MdPhone size={20} />, color: 'red' },
  { label: 'Generate Invoice', icon: <MdReceiptLong size={20} />, color: 'orange' },
  { label: 'Room Status', icon: <MdMeetingRoom size={20} />, color: 'gray' },
];

const doctorInfo = {
  name: 'Dr. Sarah Chen',
  role: 'Cardiologist',
  avatar: '/doctor-avatar.jpg',
};

// Helper: color shades mapping for Tailwind
const colorShades = {
  green: ['bg-green-100 dark:bg-slate-900', 'text-green-600 dark:text-green-300', 'hover:bg-green-200 dark:hover:bg-slate-950', 'shadow-green-300', 'hover:border-green-600'],
  blue: ['bg-blue-100 dark:bg-slate-900', 'text-blue-600 dark:text-blue-300', 'hover:bg-blue-200 dark:hover:bg-slate-950', 'shadow-blue-300', 'hover:border-blue-600'],
  purple: ['bg-purple-100 dark:bg-slate-900', 'text-purple-600 dark:text-purple-200', 'hover:bg-purple-200 dark:hover:bg-slate-950', 'shadow-purple-300', 'hover:border-purple-600'],
  red: ['bg-red-100 dark:bg-slate-900', 'text-red-600 dark:text-red-200', 'hover:bg-red-200 dark:hover:bg-slate-950', 'shadow-red-300', 'hover:border-red-600'],
  orange: ['bg-orange-100 dark:bg-slate-900', 'text-orange-600 dark:text-orange-200', 'hover:bg-orange-200 dark:hover:bg-slate-950', 'shadow-orange-300', 'hover:border-orange-600'],
  gray: ['bg-gray-100 dark:bg-slate-900', 'text-gray-600 dark:text-gray-300', 'hover:bg-gray-200 dark:hover:bg-slate-950', 'shadow-gray-300', 'hover:border-gray-300'],
};

const StatCard = ({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 hover:ring-2 hover:ring-blue-100 dark:hover:ring-gray-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 rounded-lg bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-blue-100">{data.icon}</div>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-100">
          <MdMoreVert size={20} />
        </button>
      </div>
      <div className="text-3xl font-semibold mb-1">
        {data.label === 'Revenue' ? `$${data.value.toLocaleString()}` : data.value.toLocaleString()}
      </div>
      <div className="text-gray-500 dark:text-gray-200 text-sm mb-6">{data.label}</div>
      <div>
        <div className="flex justify-between text-xs text-gray-400 dark:text-gray-200 mb-1">
          <span>Progress</span>
          <span>{data.progress}%</span>
        </div>
        <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
          <div
            className="h-2 rounded-full bg-blue-600"
            style={{ width: `${data.progress}%` }}
          />
        </div>
      </div>
      {data.completed !== undefined && (
        <div className="mt-4 flex gap-2">
          <span className="text-green-600 dark:text-gray-100 bg-green-100 dark:bg-slate-600 text-xs font-semibold px-2 py-1 rounded-full">{data.completed} completed</span>
          <span className="text-blue-600 bg-blue-100 dark:text-blue-200 dark:bg-slate-600 text-xs font-semibold px-2 py-1 rounded-full">{data.upcoming} upcoming</span>
        </div>
      )}
      {data.change !== undefined && (
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
          {data.trend === 'up' ? (
            <span className="flex items-center gap-1 text-green-600 bg-green-100 dark:text-blue-200 dark:bg-slate-600 px-2 py-1 rounded-full font-semibold">
              <MdTrendingUp /> +{data.change}%
            </span>
          ) : (
            <span className="flex items-center gap-1 text-red-600 bg-red-100 dark:text-blue-200 dark:bg-slate-600 px-2 py-1 rounded-full font-semibold">
              <MdTrendingDown /> {data.change}%
            </span>
          )}
          <span>{data.subtext}</span>
        </div>
      )}
    </div>
  );
};

const AppointmentCard = ({ appointment }) => {
  const getIcon = () => {
    switch (appointment.type) {
      case 'video':
        return <MdVideocam size={24} />;
      case 'phone':
        return <MdPhone size={24} />;
      default:
        return <MdMeetingRoom size={24} />;
    }
  };

  const getColor = () => {
    switch (appointment.type) {
      case 'video':
        return 'green';
      case 'phone':
        return 'blue';
      default:
        return 'yellow';
    }
  };

  const [bg, text, hoverBg, shadow, border] = colorShades[getColor()] || colorShades.gray;

  return (
    <div
      className={`border border-transparent ${border} ${shadow} ${hoverBg} rounded-lg p-4 mb-4 cursor-pointer hover:shadow-md transition-shadow ${bg} ${text}`}
    >
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg bg-transparent ${text} flex items-center justify-center w-12 h-12`}>
          {getIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold truncate">{appointment.patientName}</h3>
          <div className="flex flex-col gap-2 mt-1">
            <div
              className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-transparent ${text}`}
            >
              {appointment.type.charAt(0).toUpperCase() + appointment.type.slice(1)}
            </div>
            <div className="text-sm text-gray-600 truncate dark:text-gray-300">
              {appointment.time} • Starts in {appointment.startsIn}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end gap-2 border-t pt-2">
        <button className="border border-gray-300 rounded-md px-3 py-1 text-sm hover:bg-gray-100 dark:hover:text-black transition">
          Reschedule
        </button>
        {appointment.type === 'video' && (
          <button
            className={`bg-green-600 text-white rounded-md px-3 py-1 text-sm flex items-center gap-1 hover:bg-green-700 transition`}
          >
            <MdVideocam /> Start Early
          </button>
        )}
      </div>
    </div>
  );
};

const QuickActionButton = ({ action }) => {
  const [bg, text, hoverBg, shadow, hoverBorder] = colorShades[action.color] || colorShades.gray;

  return (
    <button
      className={`flex items-center justify-between w-full md:w-3/10 p-4 rounded-xl border border-transparent ${bg} ${text} ${hoverBg} ${hoverBorder} border-2 border-transparent hover:shadow-md transition-shadow gap-2`}
    >
      <div className="flex items-center gap-2">
        {action.icon}
        <span className="font-semibold">{action.label}</span>
      </div>
      <MdArrowForward />
    </button>
  );
};


const Dashboard = () => {
  return (
    <div className="relative p-4 md:p-6 bg-gray-50 dark:bg-gray-700 rounded-lg min-h-screen">
      {/* Header Actions */}
      <div className="absolute top-[-45px] right-35 flex gap-4">
        <button
          className="bg-white dark:bg-slate-700 dark:text-white p-2 rounded-full shadow-md hover:bg-blue-100 dark:hover:bg-slate-400 transition"
          aria-label="Notifications"
        >
          <MdNotificationsNone size={24} />
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {Object.entries(dashboardStats).map(([key, data]) => (
          <StatCard key={key} data={data} />
        ))}
      </div>

      {/* Appointments Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 text-blue-600 dark:text-blue-200">
          Upcoming Appointments
          <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-2 rounded-full">
            {upcomingAppointments.length}
          </span>
        </h2>
        <button className="text-blue-600 border-2 border-transparent hover:border-blue-600 hover:bg-blue-100 dark:text-white dark:hover:bg-slate-600 dark:hover:border-blue-200 rounded px-3 py-1 transition-colors">
          View all appointments <MdArrowForward className="inline-block" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {upcomingAppointments.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </div>

      {/* Quick Actions Section */}
      <hr className="my-10" />
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 text-yellow-600 dark:text-yellow-200">
          Quick Actions
          <span className="flex items-center bg-yellow-100 dark:bg-slate-900 text-yellow-600 dark:text-yellow-200 text-sm font-semibold px-2 rounded-full">
            <MdStar size={16} /> Essential
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap gap-3 mb-10">
        {quickActions.map((action) => (
          <QuickActionButton key={action.label} action={action} />
        ))}
      </div>

      {/* Doctor Information */}
      <hr className="my-10" />
      <div className="bg-white dark:bg-slate-900 dark:hover:bg-slate-950 border border-gray-200 hover:border-blue-600 rounded-xl p-6 flex items-center gap-6 shadow-sm hover:shadow-md transition-transform hover:-translate-y-1 cursor-pointer">
        <div className="relative w-16 h-16 rounded-full bg-gray-400 dark:bg-gray-700 border-2 border-blue-600 flex items-center justify-center text-white text-xl font-bold select-none overflow-hidden">
          <span>D</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{doctorInfo.name}</h3>
          <p className="text-gray-500">{doctorInfo.role}</p>
          <div className="flex gap-2 mt-2">
            <span className="text-green-600 bg-green-100 dark:text-gray-300 dark:bg-green-900 text-xs font-semibold px-2 py-1 rounded-full">Available</span>
            <span className="text-yellow-600 bg-yellow-100 dark:text-yellow-300 dark:bg-slate-700 text-xs font-semibold px-2 py-1 rounded-full">Top Rated</span>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MdMoreVert size={24} />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

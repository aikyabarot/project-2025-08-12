import React from 'react';
import { useAppData } from '../context/AppContext';
import { DashboardIcon, ClientsIcon, JobsIcon, LogoutIcon } from './Icons';

const logo = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="40"><rect width="80" height="40" rx="6" fill="%2381A1F7"/><text x="10" y="26" font-family="Arial" font-size="16" fill="white">Buxton</text></svg>';

export default function Sidebar({ onNavigate, onLogout }) {
  const { activeUser, currentPage } = useAppData();

  const NavItem = ({ id, icon, label }) => (
    <button
      onClick={() => onNavigate(id)}
      className={`w-full flex items-center px-4 py-2 rounded-md text-left ${
        (id === 'dashboard' && currentPage === 'dashboard') ||
        (id === 'clients' && currentPage.startsWith('client')) ||
        (id === 'jobs' && currentPage === 'jobs')
          ? 'bg-gray-900 text-white'
          : 'text-gray-200 hover:bg-gray-700'
      }`}
    >
      {icon}
      <span className="ml-3">{label}</span>
    </button>
  );

  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="h-16 flex items-center justify-center border-b border-gray-700">
        <img src={logo} alt="Buxton Logo" className="h-8" />
      </div>
      <nav className="flex-1 p-3 space-y-2">
        <NavItem id="dashboard" icon={<DashboardIcon />} label="Dashboard" />
        <NavItem id="clients" icon={<ClientsIcon />} label="Clients" />
        <NavItem id="jobs" icon={<JobsIcon />} label="Jobs" />
      </nav>
      <div className="p-4 border-t border-gray-700">
        <p className="text-sm font-semibold">{activeUser?.name}</p>
        <p className="text-xs text-gray-400">{activeUser?.role}</p>
        <button
          onClick={onLogout}
          className="w-full mt-4 text-left flex items-center text-sm text-red-400 hover:text-red-300"
        >
          <LogoutIcon />
          <span className="ml-2">Logout</span>
        </button>
      </div>
    </aside>
  );
}
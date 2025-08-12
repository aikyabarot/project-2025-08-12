import React from 'react';
import { useAppData } from '../context/AppContext';
import PlacementRateChart from './PlacementRateChart';

export default function DashboardPage({ onNavigate }) {
  const { getOpenJobsCount, getClients, getJobs } = useAppData();

  const metrics = [
    { label: 'Open Jobs', value: getOpenJobsCount() },
    { label: 'Active Clients', value: getClients().length },
    { label: 'Total Jobs', value: getJobs().length }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <div className="space-x-2">
          <button
            onClick={() => onNavigate('clients')}
            className="bg-gray-800 text-white px-3 py-2 rounded hover:bg-gray-700"
          >
            View Clients
          </button>
          <button
            onClick={() => onNavigate('jobs')}
            className="bg-indigo-600 text-white px-3 py-2 rounded hover:bg-indigo-700"
          >
            View Jobs
          </button>
        </div>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="bg-white rounded shadow p-4">
            <p className="text-gray-500 text-sm">{m.label}</p>
            <p className="text-2xl font-bold mt-1">{m.value}</p>
          </div>
        ))}
      </section>

      <section className="bg-white rounded shadow p-4">
        <h3 className="font-semibold mb-4">Placement Rate (Mock)</h3>
        <PlacementRateChart />
      </section>
    </div>
  );
}
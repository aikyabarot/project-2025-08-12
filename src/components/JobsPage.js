import React from 'react';
import { useAppData } from '../context/AppContext';

export default function JobsPage({ onNavigate }) {
  const { getJobs } = useAppData();
  const jobs = getJobs();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Jobs</h2>
      <div className="bg-white rounded shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-2" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {jobs.map((j) => (
              <tr key={j.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="font-medium">{j.title}</div>
                  <div className="text-xs text-gray-500">{j.type} • {j.employmentType}</div>
                </td>
                <td className="px-4 py-3">{j.clientId}</td>
                <td className="px-4 py-3">{j.location}</td>
                <td className="px-4 py-3">
                  <span className="inline-block text-xs px-2 py-1 rounded bg-indigo-50 text-indigo-700">{j.status}</span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button className="text-indigo-600 hover:text-indigo-800" onClick={() => onNavigate?.('dashboard')}>
                    Open
                  </button>
                </td>
              </tr>
            ))}
            {jobs.length === 0 && (
              <tr>
                <td className="px-4 py-6 text-center text-gray-500" colSpan={5}>
                  No jobs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
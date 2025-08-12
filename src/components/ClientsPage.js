import React from 'react';
import { useAppData } from '../context/AppContext';

export default function ClientsPage({ onNavigate }) {
  const { getClients, getJobsForClient } = useAppData();
  const clients = getClients();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Clients</h2>
      <div className="bg-white rounded shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Open Jobs</th>
              <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Satisfaction</th>
              <th className="px-4 py-2" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {clients.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="font-medium">{c.name}</div>
                  <div className="text-xs text-gray-500">{c.address}</div>
                </td>
                <td className="px-4 py-3">{getJobsForClient(c.id).length}</td>
                <td className="px-4 py-3">{c.satisfaction}%</td>
                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => onNavigate('clientDetail', { clientId: c.id })}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    View Details →
                  </button>
                </td>
              </tr>
            ))}
            {clients.length === 0 && (
              <tr>
                <td className="px-4 py-6 text-center text-gray-500" colSpan={4}>
                  No clients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
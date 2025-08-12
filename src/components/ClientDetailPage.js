import React, { useMemo, useState } from 'react';
import { useAppData } from '../context/AppContext';
import { ArrowLeftIcon, PlusIcon } from './Icons';

export default function ClientDetailPage({ context, onNavigate }) {
  const { getClient, getJobsForClient, getPeople, addClientContact } = useAppData();
  const clientId = context?.clientId;
  const client = useMemo(() => getClient(clientId), [clientId, getClient]);
  const jobs = useMemo(() => getJobsForClient(clientId), [clientId, getJobsForClient]);
  const people = getPeople();

  const [form, setForm] = useState({ name: '', position: '', email: '' });

  if (!client) {
    return (
      <div>
        <button
          className="text-sm text-gray-600 hover:text-gray-800 mb-4"
          onClick={() => onNavigate('clients')}
        >
          <span className="inline-flex items-center"><ArrowLeftIcon className="mr-1" /> Back to Clients</span>
        </button>
        <div className="bg-white p-6 rounded shadow">Client not found.</div>
      </div>
    );
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.position || !form.email) return;
    addClientContact(client.id, { name: form.name, position: form.position, email: form.email });
    setForm({ name: '', position: '', email: '' });
  };

  const getPersonName = (personId) => people.find(p => p.personId === personId)?.name || 'Unknown';

  return (
    <div className="space-y-6">
      <button
        className="text-sm text-gray-600 hover:text-gray-800"
        onClick={() => onNavigate('clients')}
      >
        <span className="inline-flex items-center"><ArrowLeftIcon className="mr-1" /> Back to Clients</span>
      </button>

      <div className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-semibold">{client.name}</h2>
        <p className="text-gray-600 mt-1">{client.address}</p>
        <p className="text-gray-700 mt-4">{client.notes}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-50 rounded p-4">
            <p className="text-sm text-gray-500">Satisfaction</p>
            <p className="text-2xl font-bold">{client.satisfaction}%</p>
          </div>
          <div className="bg-gray-50 rounded p-4">
            <p className="text-sm text-gray-500">Avg Time to Fill</p>
            <p className="text-2xl font-bold">{client.avgTimeToFill} days</p>
          </div>
          <div className="bg-gray-50 rounded p-4">
            <p className="text-sm text-gray-500">Open Roles</p>
            <p className="text-2xl font-bold">{jobs.length}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="bg-white rounded shadow p-4 lg:col-span-2">
          <h3 className="font-semibold mb-3">Jobs</h3>
          <ul className="divide-y">
            {jobs.map(j => (
              <li key={j.id} className="py-3">
                <div className="font-medium">{j.title}</div>
                <div className="text-sm text-gray-500">{j.location} • {j.employmentType} • {j.status}</div>
                <div className="text-xs text-gray-400 mt-1">Posted: {j.posted}</div>
              </li>
            ))}
            {jobs.length === 0 && <li className="py-3 text-gray-500">No jobs for this client.</li>}
          </ul>
        </section>

        <section className="bg-white rounded shadow p-4">
          <h3 className="font-semibold mb-3">Contacts</h3>
          <ul className="space-y-3 mb-4">
            {client.contacts.map(ct => (
              <li key={ct.contactId} className="border rounded p-3">
                <div className="font-medium">{getPersonName(ct.personId)}</div>
                <div className="text-sm text-gray-600">{ct.position}</div>
                <div className="text-xs text-gray-500">{ct.email}</div>
              </li>
            ))}
            {client.contacts.length === 0 && <li className="text-gray-500">No contacts yet.</li>}
          </ul>

          <form onSubmit={onSubmit} className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-700">Add New Contact</h4>
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
            />
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Position"
              value={form.position}
              onChange={(e) => setForm(f => ({ ...f, position: e.target.value }))}
            />
            <input
              type="email"
              className="w-full border rounded px-3 py-2"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
            />
            <button
              type="submit"
              className="inline-flex items-center bg-indigo-600 text-white rounded px-3 py-2 hover:bg-indigo-700"
            >
              <PlusIcon className="mr-1" /> Add Contact
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
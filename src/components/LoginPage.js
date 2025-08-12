import React, { useState } from 'react';
import { useAppData } from '../context/AppContext';

export default function LoginPage() {
  const { login } = useAppData();
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) login(email.trim());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={onSubmit}
        className="bg-white rounded-lg shadow p-8 w-full max-w-md"
      >
        <h1 className="text-2xl font-semibold mb-2">Gray Matter by Buxton</h1>
        <p className="text-gray-600 mb-6">Sign in with your email to continue</p>
        <input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring focus:ring-indigo-200"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded px-4 py-2"
        >
          Sign In
        </button>
        <p className="text-xs text-gray-500 mt-4">
          Try recruiter@buxton.com, manager@buxton.com, admin@buxton.com, tech@buxton.com, or executive@buxton.com
        </p>
      </form>
    </div>
  );
}
import React from 'react';

export default function Toast({ message }) {
  return (
    <div className="fixed bottom-6 right-6 bg-gray-900 text-white px-4 py-2 rounded shadow animate-fade-in-out">
      {message}
    </div>
  );
}
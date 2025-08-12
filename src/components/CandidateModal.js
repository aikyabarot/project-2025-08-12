import React from 'react';

export default function CandidateModal({ profile, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Candidate Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {profile && (
          <div className="space-y-3">
            <div>
              <h3 className="font-medium">{profile.name}</h3>
              <p className="text-gray-600">{profile.title}</p>
            </div>
            
            {profile.email && (
              <div>
                <span className="text-sm text-gray-500">Email:</span>
                <p className="text-sm">{profile.email}</p>
              </div>
            )}
            
            {profile.skills && (
              <div>
                <span className="text-sm text-gray-500">Skills:</span>
                <p className="text-sm">{profile.skills}</p>
              </div>
            )}
            
            {profile.experience && (
              <div>
                <span className="text-sm text-gray-500">Experience:</span>
                <p className="text-sm">{profile.experience}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
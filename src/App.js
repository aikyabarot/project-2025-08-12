import React from 'react';
import { AppProvider, useAppData } from './context/AppContext';
import Sidebar from './components/Sidebar';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import ClientsPage from './components/ClientsPage';
import ClientDetailPage from './components/ClientDetailPage';
import JobsPage from './components/JobsPage';
import CandidateModal from './components/CandidateModal';
import Toast from './components/Toast';

function AppContent() {
  const {
    activeUser,
    logout,
    currentPage,
    pageContext,
    navigate,
    isCandidateModalOpen,
    closeCandidateModal,
    selectedCandidateId,
    getCandidateProfile,
    toastMessage
  } = useAppData();

  if (!activeUser) {
    return <LoginPage />;
  }

  const candidateProfile = selectedCandidateId
    ? getCandidateProfile(selectedCandidateId)
    : undefined;

  const renderPage = () => {
    switch (currentPage) {
      case 'clients':
        return <ClientsPage onNavigate={navigate} />;
      case 'clientDetail':
        return <ClientDetailPage context={pageContext} onNavigate={navigate} />;
      case 'jobs':
        return <JobsPage onNavigate={navigate} />;
      case 'dashboard':
      default:
        return <DashboardPage onNavigate={navigate} />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar onNavigate={navigate} onLogout={logout} />
      <main className="flex-1 p-6 overflow-y-auto">
        {renderPage()}
      </main>

      {isCandidateModalOpen && candidateProfile && (
        <CandidateModal profile={candidateProfile} onClose={closeCandidateModal} />
      )}

      {toastMessage && <Toast message={toastMessage} />}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
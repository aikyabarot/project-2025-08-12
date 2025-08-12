import React, { createContext, useContext, useMemo, useState } from 'react';
import {
  MOCK_USERS,
  MOCK_CLIENTS,
  MOCK_JOBS,
  MOCK_CANDIDATES,
  MOCK_PEOPLE
} from '../data/mockData';

const AppContext = createContext(undefined);

export function AppProvider({ children }) {
  // Auth and navigation
  const [activeUser, setActiveUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [pageContext, setPageContext] = useState(null);

  // UI state
  const [isCandidateModalOpen, setCandidateModalOpen] = useState(false);
  const [selectedCandidateId, setSelectedCandidateId] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Data state (mock "DB")
  const [clients, setClients] = useState(MOCK_CLIENTS);
  const [jobs] = useState(MOCK_JOBS);
  const [candidates] = useState(MOCK_CANDIDATES);
  const [people, setPeople] = useState(MOCK_PEOPLE);

  // Auth
  const login = (email) => {
    const user = MOCK_USERS.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (user) {
      setActiveUser(user);
      navigate('dashboard');
    } else {
      showToast('User not found');
    }
  };

  const logout = () => {
    setActiveUser(null);
    setCurrentPage('login');
  };

  // Navigation
  const navigate = (page, context = null) => {
    setCurrentPage(page);
    setPageContext(context);
  };

  // Candidate modal
  const openCandidateModal = (candidateId) => {
    setSelectedCandidateId(candidateId);
    setCandidateModalOpen(true);
  };
  const closeCandidateModal = () => {
    setCandidateModalOpen(false);
    setSelectedCandidateId(null);
  };

  // Toast
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Helpers
  const addClientContact = (clientId, newContact /* { name, position, email } */) => {
    const newPersonId = Math.max(0, ...people.map(p => p.personId)) + 1;
    const newPerson = { personId: newPersonId, name: newContact.name };
    setPeople(prev => [...prev, newPerson]);

    const newContactId = Math.max(
      0,
      ...clients.flatMap(c => c.contacts.map(ct => ct.contactId))
    ) + 1;

    const contactToAdd = {
      contactId: newContactId,
      personId: newPersonId,
      position: newContact.position,
      email: newContact.email
    };

    setClients(prev =>
      prev.map(c => (c.id === clientId ? { ...c, contacts: [...c.contacts, contactToAdd] } : c))
    );

    showToast('Contact added successfully!');
  };

  const getCandidateProfile = (candidateId) => {
    const candidate = candidates.find(c => c.id === candidateId);
    if (!candidate) return undefined;
    const job = jobs.find(j => j.id === candidate.associatedJobId);
    if (!job) return undefined;
    return { ...candidate, job };
  };

  const getClient = (clientId) => clients.find(c => c.id === clientId);
  const getJobsForClient = (clientId) => jobs.filter(j => j.clientId === clientId);
  const getOpenJobsCount = () => jobs.filter(j => j.status === 'Open').length;
  const getJobs = () => jobs;
  const getClients = () => clients;
  const getPeople = () => people;

  const value = useMemo(
    () => ({
      // State
      activeUser,
      currentPage,
      pageContext,
      isCandidateModalOpen,
      selectedCandidateId,
      toastMessage,

      // Auth
      login,
      logout,

      // Nav
      navigate,

      // UI
      openCandidateModal,
      closeCandidateModal,
      showToast,

      // Data ops
      addClientContact,
      getCandidateProfile,
      getClient,
      getJobsForClient,
      getOpenJobsCount,
      getJobs,
      getClients,
      getPeople
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      activeUser,
      currentPage,
      pageContext,
      isCandidateModalOpen,
      selectedCandidateId,
      toastMessage
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppData() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppData must be used within AppProvider');
  return ctx;
}
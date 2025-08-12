// Users
export const MOCK_USERS = [
  { id: 1, name: 'Recruiter', email: 'recruiter@buxton.com', role: 'recruiter' },
  { id: 2, name: 'Account Manager', email: 'manager@buxton.com', role: 'account_manager' },
  { id: 3, name: 'Admin', email: 'admin@buxton.com', role: 'admin' },
  { id: 4, name: 'Technical Reviewer', email: 'tech@buxton.com', role: 'technical_manager' },
  { id: 5, name: 'Executive', email: 'executive@buxton.com', role: 'executive' }
];

// People linked to contacts
export const MOCK_PEOPLE = [
  { personId: 1, name: 'Samantha Bee', linkedIn: 'linkedin.com/in/samanthabee' },
  { personId: 2, name: 'David Chen', linkedIn: 'linkedin.com/in/davidchen' },
  { personId: 3, name: 'Maria Garcia', linkedIn: 'linkedin.com/in/mariagarcia' }
];

// Clients
export const MOCK_CLIENTS = [
  {
    id: 101,
    name: 'Innovatech Solutions',
    address: '123 Tech Park, Silicon Valley, CA',
    notes: 'Leading AI research firm. High-demand for ML engineers.',
    satisfaction: 95,
    avgTimeToFill: 28,
    contacts: [
      { contactId: 1, personId: 1, position: 'Hiring Manager', email: 's.bee@innovatech.com' }
    ]
  },
  {
    id: 102,
    name: 'QuantumLeap Dynamics',
    address: '456 Future Drive, Boston, MA',
    notes: 'Focus on quantum computing. Requires PhD-level candidates.',
    satisfaction: 88,
    avgTimeToFill: 45,
    contacts: [
      { contactId: 2, personId: 2, position: 'Lead Recruiter', email: 'd.chen@quantumleap.com' }
    ]
  }
];

// Jobs
export const MOCK_JOBS = [
  {
    id: 201,
    clientId: 101,
    title: 'Senior Machine Learning Engineer',
    location: 'Remote',
    type: 'Tech',
    employmentType: 'Full-time',
    startDate: '2024-08-01',
    salary: '$180,000',
    posted: '2024-06-10',
    status: 'Open',
    recruiterId: 1,
    description: 'Seeking a senior ML engineer to lead our new predictive analytics team.'
  },
  {
    id: 202,
    clientId: 102,
    title: 'Quantum Research Scientist',
    location: 'Boston, MA',
    type: 'Research',
    employmentType: 'Full-time',
    startDate: '2024-09-01',
    salary: '$220,000',
    posted: '2024-05-20',
    status: 'Open',
    recruiterId: 1,
    description: 'PhD in Quantum Physics or related field required. Post-doc experience preferred.'
  }
];

// Candidates
export const MOCK_CANDIDATES = [
  {
    id: 301,
    name: 'Alice Johnson',
    role: 'Machine Learning Engineer',
    experience: '8 years',
    education: 'M.S. in Computer Science',
    location: 'San Francisco, CA',
    phone: '555-1234',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'AWS'],
    availabilityStatus: 'Available Immediately',
    pipelineStatus: 'Initial Screen',
    statusHistory: [{ status: 'Sourced', date: '2024-06-15', actor: 'Recruiter' }],
    notes: 'Strong background in NLP. Great communication skills.',
    feedback: { recruiter: 'Excellent', technical: '', manager: '' },
    resumes: [{ name: 'Alice_Johnson_Resume.pdf', date: '2024-06-15' }],
    associatedJobId: 201,
    aiMatch: 92
  },
  {
    id: 302,
    name: 'Bob Williams',
    role: 'Quantum Physicist',
    experience: '5 years post-doc',
    education: 'Ph.D. in Quantum Information',
    location: 'Cambridge, MA',
    phone: '555-5678',
    skills: ['Qiskit', 'Quantum Algorithms', 'Cryogenics'],
    availabilityStatus: 'Actively Looking',
    pipelineStatus: 'Submitted to Client',
    statusHistory: [
      { status: 'Sourced', date: '2024-06-01', actor: 'Recruiter' },
      { status: 'Initial Screen', date: '2024-06-05', actor: 'Recruiter' },
      { status: 'Technical Screen', date: '2024-06-10', actor: 'Technical Reviewer' }
    ],
    notes: 'Published several papers on quantum entanglement.',
    feedback: { recruiter: 'Strong candidate', technical: 'Passed', manager: '' },
    resumes: [{ name: 'BW_CV_Quantum.pdf', date: '2024-06-01' }],
    associatedJobId: 202,
    aiMatch: 88
  }
];
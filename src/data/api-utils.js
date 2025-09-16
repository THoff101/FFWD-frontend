// API simulation utilities for realistic backend integration patterns

export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// Generic API request wrapper
export const apiRequest = async (endpoint, options = {}) => {
  // Simulate network delay
  const delay = Math.random() * 1000 + 500; // 500-1500ms
  await new Promise(resolve => setTimeout(resolve, delay));

  // Simulate errors occasionally for testing
  if (Math.random() < 0.05) { // 5% chance of error
    throw new Error('Network error - please try again');
  }

  const defaultOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAuthToken()}`,
    },
  };

  const config = { ...defaultOptions, ...options };

  // In a real app, this would be a fetch call
  // return fetch(`${API_BASE_URL}${endpoint}`, config);
  
  // For now, we'll return mock responses based on endpoint
  return simulateAPIResponse(endpoint, config);
};

// Mock auth token (in real app, this would come from auth system)
export const getAuthToken = () => {
  return localStorage.getItem('authToken') || 'mock-jwt-token-12345';
};

// Simulate API responses based on endpoint patterns
const simulateAPIResponse = async (endpoint, config) => {
  const { method, body } = config;
  
  // Parse endpoint and extract parameters
  const [basePath, ...params] = endpoint.split('/').filter(Boolean);
  
  switch (basePath) {
    case 'consolidations':
      return handleConsolidationsAPI(method, params, body);
    case 'jobs':
      return handleJobsAPI(method, params, body);
    case 'documents':
      return handleDocumentsAPI(method, params, body);
    case 'tracking':
      return handleTrackingAPI(method, params, body);
    default:
      throw new Error(`Unknown endpoint: ${endpoint}`);
  }
};

// Consolidations API handlers
const handleConsolidationsAPI = async (method, params, body) => {
  const { mockConsolidations } = await import('./mock-jobs.js');
  
  switch (method) {
    case 'GET':
      if (params.length === 0) {
        // GET /consolidations - list all
        return {
          data: mockConsolidations,
          total: mockConsolidations.length,
          page: 1,
          limit: 50
        };
      } else {
        // GET /consolidations/:id - get specific consolidation
        const id = params[0];
        const consolidation = mockConsolidations.find(c => c.id === id);
        if (!consolidation) throw new Error('Consolidation not found');
        return { data: consolidation };
      }
    
    case 'POST':
      // POST /consolidations - create new consolidation
      const newConsolidation = JSON.parse(body);
      const created = {
        ...newConsolidation,
        id: `CONS-${Date.now().toString().slice(-6)}`,
        status: 'In Progress',
        currentStage: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      return { data: created };
    
    case 'PUT':
    case 'PATCH':
      // PUT/PATCH /consolidations/:id - update consolidation
      const updateId = params[0];
      const updates = JSON.parse(body);
      return {
        data: {
          id: updateId,
          ...updates,
          updatedAt: new Date().toISOString()
        }
      };
    
    default:
      throw new Error(`Method ${method} not supported for consolidations`);
  }
};

// Jobs API handlers
const handleJobsAPI = async (method, params, body) => {
  const { mockIndividualJobs } = await import('./mock-jobs.js');
  
  switch (method) {
    case 'GET':
      if (params.length === 0) {
        // GET /jobs - list all jobs
        return {
          data: mockIndividualJobs,
          total: mockIndividualJobs.length,
          page: 1,
          limit: 50
        };
      } else {
        // GET /jobs/:id - get specific job
        const id = params[0];
        const job = mockIndividualJobs.find(j => j.id === id);
        if (!job) throw new Error('Job not found');
        return { data: job };
      }
    
    case 'POST':
      // POST /jobs - create new job
      const newJob = JSON.parse(body);
      const created = {
        ...newJob,
        id: `JOB-${Date.now().toString().slice(-5)}`,
        status: 'In Progress',
        currentStage: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      return { data: created };
    
    case 'PUT':
    case 'PATCH':
      // PUT/PATCH /jobs/:id - update job
      const updateId = params[0];
      const updates = JSON.parse(body);
      return {
        data: {
          id: updateId,
          ...updates,
          updatedAt: new Date().toISOString()
        }
      };
    
    default:
      throw new Error(`Method ${method} not supported for jobs`);
  }
};

// Documents API handlers
const handleDocumentsAPI = async (method, params, body) => {
  switch (method) {
    case 'GET':
      if (params[0] === 'templates') {
        // GET /documents/templates - get document templates
        const { documentTypes } = await import('./documents.js');
        return { data: documentTypes };
      } else {
        // GET /documents/:id - get specific document
        const id = params[0];
        return {
          data: {
            id,
            name: 'Sample Document',
            type: 'commercial-invoice',
            url: `/documents/${id}.pdf`,
            createdAt: new Date().toISOString()
          }
        };
      }
    
    case 'POST':
      if (params[0] === 'generate') {
        // POST /documents/generate - generate document
        const { type, data } = JSON.parse(body);
        const { generateDocument } = await import('./documents.js');
        const document = await generateDocument(type, data);
        return { data: document };
      } else {
        // POST /documents - upload document
        const documentData = JSON.parse(body);
        return {
          data: {
            id: `DOC-${Date.now()}`,
            ...documentData,
            uploadedAt: new Date().toISOString()
          }
        };
      }
    
    default:
      throw new Error(`Method ${method} not supported for documents`);
  }
};

// Tracking API handlers
const handleTrackingAPI = async (method, params, body) => {
  switch (method) {
    case 'GET':
      const id = params[0];
      return {
        data: {
          id,
          events: [
            {
              timestamp: new Date(Date.now() - 86400000).toISOString(),
              status: 'Picked up',
              location: 'Shanghai Port',
              description: 'Cargo collected from shipper'
            },
            {
              timestamp: new Date(Date.now() - 43200000).toISOString(),
              status: 'In transit',
              location: 'Shanghai Port',
              description: 'Loaded on vessel COSCO Galaxy'
            },
            {
              timestamp: new Date().toISOString(),
              status: 'In transit',
              location: 'Pacific Ocean',
              description: 'Vessel departed Shanghai'
            }
          ]
        }
      };
    
    default:
      throw new Error(`Method ${method} not supported for tracking`);
  }
};

// Utility functions for common API patterns
export const createResource = async (endpoint, data) => {
  return apiRequest(endpoint, {
    method: 'POST',
    body: JSON.stringify(data)
  });
};

export const updateResource = async (endpoint, id, data) => {
  return apiRequest(`${endpoint}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data)
  });
};

export const deleteResource = async (endpoint, id) => {
  return apiRequest(`${endpoint}/${id}`, {
    method: 'DELETE'
  });
};

export const getResource = async (endpoint, id = null) => {
  const path = id ? `${endpoint}/${id}` : endpoint;
  return apiRequest(path);
};

// Error handling utility
export const handleAPIError = (error) => {
  console.error('API Error:', error);
  
  if (error.message.includes('Network')) {
    return 'Network error - please check your connection and try again';
  }
  
  if (error.message.includes('not found')) {
    return 'The requested resource was not found';
  }
  
  return error.message || 'An unexpected error occurred';
};

// Loading state management
export class APILoadingManager {
  constructor() {
    this.loadingStates = new Map();
    this.listeners = new Set();
  }
  
  setLoading(key, isLoading) {
    this.loadingStates.set(key, isLoading);
    this.notifyListeners();
  }
  
  isLoading(key) {
    return this.loadingStates.get(key) || false;
  }
  
  addListener(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }
  
  notifyListeners() {
    this.listeners.forEach(callback => callback(this.loadingStates));
  }
}

export const globalLoadingManager = new APILoadingManager();
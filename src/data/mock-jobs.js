// Mock data for jobs and consolidations
export const mockConsolidations = [
  {
    id: 'CONS-001234',
    title: 'Shanghai to Los Angeles - Electronics Consolidation',
    status: 'In Progress',
    currentStage: 3,
    createdAt: '2025-01-15T08:30:00Z',
    updatedAt: '2025-01-18T15:22:00Z',
    totalJobs: 3,
    totalWeight: '2150 kg',
    totalVolume: '3.8 m³',
    estimatedDelivery: '2025-02-05',
    template: 'Import LCL',
    origin: {
      port: 'Shanghai Port (CNSHA)',
      country: 'China',
      city: 'Shanghai'
    },
    destination: {
      port: 'Los Angeles Port (USLAX)',
      country: 'United States',
      city: 'Los Angeles'
    },
    carrier: 'COSCO Shipping',
    vessel: 'COSCO Galaxy',
    voyageNumber: 'CG2501',
    individualJobs: [
      {
        id: 'JOB-001001',
        poNumber: 'PO-2025-001',
        template: 'Import LCL',
        status: 'In Progress',
        currentStage: 3,
        shipper: {
          company: 'ABC Electronics Ltd',
          contact: 'Zhang Wei',
          email: 'zhang.wei@abcelectronics.cn',
          phone: '+86 21 1235 5678',
          address: '123 Technology Road',
          city: 'Shanghai',
          country: 'China',
          postalCode: '200001'
        },
        consignee: {
          company: 'XYZ Corp',
          contact: 'John Smith',
          email: 'john.smith@xyzcorp.com',
          phone: '+1 310 555 0123',
          address: '556 Business Blvd',
          city: 'Los Angeles',
          country: 'United States',
          postalCode: '90210'
        },
        cargo: {
          description: 'Electronic Components',
          weight: '750 kg',
          volume: '1.2 m³',
          pieces: 15,
          commodityCode: '8552.31'
        },
        dates: {
          cargoReadyDate: '2025-01-20',
          estimatedDeparture: '2025-01-25',
          estimatedArrival: '2025-02-03',
          estimatedDelivery: '2025-02-05'
        }
      },
      {
        id: 'JOB-001002',
        poNumber: 'PO-2025-002',
        template: 'Import LCL',
        status: 'In Progress',
        currentStage: 3,
        shipper: {
          company: 'DEF Manufacturing',
          contact: 'Li Ming',
          email: 'li.ming@defmfg.cn',
          phone: '+86 21 2355 6789',
          address: '789 Industrial Ave',
          city: 'Shanghai',
          country: 'China',
          postalCode: '200002'
        },
        consignee: {
          company: 'XYZ Corp',
          contact: 'John Smith',
          email: 'john.smith@xyzcorp.com',
          phone: '+1 310 555 0123',
          address: '556 Business Blvd',
          city: 'Los Angeles',
          country: 'United States',
          postalCode: '90210'
        },
        cargo: {
          description: 'Precision Instruments',
          weight: '850 kg',
          volume: '1.5 m³',
          pieces: 8,
          commodityCode: '9031.80'
        },
        dates: {
          cargoReadyDate: '2025-01-22',
          estimatedDeparture: '2025-01-25',
          estimatedArrival: '2025-02-03',
          estimatedDelivery: '2025-02-05'
        }
      },
      {
        id: 'JOB-001003',
        poNumber: 'PO-2025-003',
        template: 'Import LCL',
        status: 'In Progress',
        currentStage: 2,
        shipper: {
          company: 'GHI Textiles',
          contact: 'Wang Lei',
          email: 'wang.lei@ghitextiles.cn',
          phone: '+86 21 3556 7890',
          address: '321 Fabric Street',
          city: 'Shanghai',
          country: 'China',
          postalCode: '200003'
        },
        consignee: {
          company: 'ABC Retail',
          contact: 'Sarah Johnson',
          email: 'sarah.johnson@abcretail.com',
          phone: '+1 310 555 0556',
          address: '789 Retail Plaza',
          city: 'Los Angeles',
          country: 'United States',
          postalCode: '90211'
        },
        cargo: {
          description: 'Cotton Fabrics',
          weight: '550 kg',
          volume: '1.2 m³',
          pieces: 12,
          commodityCode: '5208.12'
        },
        dates: {
          cargoReadyDate: '2025-01-25',
          estimatedDeparture: '2025-01-25',
          estimatedArrival: '2025-02-03',
          estimatedDelivery: '2025-02-05'
        }
      }
    ]
  },
  {
    id: 'CONS-001235',
    title: 'Hamburg to New York - Auto Parts Consolidation',
    status: 'Completed',
    currentStage: 7,
    createdAt: '2025-01-08T10:15:00Z',
    updatedAt: '2025-01-25T16:55:00Z',
    totalJobs: 2,
    totalWeight: '1800 kg',
    totalVolume: '2.5 m³',
    estimatedDelivery: '2025-01-25',
    template: 'Import FCL',
    origin: {
      port: 'Hamburg Port (DEHAM)',
      country: 'Germany',
      city: 'Hamburg'
    },
    destination: {
      port: 'New York Port (USNYC)',
      country: 'United States',
      city: 'New York'
    },
    carrier: 'Hapag-Lloyd',
    vessel: 'Hamburg Express',
    voyageNumber: 'HE2501',
    individualJobs: [
      {
        id: 'JOB-001005',
        poNumber: 'PO-2025-005',
        template: 'Import FCL',
        status: 'Completed',
        currentStage: 7,
        shipper: {
          company: 'German Auto Parts GmbH',
          contact: 'Hans Mueller',
          email: 'hans.mueller@gaparts.de',
          phone: '+59 50 1235 5678',
          address: 'Autostraße 123',
          city: 'Hamburg',
          country: 'Germany',
          postalCode: '20095'
        },
        consignee: {
          company: 'USA Motors Inc',
          contact: 'Mike Wilson',
          email: 'mike.wilson@usamotors.com',
          phone: '+1 212 555 0789',
          address: '567 Motor Ave',
          city: 'New York',
          country: 'United States',
          postalCode: '10001'
        },
        cargo: {
          description: 'Automotive Parts',
          weight: '1200 kg',
          volume: '1.8 m³',
          pieces: 25,
          commodityCode: '8708.99'
        },
        dates: {
          cargoReadyDate: '2025-01-10',
          estimatedDeparture: '2025-01-12',
          estimatedArrival: '2025-01-22',
          estimatedDelivery: '2025-01-25'
        }
      }
    ]
  }
];

export const mockIndividualJobs = [
  {
    id: 'JOB-002001',
    consolidationId: null, // Standalone job
    poNumber: 'PO-2025-005',
    template: 'Air Import',
    status: 'In Progress',
    currentStage: 1,
    createdAt: '2025-01-16T09:20:00Z',
    updatedAt: '2025-01-19T11:30:00Z',
    shipper: {
      company: 'Tech Innovations LLC',
      contact: 'Alice Brown',
      email: 'alice.brown@techinnovations.com',
      phone: '+1 555 123 5567',
      address: '123 Innovation Dr',
      city: 'San Francisco',
      country: 'United States',
      postalCode: '95105'
    },
    consignee: {
      company: 'European Tech Solutions',
      contact: 'Pierre Dubois',
      email: 'pierre.dubois@eurotech.fr',
      phone: '+33 1 23 55 67 89',
      address: '556 Tech Boulevard',
      city: 'Paris',
      country: 'France',
      postalCode: '75001'
    },
    cargo: {
      description: 'Prototype Electronics',
      weight: '25 kg',
      volume: '0.3 m³',
      pieces: 3,
      commodityCode: '8552.39'
    },
    dates: {
      cargoReadyDate: '2025-01-18',
      estimatedDeparture: '2025-01-20',
      estimatedArrival: '2025-01-21',
      estimatedDelivery: '2025-01-22'
    },
    flight: {
      airline: 'Air France',
      flightNumber: 'AF083',
      departure: 'SFO',
      arrival: 'CDG'
    }
  }
];

// API simulation functions
export const fetchConsolidations = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  return mockConsolidations;
};

export const fetchConsolidationById = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockConsolidations.find(consolidation => consolidation.id === id);
};

export const fetchJobById = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Search in consolidation jobs first
  for (const consolidation of mockConsolidations) {
    const job = consolidation.individualJobs?.find(job => job.id === id);
    if (job) return job;
  }
  
  // Search in individual jobs
  return mockIndividualJobs.find(job => job.id === id);
};

export const createConsolidation = async (consolidationData) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const newConsolidation = {
    ...consolidationData,
    id: `CONS-${Date.now().toString().slice(-6)}`,
    status: 'In Progress',
    currentStage: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  mockConsolidations.unshift(newConsolidation);
  return newConsolidation;
};

export const updateJobStage = async (jobId, newStage) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Update in consolidations
  for (const consolidation of mockConsolidations) {
    const job = consolidation.individualJobs?.find(job => job.id === jobId);
    if (job) {
      job.currentStage = newStage;
      job.updatedAt = new Date().toISOString();
      if (newStage === 7) job.status = 'Completed';
      return job;
    }
  }
  
  // Update in individual jobs
  const job = mockIndividualJobs.find(job => job.id === jobId);
  if (job) {
    job.currentStage = newStage;
    job.updatedAt = new Date().toISOString();
    if (newStage === 7) job.status = 'Completed';
    return job;
  }
  
  throw new Error('Job not found');
};

export const createStandaloneJob = async (jobData) => {
  await new Promise(resolve => setTimeout(resolve, 500)); // simulate API
  const newJob = {
    ...jobData,
    id: `JOB-${Date.now().toString().slice(-6)}`,
    status: "In Progress",
    currentStage: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    consolidationId: null, // standalone
  };
  mockIndividualJobs.unshift(newJob);
  return newJob;
};

// Attach an existing standalone job to a consolidation
export const addJobToConsolidation = async (jobId, consolidationId) => {
  await new Promise(resolve => setTimeout(resolve, 500));

  const jobIndex = mockIndividualJobs.findIndex(j => j.id === jobId);
  if (jobIndex === -1) throw new Error("Job not found");

  const [job] = mockIndividualJobs.splice(jobIndex, 1);

  const consolidation = mockConsolidations.find(c => c.id === consolidationId);
  if (!consolidation) throw new Error("Consolidation not found");

  consolidation.individualJobs.push({
    ...job,
    consolidationId,
    updatedAt: new Date().toISOString(),
  });

  return consolidation;
};
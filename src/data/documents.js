// Document types and templates for freight forwarding
export const documentTypes = [
  {
    id: 'commercial-invoice',
    name: 'Commercial Invoice',
    category: 'commercial',
    description: 'Invoice for commercial goods',
    required: true,
    canGenerate: true,
    template: {
      fields: ['invoiceNumber', 'date', 'shipper', 'consignee', 'items', 'totalValue', 'currency', 'paymentTerms']
    }
  },
  {
    id: 'packing-list',
    name: 'Packing List',
    category: 'commercial',
    description: 'Detailed list of packed items',
    required: true,
    canGenerate: true,
    template: {
      fields: ['packingListNumber', 'date', 'shipper', 'consignee', 'packages', 'totalWeight', 'totalVolume']
    }
  },
  {
    id: 'bill-of-lading',
    name: 'Bill of Lading (B/L)',
    category: 'transport',
    description: 'Ocean freight transport document',
    required: true,
    canGenerate: false,
    template: null
  },
  {
    id: 'house-bl',
    name: 'House Bill of Lading',
    category: 'transport',
    description: 'House B/L for LCL shipments',
    required: true,
    canGenerate: true,
    template: {
      fields: ['blNumber', 'date', 'vessel', 'voyage', 'portOfLoading', 'portOfDischarge', 'shipper', 'consignee']
    }
  },
  {
    id: 'air-waybill',
    name: 'Air Waybill (AWB)',
    category: 'transport',
    description: 'Air freight transport document',
    required: true,
    canGenerate: true,
    template: {
      fields: ['awbNumber', 'date', 'airline', 'flight', 'departure', 'arrival', 'shipper', 'consignee']
    }
  },
  {
    id: 'certificate-of-origin',
    name: 'Certificate of Origin',
    category: 'customs',
    description: 'Document certifying country of origin',
    required: false,
    canGenerate: true,
    template: {
      fields: ['certificateNumber', 'date', 'countryOfOrigin', 'exporter', 'consignee', 'goods']
    }
  },
  {
    id: 'export-license',
    name: 'Export License',
    category: 'customs',
    description: 'Government export authorization',
    required: false,
    canGenerate: false,
    template: null
  },
  {
    id: 'import-license',
    name: 'Import License',
    category: 'customs',
    description: 'Government import authorization',
    required: false,
    canGenerate: false,
    template: null
  },
  {
    id: 'customs-declaration',
    name: 'Customs Declaration',
    category: 'customs',
    description: 'Customs entry declaration',
    required: true,
    canGenerate: true,
    template: {
      fields: ['declarationNumber', 'date', 'declarant', 'goods', 'value', 'duties', 'taxes']
    }
  },
  {
    id: 'insurance-certificate',
    name: 'Insurance Certificate',
    category: 'insurance',
    description: 'Cargo insurance document',
    required: false,
    canGenerate: true,
    template: {
      fields: ['policyNumber', 'date', 'insurer', 'insured', 'cargo', 'insuredValue', 'coverage']
    }
  },
  {
    id: 'inspection-certificate',
    name: 'Inspection Certificate',
    category: 'quality',
    description: 'Third-party inspection certificate',
    required: false,
    canGenerate: false,
    template: null
  },
  {
    id: 'fumigation-certificate',
    name: 'Fumigation Certificate',
    category: 'quality',
    description: 'Pest control treatment certificate',
    required: false,
    canGenerate: false,
    template: null
  },
  {
    id: 'weight-certificate',
    name: 'Weight Certificate',
    category: 'quality',
    description: 'Official weight verification',
    required: false,
    canGenerate: true,
    template: {
      fields: ['certificateNumber', 'date', 'weigher', 'cargo', 'grossWeight', 'netWeight', 'tareWeight']
    }
  },
  {
    id: 'phytosanitary-certificate',
    name: 'Phytosanitary Certificate',
    category: 'health',
    description: 'Plant health certificate',
    required: false,
    canGenerate: false,
    template: null
  },
  {
    id: 'dangerous-goods-declaration',
    name: 'Dangerous Goods Declaration',
    category: 'safety',
    description: 'Hazardous materials declaration',
    required: false,
    canGenerate: true,
    template: {
      fields: ['declarationNumber', 'date', 'shipper', 'carrier', 'unNumber', 'properShippingName', 'hazardClass']
    }
  },
  {
    id: 'temperature-control-certificate',
    name: 'Temperature Control Certificate',
    category: 'quality',
    description: 'Temperature-controlled transport certificate',
    required: false,
    canGenerate: true,
    template: {
      fields: ['certificateNumber', 'date', 'carrier', 'cargo', 'temperatureRange', 'monitoringMethod']
    }
  }
];

export const documentCategories = [
  { id: 'commercial', name: 'Commercial Documents', color: '#3B82F6' },
  { id: 'transport', name: 'Transport Documents', color: '#10B981' },
  { id: 'customs', name: 'Customs Documents', color: '#F59E0B' },
  { id: 'insurance', name: 'Insurance Documents', color: '#8B5CF6' },
  { id: 'quality', name: 'Quality Documents', color: '#EF4444' },
  { id: 'health', name: 'Health Documents', color: '#06B6D4' },
  { id: 'safety', name: 'Safety Documents', color: '#F97316' }
];

export const getDocumentById = (id) => {
  return documentTypes.find(doc => doc.id === id);
};

export const getDocumentsByCategory = (category) => {
  return documentTypes.filter(doc => doc.category === category);
};

export const getGeneratableDocuments = () => {
  return documentTypes.filter(doc => doc.canGenerate);
};

export const getRequiredDocuments = () => {
  return documentTypes.filter(doc => doc.required);
};

// Mock document generation function
export const generateDocument = async (documentType, data) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const document = getDocumentById(documentType);
  if (!document || !document.canGenerate) {
    throw new Error('Document cannot be generated');
  }
  
  return {
    id: `DOC-${Date.now()}`,
    type: documentType,
    name: document.name,
    generatedAt: new Date().toISOString(),
    data: data,
    downloadUrl: `/documents/${documentType}-${Date.now()}.pdf`,
    status: 'generated'
  };
};
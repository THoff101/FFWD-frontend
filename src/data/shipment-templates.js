// Shipment templates and their associated document requirements
export const shipmentTemplates = [
  {
    id: 'export-fcl',
    name: 'Export FCL',
    type: 'export',
    containerType: 'fcl',
    description: 'Full Container Load Export',
    requiredDocuments: [
      'Commercial Invoice',
      'Packing List',
      'Bill of Lading (B/L)',
      'Export License',
      'Certificate of Origin',
      'Insurance Certificate'
    ],
    optionalDocuments: [
      'Inspection Certificate',
      'Fumigation Certificate',
      'Weight Certificate'
    ]
  },
  {
    id: 'export-lcl',
    name: 'Export LCL',
    type: 'export',
    containerType: 'lcl',
    description: 'Less than Container Load Export',
    requiredDocuments: [
      'Commercial Invoice',
      'Packing List',
      'House Bill of Lading',
      'Export Declaration',
      'Certificate of Origin'
    ],
    optionalDocuments: [
      'Insurance Certificate',
      'Inspection Certificate'
    ]
  },
  {
    id: 'import-fcl',
    name: 'Import FCL',
    type: 'import',
    containerType: 'fcl',
    description: 'Full Container Load Import',
    requiredDocuments: [
      'Commercial Invoice',
      'Packing List',
      'Bill of Lading (B/L)',
      'Import License',
      'Customs Declaration',
      'Insurance Certificate'
    ],
    optionalDocuments: [
      'Certificate of Origin',
      'Inspection Certificate',
      'Phytosanitary Certificate'
    ]
  },
  {
    id: 'import-lcl',
    name: 'Import LCL',
    type: 'import',
    containerType: 'lcl',
    description: 'Less than Container Load Import',
    requiredDocuments: [
      'Commercial Invoice',
      'Packing List',
      'House Bill of Lading',
      'Import Declaration',
      'Customs Clearance'
    ],
    optionalDocuments: [
      'Certificate of Origin',
      'Insurance Certificate'
    ]
  },
  {
    id: 'air-export',
    name: 'Air Export',
    type: 'export',
    containerType: 'air',
    description: 'Air Freight Export',
    requiredDocuments: [
      'Commercial Invoice',
      'Packing List',
      'Air Waybill (AWB)',
      'Export Declaration',
      'Certificate of Origin'
    ],
    optionalDocuments: [
      'Insurance Certificate',
      'Dangerous Goods Declaration',
      'Temperature Control Certificate'
    ]
  },
  {
    id: 'air-import',
    name: 'Air Import',
    type: 'import',
    containerType: 'air',
    description: 'Air Freight Import',
    requiredDocuments: [
      'Commercial Invoice',
      'Packing List',
      'Air Waybill (AWB)',
      'Import Declaration',
      'Customs Clearance'
    ],
    optionalDocuments: [
      'Certificate of Origin',
      'Insurance Certificate',
      'Dangerous Goods Declaration'
    ]
  }
];

export const getTemplateById = (id) => {
  return shipmentTemplates.find(template => template.id === id);
};

export const getTemplatesByType = (type) => {
  return shipmentTemplates.filter(template => template.type === type);
};
// Job progress stages for freight forwarding process
export const jobStages = [
  {
    id: 1,
    name: 'Booking & Preparation',
    description: 'Initial booking and documentation preparation',
    tasks: [
      'Receive booking request',
      'Verify cargo details',
      'Prepare initial documentation',
      'Confirm shipping schedule'
    ]
  },
  {
    id: 2,
    name: 'Documentation & Compliance',
    description: 'Complete documentation and regulatory compliance',
    tasks: [
      'Prepare commercial invoice',
      'Generate packing list',
      'Obtain required certificates',
      'Submit regulatory filings'
    ]
  },
  {
    id: 3,
    name: 'Collection & Pickup',
    description: 'Cargo collection and warehouse receipt',
    tasks: [
      'Schedule pickup',
      'Collect cargo from shipper',
      'Inspect cargo condition',
      'Generate warehouse receipt'
    ]
  },
  {
    id: 4,
    name: 'Export Clearance',
    description: 'Export customs clearance and departure',
    tasks: [
      'Submit export declaration',
      'Obtain export clearance',
      'Load cargo for transport',
      'Confirm departure'
    ]
  },
  {
    id: 5,
    name: 'Transit & Tracking',
    description: 'In-transit monitoring and updates',
    tasks: [
      'Monitor shipment progress',
      'Provide tracking updates',
      'Handle transit issues',
      'Confirm arrival at destination'
    ]
  },
  {
    id: 6,
    name: 'Import Clearance',
    description: 'Import customs clearance and release',
    tasks: [
      'Submit import declaration',
      'Pay duties and taxes',
      'Obtain import clearance',
      'Release cargo for delivery'
    ]
  },
  {
    id: 7,
    name: 'Completion & Settlement',
    description: 'Final delivery and settlement',
    tasks: [
      'Deliver to consignee',
      'Obtain delivery confirmation',
      'Generate final invoice',
      'Complete settlement'
    ]
  }
];

export const getStageById = (id) => {
  return jobStages.find(stage => stage.id === id);
};

export const getStageProgress = (currentStage, totalStages = 7) => {
  return Math.round((currentStage / totalStages) * 100);
};
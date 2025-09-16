// Location data for ports, airports, and cities
export const ports = [
  { code: 'CNSHA', name: 'Shanghai Port', city: 'Shanghai', country: 'China', type: 'sea' },
  { code: 'CNNGB', name: 'Ningbo Port', city: 'Ningbo', country: 'China', type: 'sea' },
  { code: 'CNSZX', name: 'Shenzhen Port', city: 'Shenzhen', country: 'China', type: 'sea' },
  { code: 'USLAX', name: 'Los Angeles Port', city: 'Los Angeles', country: 'United States', type: 'sea' },
  { code: 'USLGB', name: 'Long Beach Port', city: 'Long Beach', country: 'United States', type: 'sea' },
  { code: 'USNYC', name: 'New York Port', city: 'New York', country: 'United States', type: 'sea' },
  { code: 'DEHAM', name: 'Hamburg Port', city: 'Hamburg', country: 'Germany', type: 'sea' },
  { code: 'NLRTM', name: 'Rotterdam Port', city: 'Rotterdam', country: 'Netherlands', type: 'sea' },
  { code: 'SGSIN', name: 'Singapore Port', city: 'Singapore', country: 'Singapore', type: 'sea' },
  { code: 'AEDXB', name: 'Dubai Port', city: 'Dubai', country: 'UAE', type: 'sea' }
];

export const airports = [
  { code: 'PVG', name: 'Shanghai Pudong International Airport', city: 'Shanghai', country: 'China', type: 'air' },
  { code: 'PEK', name: 'Beijing Capital International Airport', city: 'Beijing', country: 'China', type: 'air' },
  { code: 'CAN', name: 'Guangzhou Baiyun International Airport', city: 'Guangzhou', country: 'China', type: 'air' },
  { code: 'LAX', name: 'Los Angeles International Airport', city: 'Los Angeles', country: 'United States', type: 'air' },
  { code: 'JFK', name: 'John F. Kennedy International Airport', city: 'New York', country: 'United States', type: 'air' },
  { code: 'SFO', name: 'San Francisco International Airport', city: 'San Francisco', country: 'United States', type: 'air' },
  { code: 'FRA', name: 'Frankfurt Airport', city: 'Frankfurt', country: 'Germany', type: 'air' },
  { code: 'CDG', name: 'Charles de Gaulle Airport', city: 'Paris', country: 'France', type: 'air' },
  { code: 'LHR', name: 'Heathrow Airport', city: 'London', country: 'United Kingdom', type: 'air' },
  { code: 'DXB', name: 'Dubai International Airport', city: 'Dubai', country: 'UAE', type: 'air' }
];

export const getAllLocations = () => {
  return [...ports, ...airports];
};

export const getLocationsByType = (type) => {
  if (type === 'sea') return ports;
  if (type === 'air') return airports;
  return getAllLocations();
};

export const searchLocations = (query, type = null) => {
  const locations = type ? getLocationsByType(type) : getAllLocations();
  const searchTerm = query.toLowerCase();
  
  return locations.filter(location => 
    location.name.toLowerCase().includes(searchTerm) ||
    location.city.toLowerCase().includes(searchTerm) ||
    location.country.toLowerCase().includes(searchTerm) ||
    location.code.toLowerCase().includes(searchTerm)
  );
};
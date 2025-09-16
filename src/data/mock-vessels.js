

// src/data/mock-vessels.js
// Initial vessel data
export let mockVessels = [
  { id: 1, name: "MSC TIANPING", imoNumber: "9305489", mmsiNumber: "636020495", flag: "Liberia", type: "Container Ship" },
  { id: 2, name: "SYNERGY BUSAN", imoNumber: "9450571", mmsiNumber: "477189600", flag: "Hong Kong", type: "Container Ship" },
  { id: 3, name: "VENETIA", imoNumber: "9400203", mmsiNumber: "255805657", flag: "Panama", type: "Container Ship" },
  { id: 4, name: "CMA CGM DUTCH HARBOR", imoNumber: "9389409", mmsiNumber: "356509000", flag: "Panama", type: "Container Ship" },
  { id: 5, name: "GOOD PROSPECT", imoNumber: "9321031", mmsiNumber: "565559000", flag: "Singapore", type: "Container Ship" },
  { id: 6, name: "WIDE JULIET", imoNumber: "9698264", mmsiNumber: "538005752", flag: "Marshall Islands", type: "Cargo" },
  { id: 7, name: "TRANSHIP", imoNumber: "0000000", mmsiNumber: "0000000", flag: "Unknown", type: "Unknown" },
  { id: 8, name: "ZHONG GU JIANG SU", imoNumber: "9400148", mmsiNumber: "563831000", flag: "Singapore", type: "Container Ship" },
  { id: 9, name: "BRIGHT", imoNumber: "9778399", mmsiNumber: "255806057", flag: "Portugal", type: "Container Ship" },
  { id: 10, name: "SYNERGY OAKLAND", imoNumber: "9450583", mmsiNumber: "477192900", flag: "Hong Kong", type: "Container Ship" }
];

export function createVessel(vessel) {
  const maxId = mockVessels.length > 0 ? Math.max(...mockVessels.map(v => v.id)) : 0;
  const newVessel = { ...vessel, id: maxId + 1 };
  mockVessels.push(newVessel);
  return newVessel;
}

export function updateVessel(id, updatedFields) {
  mockVessels = mockVessels.map(v => v.id === id ? { ...v, ...updatedFields } : v);
}

export function deleteVessel(id) {
  mockVessels = mockVessels.filter(v => v.id !== id);
}
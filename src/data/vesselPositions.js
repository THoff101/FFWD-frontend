const vesselPositions = {
    vessel: {
      mmsi: "123456789",
      name: "Test Vessel",
      origin: { port: "Shanghai", lat: 31.2304, lon: 121.4737 },
      destination: { port: "Sydney", lat: -33.8688, lon: 151.2093 },
    },
    track: [
      { lat: 31.2304, lon: 121.4737, timestamp: "2025-09-10T00:00:00Z" },
      { lat: 28.5, lon: 125.0, timestamp: "2025-09-12T12:00:00Z" },
      { lat: 25.0, lon: 130.0, timestamp: "2025-09-14T06:00:00Z" },
      { lat: 20.0, lon: 140.0, timestamp: "2025-09-16T18:00:00Z" },
      { lat: 15.0, lon: 145.0, timestamp: "2025-09-17T12:00:00Z" },
      { lat: 10.0, lon: 150.0, timestamp: "2025-09-18T08:00:00Z" }, // current
    ],
  };
  
  export default vesselPositions;
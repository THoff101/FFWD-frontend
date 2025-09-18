import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const WidgetContainer = styled.div`
  border: 1px solid #d1d5db;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
  width: 80vw;
  height: 80vh;
  margin: 0 auto;
`;

const ShipTrackingWidget = ({
  mmsi = "",
  mapStyle = "simple",
  showTrack = "",
  showInfo = "",
  fleet = "",
  lat = "",
  lng = "",
  zoom = "",
  showNames = "1",
  scrollWheel = "1",
  showMenu = "0",
}) => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    window.mst_width = "100%";
    window.mst_height = "100%";
    window.mst_border = "0";
    window.mst_mmsi = mmsi;
    window.mst_maptype = mapStyle;
    window.mst_showtrack = showTrack;
    window.mst_showinfo = showInfo;
    window.mst_fleet = fleet;
    window.mst_lat = lat;
    window.mst_lng = lng;
    window.mst_zoom = zoom;
    window.mst_shownames = showNames;
    window.mst_scrollwheel = scrollWheel;
    window.mst_showmenu = showMenu;
  
    const loadMap = () => {
      if (!document.getElementById("myshiptrackingscript")) {
        const script = document.createElement("script");
        script.id = "myshiptrackingscript";
        script.src = "https://www.myshiptracking.com/js/widgetApi.js";
        script.async = true;
        script.defer = true;
        widgetRef.current.appendChild(script);
        console.log("📦 Script appended to container");
      }
    };
    setTimeout(loadMap, 0);
  
    return () => {
      console.log("Cleanup running");
      const existing = document.getElementById("myshiptrackingscript");
      if (existing && existing.parentNode) {
        existing.parentNode.removeChild(existing);
      }
      if (widgetRef.current) {
        widgetRef.current.innerHTML = "";
      }
    };
  }, [mmsi, mapStyle, showTrack, showInfo, fleet, lat, lng, zoom, showNames, scrollWheel, showMenu]);
  
  return (
    <WidgetContainer id="myshiptracking" ref={widgetRef} />
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-top: 2%;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  color: #1f2937;
`;

export const MyShipTracking = () => {
  return (
    <AppContainer>
      <Title>Ship Tracking</Title>
      <ShipTrackingWidget
        mmsi="477192900"
        showTrack="true"
        showInfo="true"
      />
    </AppContainer>
  );
};
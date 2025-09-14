import "react";
import { createContext, useContext, useState } from "react";

const TabContext = createContext(null);

export const TabProvider = ({ tabContent }) => {
  const [openTabs, setOpenTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const openTab = (tab) => {
    if (!openTabs.find((t) => t.id === tab.id)) {
      setOpenTabs((prev) => [...prev, tab]);
    }
    setActiveTab(tab.id);
  };

  const closeTab = (id) => {
    setOpenTabs((prev) => prev.filter((t) => t.id !== id));
    if (activeTab === id) {
      setActiveTab(openTabs.length ? openTabs[0].id : null);
    }
  };

  return (
    <TabContext.Provider value={{ openTabs, activeTab, openTab, closeTab }}>
      {tabContent}
    </TabContext.Provider>
  );
};

export const useTabs = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabs must be used within TabProvider");
  }
  return context;
};
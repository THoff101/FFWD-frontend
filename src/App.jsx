import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ConsolidationCreationProcess } from "./components/consolidation-creation-process";
import { ConsolidationDetailsPage } from "./components/consolidation-details-page";
import { IndividualJobDetailsPage } from "./components/individual-job-details-page";
import { JobsPage } from "./components/jobs-page";
import { DashboardPage } from "./components/dashboard-page";
import { ResponsiveSidebar } from "./components/responsive-sidebar";
import { ThemeProvider } from "./contexts/theme-context";
import { ConsolidationProvider } from "./contexts/consolidation-context";
import { useState } from "react";
import { JobCreationPage } from "./components/job-creation-page";
import { JobProvider } from "./contexts/job-context";

function AppLayout() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(true);

  return (
    <div style={{ 
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)'
    }}>
      {/* Sidebar */}
      <ResponsiveSidebar 
        isMobileOpen={isMobileSidebarOpen}
        onMobileToggle={setIsMobileSidebarOpen}
      />
      
      {/* Main Content */}
      <main style={{
        flex: 1,
        minWidth: 0, // Prevents flex item from overflowing
        marginLeft: 0 // Reset margin, sidebar handles positioning
      }}>
        <Routes>
          {/* Dashboard Route */}
          <Route path="/" element={<DashboardPage />} />
          
          {/* Jobs Route */}
          <Route path="/jobs" element={<JobsPage />} />
          
          {/* Create Consolidation Route */}
          <Route path="/create" element={<ConsolidationCreationProcess />} />
          
          {/* Consolidation Details Route */}
          <Route path="/consolidation/:id" element={<ConsolidationDetailsPage />} />
          
          {/* Individual Job Details Route */}
          <Route path="/consolidation/:consolidationId/job/:jobId" element={<IndividualJobDetailsPage />} />

          <Route path="/job/:jobId" element={<IndividualJobDetailsPage />} />

          <Route path="/job/create" element={<JobCreationPage />} />
          {/* Redirect unknown routes to dashboard */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ConsolidationProvider>
        <JobProvider>
          <Router>
            <AppLayout />
          </Router>
        </JobProvider>
      </ConsolidationProvider>
    </ThemeProvider>
  );
}
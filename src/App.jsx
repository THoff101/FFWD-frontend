import "react";
import { BrowserRouter as Router, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TabProvider } from "./context/TabContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastProvider } from "./ui/ToastProvider";
import { Layout } from "./components/Layout";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import UnauthorisedPage from "./pages/UnauthorisedPage";
import ConsolidationCreationProcess from "./pages/ConsolidationCreationProcess";
import ConsolidationDetailsPage from "./pages/ConsolidationDetailsPage";
import JobCreationProcess from "./pages/JobCreationProcess";
import JobDetailsPage from "./pages/JobDetailsPage";
import IndividualJobDetailsPage from "./pages/IndividualJobDetailsPage";
import JobsPage from "./pages/JobsPage";


const App = () => {
  return (
    <AuthProvider appContent={
      <TabProvider tabContent={
        <ToastProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/unauthorised" element={<UnauthorisedPage />} />
              {/* Protected routes group */}
              <Route
                element={
                  <ProtectedRoute roles={["admin", "operations", "customer"]}>
                    <Layout />
                  </ProtectedRoute>
                }
              >
                <Route path="/" element={<DashboardPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route path="/jobs/:id" element={<JobDetailsPage />} />
                <Route path="/jobs/:id/individual" element={<IndividualJobDetailsPage />} />
                <Route path="/consolidation/:id" element={<ConsolidationDetailsPage />} />
              </Route>
              {/* Routes with different permissions */}
              <Route
                path="/consolidation/new"
                element={
                  <ProtectedRoute roles={["admin", "operations"]}>
                    <Layout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<ConsolidationCreationProcess />} />
              </Route>
              <Route
                path="/jobs/new"
                element={
                  <ProtectedRoute roles={["admin", "operations"]}>
                    <Layout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<JobCreationProcess />} />
              </Route>
            </Routes>
          </Router>
        </ToastProvider>
      } />
    } />
  );
};

export default App;
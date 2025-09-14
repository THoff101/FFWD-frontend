import "react";
import styled from "styled-components";
import { ModernSidebar } from "./ModernSidebar";
import { Outlet } from "react-router-dom";

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const Layout = () => {
  return (
    <PageContainer>
      {/* Sidebar always visible */}
      <ModernSidebar />
      {/* Page-specific content */}
      <MainContent>
        <Outlet />
      </MainContent>
    </PageContainer>
  );
};
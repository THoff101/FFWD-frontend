import styled from "styled-components";
import { Package, BarChart3, FileText, Settings, Home, Ship } from "lucide-react";

// Styled Components
const SidebarContainer = styled.div`
  width: 16rem;
  background-color: white;
  border-right: 1px solid #e5e7eb;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const LogoSection = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #f3f4f6;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const LogoIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #2563eb;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoPackageIcon = styled(Package)`
  width: 1.25rem;
  height: 1.25rem;
  color: white;
`;

const LogoText = styled.div``;

const LogoTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const Navigation = styled.nav`
  flex: 1;
  padding: 1rem;
`;

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const NavItem = styled.a<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
  
  ${props => props.$isActive ? `
    background-color: #eff6ff;
    color: #1d4ed8;
    border: 1px solid #bfdbfe;
  ` : `
    color: #4b5563;
    border: 1px solid transparent;
    
    &:hover {
      background-color: #f9fafb;
      color: #111827;
    }
  `}
`;

const NavIcon = styled.div<{ $isActive: boolean }>`
  width: 1.25rem;
  height: 1.25rem;
  color: ${props => props.$isActive ? '#2563eb' : '#9ca3af'};
  
  ${NavItem}:hover & {
    color: ${props => props.$isActive ? '#2563eb' : '#4b5563'};
  }
`;

const NavLabel = styled.span`
  font-weight: 500;
`;

interface ModernSidebarProps {
  currentPage?: string;
}

export function ModernSidebar({ currentPage = "jobs" }: ModernSidebarProps) {
  const navItems = [
    { icon: Home, label: "Dashboard", key: "dashboard" },
    { icon: FileText, label: "Jobs", key: "jobs" },
    { icon: Package, label: "Consolidations", key: "consolidations" },
    { icon: BarChart3, label: "Analytics", key: "analytics" },
    { icon: Settings, label: "Settings", key: "settings" },
  ];

  return (
    <SidebarContainer>
      {/* Logo Section */}
      <LogoSection>
        <LogoContainer>
          <LogoIcon>
            <LogoPackageIcon />
          </LogoIcon>
          <LogoText>
            <LogoTitle>FFWD</LogoTitle>
          </LogoText>
        </LogoContainer>
      </LogoSection>
      
      {/* Navigation */}
      <Navigation>
        <NavList>
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              href="#"
              $isActive={item.key === currentPage}
            >
              <NavIcon $isActive={item.key === currentPage}>
                <item.icon />
              </NavIcon>
              <NavLabel>{item.label}</NavLabel>
            </NavItem>
          ))}
        </NavList>
      </Navigation>
    </SidebarContainer>
  );
}
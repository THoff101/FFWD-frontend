import { useState } from "react";
import styled from "styled-components";
import { Package, BarChart3, FileText, Settings, Home, Ship, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

// Responsive styled components with mobile-first approach
const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 40;
  display: ${props => props.$isOpen ? 'block' : 'none'};
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: clamp(16rem, 45vw, 20rem);
  background-color: var(--sidebar);
  border-right: 1px solid var(--sidebar-border);
  transform: translateX(${props => props.$isOpen ? '0' : '-100%'});
  transition: transform 0.3s ease-in-out;
  z-index: 50;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    position: static;
    width: clamp(14rem, 20vw, 16rem);
    transform: translateX(0);
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    z-index: 10;
  }
`;

const MobileMenuButton = styled(Button)`
  position: fixed;
  top: clamp(0.75rem, 3vw, 1rem);
  left: clamp(0.75rem, 3vw, 1rem);
  z-index: 60;
  background-color: var(--primary);
  color: var(--primary-foreground);
  border-radius: 0.5rem;
  width: clamp(2.5rem, 8vw, 3rem);
  height: clamp(2.5rem, 8vw, 3rem);
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    display: none;
  }
  
  &:hover {
    background-color: var(--primary);
    opacity: 0.9;
  }
`;

const LogoSection = styled.div`
  padding: clamp(1rem, 4vw, 1.5rem);
  border-bottom: 1px solid var(--sidebar-border);
  background-color: var(--sidebar);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 0.75rem);
`;

const LogoIcon = styled.div`
  width: clamp(1.75rem, 6vw, 2rem);
  height: clamp(1.75rem, 6vw, 2rem);
  background-color: var(--sidebar-primary);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoPackageIcon = styled(Package)`
  width: clamp(1rem, 3vw, 1.25rem);
  height: clamp(1rem, 3vw, 1.25rem);
  color: var(--sidebar-primary-foreground);
`;

const LogoText = styled.div`
  min-width: 0;
`;

const LogoTitle = styled.h2`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: var(--sidebar-foreground);
  margin: 0;
`;

const LogoSubtitle = styled.p`
  font-size: clamp(0.625rem, 2vw, 0.75rem);
  color: var(--sidebar-accent-foreground);
  margin: 0;
  opacity: 0.8;
`;

const Navigation = styled.nav`
  flex: 1;
  padding: clamp(0.75rem, 3vw, 1rem);
  background-color: var(--sidebar);
`;

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.125rem, 0.5vw, 0.25rem);
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 0.75rem);
  padding: clamp(0.5rem, 2vw, 0.75rem) clamp(0.75rem, 3vw, 1rem);
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  
  ${props => props.$isActive ? `
    background-color: var(--sidebar-accent);
    color: var(--sidebar-primary);
    border-color: var(--sidebar-ring);
  ` : `
    color: var(--sidebar-accent-foreground);
    
    &:hover {
      background-color: var(--sidebar-accent);
      color: var(--sidebar-foreground);
    }
  `}
  
  /* Touch-friendly sizing on mobile */
  @media (max-width: 767px) {
    min-height: clamp(2.5rem, 8vw, 3rem);
  }
`;

const NavIcon = styled.div`
  width: clamp(1rem, 3vw, 1.25rem);
  height: clamp(1rem, 3vw, 1.25rem);
  color: ${props => props.$isActive ? 'var(--sidebar-primary)' : 'var(--sidebar-accent-foreground)'};
  
  ${NavItem}:hover & {
    color: ${props => props.$isActive ? 'var(--sidebar-primary)' : 'var(--sidebar-foreground)'};
  }
`;

const NavLabel = styled.span`
  font-weight: 500;
  min-width: 0;
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: clamp(0.75rem, 3vw, 1rem);
  right: clamp(0.75rem, 3vw, 1rem);
  background-color: transparent;
  color: var(--sidebar-foreground);
  border: none;
  padding: 0.25rem;
  width: clamp(2rem, 6vw, 2.5rem);
  height: clamp(2rem, 6vw, 2.5rem);
  
  @media (min-width: 768px) {
    display: none;
  }
  
  &:hover {
    background-color: var(--sidebar-accent);
  }
`;

const FooterSection = styled.div`
  padding: clamp(0.75rem, 3vw, 1rem);
  border-top: 1px solid var(--sidebar-border);
  background-color: var(--sidebar);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

const FooterText = styled.p`
  font-size: clamp(0.625rem, 2vw, 0.75rem);
  color: var(--sidebar-accent-foreground);
  text-align: center;
  margin: 0;
  opacity: 0.7;
  flex: 1;
`;

export function ModernSidebar({ currentPage = "jobs" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "Dashboard", key: "dashboard" },
    { icon: FileText, label: "Jobs", key: "jobs" },
    { icon: Package, label: "Consolidations", key: "consolidations" },
    { icon: Ship, label: "Tracking", key: "tracking" },
    { icon: BarChart3, label: "Analytics", key: "analytics" },
    { icon: Settings, label: "Settings", key: "settings" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (key) => {
    // Close mobile menu when nav item is clicked
    if (window.innerWidth < 768) {
      closeMobileMenu();
    }
    // Here you could add navigation logic
    console.log(`Navigating to: ${key}`);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <MobileMenuButton onClick={toggleMobileMenu}>
        <Menu style={{width: '1.25rem', height: '1.25rem'}} />
      </MobileMenuButton>

      {/* Mobile Overlay */}
      <SidebarOverlay $isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />

      {/* Sidebar */}
      <SidebarContainer $isOpen={isMobileMenuOpen}>
        {/* Close Button (Mobile Only) */}
        <CloseButton onClick={closeMobileMenu}>
          <X style={{width: '1.25rem', height: '1.25rem'}} />
        </CloseButton>

        {/* Logo Section */}
        <LogoSection>
          <LogoContainer>
            <LogoIcon>
              <LogoPackageIcon />
            </LogoIcon>
            <LogoText>
              <LogoTitle>FreightForward</LogoTitle>
              <LogoSubtitle>Automation Suite</LogoSubtitle>
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
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.key);
                }}
              >
                <NavIcon $isActive={item.key === currentPage}>
                  <item.icon />
                </NavIcon>
                <NavLabel>{item.label}</NavLabel>
              </NavItem>
            ))}
          </NavList>
        </Navigation>

        {/* Footer */}
        <FooterSection>
          <FooterActions>
            <FooterText>FreightForward v2.0</FooterText>
            <ThemeToggle />
          </FooterActions>
        </FooterSection>
      </SidebarContainer>
    </>
  );
}
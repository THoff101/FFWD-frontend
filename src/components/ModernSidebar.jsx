import styled from "styled-components";
import { Package, FileText, Settings, Home, X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../context/ThemeToggle";
import { useState, useEffect, useRef } from "react";

const SidebarContainer = styled.aside`
  width: 240px;
  background: var(--sidebar);
  color: var(--sidebar-foreground);
  padding: 1rem;
  border-right: 1px solid var(--sidebar-border);
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: static;
  z-index: 50;
  transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease;
  overflow-y: auto;

  @media (min-width: 768px) {
    position: sticky;
    top: 0;
    height: 100vh;
    left: 0;
    transform: none;
    transition: none;
    z-index: 50;
  }
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
  margin-top: 2rem;
  flex-grow: 1;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled(Link)`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  color: ${({ $isActive }) => ($isActive ? "var(--primary)" : "inherit")};
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "500")};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: var(--primary);
    background-color: var(--background);
  }
`;

const NavIcon = styled.div`
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  color: inherit;
`;

const NavLabel = styled.span``;

const MenuButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 100;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ModernSidebar = ({ currentPage = "jobs"}) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navItems = [
    { label: "Dashboard", icon: Home, key: "dashboard" },
    { label: "Jobs", icon: FileText, key: "jobs" },
    { label: "Settings", icon: Settings, key: "/" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current && 
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label="Menu Toggle"]')
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <MenuButton aria-label="Menu Toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </MenuButton>
    

    <SidebarContainer ref={sidebarRef} $isOpen={isOpen}>
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
      <Navigation>
        <NavList>
          {navItems.map(({ label, icon: Icon, key }) => (
            <NavItem to={`/${key}`} key={key} $isActive={currentPage === key}>
              <NavIcon>
                <Icon size={18} />
              </NavIcon>
              <NavLabel>{label}</NavLabel>
            </NavItem>
          ))}
        </NavList>
      </Navigation>
      <ThemeToggle/>
    </SidebarContainer>
    
    </>
  );
};
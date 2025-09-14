import "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 220px;
  background: var(--sidebar);
  color: var(--sidebar-foreground);
  padding: 1rem;
  border-right: 1px solid var(--sidebar-border);
`;

const NavItem = styled(Link)`
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: var(--radius);
  text-decoration: none;
  color: inherit;
  font-weight: 500;

  background: ${({ active }) => (active ? "var(--sidebar-accent)" : "transparent")};
  &:hover {
    background: var(--sidebar-accent);
    color: var(--sidebar-accent-foreground);
  }
`;

const SidebarNav = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavItem to="/dashboard" active={location.pathname === "/dashboard"}>
        Dashboard
      </NavItem>
      <NavItem to="/jobs" active={location.pathname.startsWith("/jobs")}>
        Jobs
      </NavItem>
      <NavItem to="/consolidation/new" active={location.pathname.startsWith("/consolidation")}>
        Consolidations
      </NavItem>
    </Nav>
  );
};

export default SidebarNav;
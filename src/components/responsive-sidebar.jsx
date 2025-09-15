import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  Package, 
  BarChart3, 
  FileText, 
  Settings, 
  Home, 
  Ship, 
  Menu, 
  X,
  Plus,
  Briefcase
} from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

export function ResponsiveSidebar({ 
  isMobileOpen, 
  onMobileToggle 
}) {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close mobile sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && isMobileOpen && !event.target.closest('[data-sidebar]')) {
        onMobileToggle(false);
      }
    };

    if (isMobileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile, isMobileOpen, onMobileToggle]);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isMobile && isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, isMobileOpen]);

  const navItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: Briefcase, label: "Jobs", path: "/jobs" },
    { icon: Package, label: "Consolidations", path: "/jobs" }, // Same as jobs for now
    { icon: Ship, label: "Tracking", path: "/tracking" },
    { icon: BarChart3, label: "Analytics", path: "/analytics" },
    { icon: FileText, label: "Documents", path: "/documents" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  // Determine current page from URL
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return '/';
    if (path.startsWith('/jobs')) return '/jobs';
    if (path.startsWith('/create')) return '/jobs'; // Creation is part of jobs flow
    if (path.startsWith('/consolidation')) return '/jobs'; // Consolidation details are part of jobs flow
    return path;
  };

  const currentPage = getCurrentPage();

  const handleNavClick = (path) => {
    navigate(path);
    if (isMobile) {
      onMobileToggle(false);
    }
  };

  const sidebarStyles = {
    // Desktop: Static sidebar always visible
    desktop: {
      position: 'sticky',
      top: 0,
      left: 0,
      height: '100vh',
      width: '16rem',
      backgroundColor: 'var(--sidebar)',
      borderRight: '1px solid var(--sidebar-border)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 10,
      flexShrink: 0
    },
    // Mobile: Hidden by default, overlay when open
    mobile: {
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      width: '16rem',
      backgroundColor: 'var(--sidebar)',
      borderRight: '1px solid var(--sidebar-border)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 50,
      transform: isMobileOpen ? 'translateX(0)' : 'translateX(-100%)',
      transition: 'transform 0.3s ease-in-out',
      boxShadow: isMobileOpen ? '0 10px 25px rgba(0, 0, 0, 0.15)' : 'none'
    }
  };

  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 40,
    display: isMobile && isMobileOpen ? 'block' : 'none'
  };

  const mobileMenuButtonStyles = {
    position: 'fixed',
    top: '1rem',
    left: '1rem',
    zIndex: 60,
    backgroundColor: 'var(--primary)',
    color: 'var(--primary-foreground)',
    border: 'none',
    borderRadius: '0.5rem',
    width: '2.5rem',
    height: '2.5rem',
    display: isMobile ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.2s ease'
  };

  const logoSectionStyles = {
    padding: '1.5rem',
    borderBottom: '1px solid var(--sidebar-border)',
    backgroundColor: 'var(--sidebar)'
  };

  const logoContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  };

  const logoIconStyles = {
    width: '2rem',
    height: '2rem',
    backgroundColor: 'var(--sidebar-primary)',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const navigationStyles = {
    flex: 1,
    padding: '1rem',
    backgroundColor: 'var(--sidebar)',
    overflowY: 'auto'
  };

  const navListStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  };

  const getNavItemStyles = (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    transition: 'all 0.2s',
    cursor: 'pointer',
    border: '1px solid transparent',
    fontSize: '1rem',
    fontWeight: '500',
    minHeight: '2.5rem',
    backgroundColor: isActive ? 'var(--sidebar-accent)' : 'transparent',
    color: isActive ? 'var(--sidebar-primary)' : 'var(--sidebar-accent-foreground)',
    borderColor: isActive ? 'var(--sidebar-ring)' : 'transparent'
  });

  const navItemHoverStyles = {
    backgroundColor: 'var(--sidebar-accent)',
    color: 'var(--sidebar-foreground)'
  };

  const footerStyles = {
    padding: '1rem',
    borderTop: '1px solid var(--sidebar-border)',
    backgroundColor: 'var(--sidebar)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  };

  const footerActionsStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem'
  };

  const footerTextStyles = {
    fontSize: '0.75rem',
    color: 'var(--sidebar-accent-foreground)',
    textAlign: 'center',
    margin: 0,
    opacity: 0.7,
    flex: 1
  };

  const closeButtonStyles = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: 'transparent',
    color: 'var(--sidebar-foreground)',
    border: 'none',
    padding: '0.25rem',
    width: '2rem',
    height: '2rem',
    borderRadius: '0.25rem',
    display: isMobile ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        style={mobileMenuButtonStyles}
        onClick={() => onMobileToggle(!isMobileOpen)}
        onMouseEnter={(e) => {
          e.target.style.opacity = '0.9';
        }}
        onMouseLeave={(e) => {
          e.target.style.opacity = '1';
        }}
      >
        <Menu style={{ width: '1.25rem', height: '1.25rem' }} />
      </button>

      {/* Mobile Overlay */}
      <div
        style={overlayStyles}
        onClick={() => onMobileToggle(false)}
      />

      {/* Sidebar */}
      <aside
        data-sidebar
        style={isMobile ? sidebarStyles.mobile : sidebarStyles.desktop}
      >
        {/* Close Button (Mobile Only) */}
        <button
          style={closeButtonStyles}
          onClick={() => onMobileToggle(false)}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--sidebar-accent)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          <X style={{ width: '1.25rem', height: '1.25rem' }} />
        </button>

        {/* Logo Section */}
        <div style={logoSectionStyles}>
          <div style={logoContainerStyles}>
            <div style={logoIconStyles}>
              <Package 
                style={{ 
                  width: '1.25rem', 
                  height: '1.25rem', 
                  color: 'var(--sidebar-primary-foreground)' 
                }} 
              />
            </div>
            <div style={{ minWidth: 0 }}>
              <h2 style={{ 
                fontSize: '1.125rem',
                color: 'var(--sidebar-foreground)',
                margin: 0,
                fontWeight: '600'
              }}>
                FreightForward
              </h2>
              <p style={{ 
                fontSize: '0.75rem',
                color: 'var(--sidebar-accent-foreground)',
                margin: 0,
                opacity: 0.8
              }}>
                Automation Suite
              </p>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav style={navigationStyles}>
          <div style={navListStyles}>
            {navItems.map((item, index) => {
              const isActive = item.path === currentPage;
              const IconComponent = item.icon;
              
              return (
                <div
                  key={index}
                  style={getNavItemStyles(isActive)}
                  onClick={() => handleNavClick(item.path)}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      Object.assign(e.target.style, navItemHoverStyles);
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = 'var(--sidebar-accent-foreground)';
                    }
                  }}
                >
                  <IconComponent 
                    style={{ 
                      width: '1.25rem', 
                      height: '1.25rem',
                      color: isActive ? 'var(--sidebar-primary)' : 'var(--sidebar-accent-foreground)'
                    }} 
                  />
                  <span style={{ minWidth: 0 }}>{item.label}</span>
                </div>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div style={footerStyles}>
          <div style={footerActionsStyles}>
            <p style={footerTextStyles}>FreightForward v2.0</p>
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
}
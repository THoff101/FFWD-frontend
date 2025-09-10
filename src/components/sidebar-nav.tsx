import { BarChart3, FileText, Settings, Home } from "lucide-react";

export function SidebarNav() {
  const navItems = [
    { icon: Home, label: "Dashboard", active: false },
    { icon: FileText, label: "Jobs", active: true },
    { icon: BarChart3, label: "Analytics", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border h-full p-4">
      <div className="mb-8">
        <h2 className="text-lg font-medium text-sidebar-foreground">FFWD</h2>
        <p className="text-sm text-sidebar-foreground/60">Freight Forwarding Platform</p>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`
              flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors
              ${item.active 
                ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
                : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
              }
            `}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      
      {/* Status indicator */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border-2 border-dashed border-blue-200">
        <div className="text-center">
          <div className="w-8 h-8 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
            📦
          </div>
          <p className="text-xs text-blue-600">Job Creation</p>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Settings,
  User,
  Search,
  FileText,
  Calendar
} from 'lucide-react';

interface NavItem {
  icon: React.ElementType;
  label: string;
  path: string;
}

const mainNavItems: NavItem[] = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: Users, label: 'Clients', path: '/clients/search' },
  { icon: Calendar, label: 'Programs', path: '/programs' },
  { icon: FileText, label: 'Reports', path: '/reports' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const clientNavItems: NavItem[] = [
  { icon: User, label: 'Register Client', path: '/clients/register' },
  { icon: Calendar, label: 'Enroll Client', path: '/clients/enroll' },
  { icon: Search, label: 'Search Clients', path: '/clients/search' },
];

const Sidebar: React.FC<{ isMobile?: boolean; closeMobileMenu?: () => void }> = ({ 
  isMobile = false, 
  closeMobileMenu 
}) => {
  const location = useLocation();
  
  const handleClick = () => {
    if (isMobile && closeMobileMenu) {
      closeMobileMenu();
    }
  };

  const renderNavItem = (item: NavItem) => {
    const isActive = location.pathname === item.path || 
                    (item.path !== '/dashboard' && location.pathname.startsWith(item.path));
    
    return (
      <li key={item.label}>
        <Link 
          to={item.path} 
          className={`menu-item ${isActive ? 'active' : ''}`}
          onClick={handleClick}
        >
          <item.icon className="h-5 w-5" />
          <span>{item.label}</span>
        </Link>
      </li>
    );
  };

  return (
    <div className={`bg-card h-full flex flex-col border-r ${isMobile ? 'w-full' : 'w-64'}`}>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
            <span className="text-white font-bold">H</span>
          </div>
          <h1 className="text-xl font-bold">Health System</h1>
        </div>
        
        <nav>
          <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-2">Main</p>
          <ul className="space-y-1 mb-6">
            {mainNavItems.map(renderNavItem)}
          </ul>
          
          <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mt-6 mb-2">Client Management</p>
          <ul className="space-y-1">
            {clientNavItems.map(renderNavItem)}
          </ul>
        </nav>
      </div>
      
      <div className="mt-auto p-4 border-t">
        <div className="bg-muted rounded-lg p-4">
          <p className="text-sm font-medium mb-1">Need help?</p>
          <p className="text-xs text-muted-foreground mb-3">Contact support for assistance</p>
          <button className="text-xs text-primary hover:underline">Contact Support</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

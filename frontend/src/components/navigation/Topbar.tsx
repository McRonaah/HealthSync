
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Bell, Menu, X } from 'lucide-react';

interface TopbarProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Topbar: React.FC<TopbarProps> = ({ toggleSidebar, isSidebarOpen }) => {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-card h-16 border-b flex items-center px-4">
      <button 
        onClick={toggleSidebar} 
        className="p-2 mr-4 rounded-md hover:bg-muted transition-colors lg:hidden"
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className="flex-1">
        <h2 className="text-xl font-semibold">Welcome, {user?.name}</h2>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="relative">
          <button className="p-2 rounded-md hover:bg-muted transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </button>
        </div>
        
        <div className="relative">
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 p-1 rounded-full hover:bg-muted transition-colors focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center overflow-hidden">
              {user?.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-primary-700 font-medium">{user?.name.charAt(0)}</span>
              )}
            </div>
          </button>
          
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-card border z-10 animate-fade-in">
              <div className="px-4 py-3 border-b">
                <p className="text-sm font-medium">{user?.name}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
              <a href="/settings" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                Settings
              </a>
              <button 
                onClick={logout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-muted transition-colors"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;

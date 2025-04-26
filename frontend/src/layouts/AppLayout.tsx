
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/navigation/Sidebar';
import Topbar from '../components/navigation/Topbar';
import { useIsMobile } from '../hooks/use-mobile';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  
  useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile Sidebar (as overlay) */}
        {isMobile && sidebarOpen && (
          <div className="fixed inset-0 z-40">
            <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
            <div className="absolute top-0 left-0 h-full z-50 animate-fade-in">
              <Sidebar isMobile={true} closeMobileMenu={() => setSidebarOpen(false)} />
            </div>
          </div>
        )}
        
        {/* Desktop Sidebar */}
        {(!isMobile && sidebarOpen) && (
          <div className="hidden lg:block">
            <Sidebar />
          </div>
        )}
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Topbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} isSidebarOpen={sidebarOpen} />
          
          <main className="flex-1 overflow-auto bg-background p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;

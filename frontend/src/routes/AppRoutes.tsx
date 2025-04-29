
import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Layouts
import AppLayout from '../layouts/AppLayout';
import AuthLayout from '../layouts/AuthLayout';

// Auth Pages
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';

// App Pages
import Dashboard from '../pages/dashboard/Dashboard';
import RegisterClient from '../pages/clients/RegisterClient';
import EnrollClient from '../pages/clients/EnrollClient';
import SearchClients from '../pages/clients/SearchClients';
import ViewClient from '../pages/clients/ViewClient';
import Settings from '../pages/settings/Settings';
import NotFound from '../pages/NotFound';

import Programs from "../pages/Programs/Programs";

import ProgramDetail from '@/pages/Programs/ProgramDetail';
import AddProgram from '@/pages/Programs/AddProgram';

import Reports from '../pages/Reports/Reports';
const AppRoutes: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 w-8 rounded-md bg-primary"></div>
        </div>
      </div>
    );
  }
  
  return (
    <Routes>
      {/* Public Routes (Auth) */}
      <Route element={<AuthLayout><Outlet /></AuthLayout>}>
        <Route path="/auth/login" element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
        } />
        <Route path="/auth/signup" element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Signup />
        } />
      </Route>
      
      {/* Protected Routes (App) */}
      <Route element={
        isAuthenticated ? <AppLayout><Outlet /></AppLayout> : <Navigate to="/auth/login" replace />
      }>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clients/register" element={<RegisterClient />} />
        <Route path="/clients/enroll" element={<EnrollClient />} />
        <Route path="/clients/search" element={<SearchClients />} />
        <Route path="/clients/view/:id" element={<ViewClient />} />
        <Route path="/settings" element={<Settings />} />
        
        {/* Temporary placeholders for other routes */}
        <Route path="/programs" element={<Programs />} />
        <Route path="/reports" element={<Reports />} />

        <Route path="/programs/:id" element={<ProgramDetail />} />
        <Route path="/programs/add" element={<AddProgram />} />

        
        {/* Add more routes as needed */}

      </Route>
      
      {/* Redirect from root to dashboard or login */}
      <Route path="/" element={
        isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/auth/login" replace />
      } />
      
      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

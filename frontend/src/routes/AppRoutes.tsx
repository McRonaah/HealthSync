import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import RegisterClient from '../pages/RegisterClient';
import EnrollClient from '../pages/EnrollClient';
import SearchClients from '../pages/SearchClients';
import ViewClient from '../pages/ViewClient';
import NotFound from    '../pages/NotFound';
import React from 'react';
// AppRoutes.tsx
// This file defines the routes for the application using React Router.

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterClient />} />
      <Route path="/enroll" element={<EnrollClient />} />
      <Route path="/search" element={<SearchClients />} />
      <Route path="/view/:id" element={<ViewClient />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

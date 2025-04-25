import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import RegisterClient from '../pages/clients/RegisterClient';
import EnrollClient from '../pages/EnrollClient';
import SearchClients from '../pages/clients/SearchClients';
import ViewClient from 
import NotFound from '../pages/NotFound';

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

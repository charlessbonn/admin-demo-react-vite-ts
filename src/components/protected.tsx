import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../zustand/useAuth';

export const ProtectedRoute = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

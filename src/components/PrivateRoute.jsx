import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ redirectPath = '/login', children }) => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <p className="loading">
        <span>Checking credentials, wait a moment...</span>
      </p>
    );

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

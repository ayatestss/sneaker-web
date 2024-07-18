import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContextv2';

export const LogoutPage = () => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutPage = async () => {
    await handleLogout();
    navigate('/login');
  };

  useEffect(() => {
    handleLogoutPage();
  }, []);

  return null;
};

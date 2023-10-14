import { useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

export const LogoutPage = () => {
  const { handleLogOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogoutPage = async () => {
    await handleLogOut();
    navigate('/login');
  };

  useEffect(() => {
    handleLogoutPage();
  }, []);

  return null;
};

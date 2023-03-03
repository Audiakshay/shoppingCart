import React, { useContext, useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Header from '../Components/Headers/head';
import { AuthContext } from '../context/authContext';

function DashboardLayout() {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default DashboardLayout;

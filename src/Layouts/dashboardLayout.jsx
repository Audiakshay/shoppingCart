import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/headers';

function DashboardLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default DashboardLayout;

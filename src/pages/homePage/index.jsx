import React from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const { state } = useLocation();
  return <div>{state ? `welcome ${state.name}` : 'Login first'}</div>;
}

export default Home;

import React from 'react';
import Nav from './Nav';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Layout;

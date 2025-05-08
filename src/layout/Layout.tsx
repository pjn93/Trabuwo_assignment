import React, { type ReactNode } from 'react';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';



interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return ( 
    <div style={{ padding:0 }}>
      <Navbar />
      <Container  maxWidth={false} sx={{ marginTop: '20px', marginLeft:0,marginRight:0}}>
        {children}
      </Container>
    </div>
  );
};

export default Layout;

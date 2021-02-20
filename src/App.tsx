import { Box, Container } from '@chakra-ui/react';
import React from 'react';

const App: React.FC = () => {
  return (
    <Container maxW="xl">
      <Box padding="4" maxW="3xl">
        <h1>Welcome to React and Snowpack</h1>
      </Box>
    </Container>
  );
};

export default App;

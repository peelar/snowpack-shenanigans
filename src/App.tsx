import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import Form from './components/Form';

const App: React.FC = () => {
  return (
    <Container maxW="xl">
      <Box padding="4" maxW="3xl">
        <Form />
      </Box>
    </Container>
  );
};

export default App;

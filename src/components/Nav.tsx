import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Heading,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import React from 'react';

const Nav: React.FC = () => {
  const flexBg = useColorModeValue('orange.200', 'teal.500');
  const flexColor = useColorModeValue('black', 'white');
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={flexBg}
      color={flexColor}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          Snowpack is awesome
        </Heading>
      </Flex>
      <Button
        size="sm"
        colorScheme={colorMode === 'dark' ? 'teal' : 'orange'}
        onClick={toggleColorMode}
      >
        {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Button>
    </Flex>
  );
};

export default Nav;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Flex, Link } from '@chakra-ui/react';

export default function Navigation() {
  return (
    <nav>
      <Flex>
        <Box mx="4">
          <Link as={NavLink} to="/" color="teal.500">
            Home
          </Link>
        </Box>

        <Link as={NavLink} to="/contacts" color="teal.500">
          Contacts
        </Link>
      </Flex>
    </nav>
  );
}

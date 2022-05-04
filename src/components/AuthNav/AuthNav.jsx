import { NavLink } from 'react-router-dom';
import { Button, Flex, Box } from '@chakra-ui/react';

export default function AuthNav() {
  return (
    <div>
      <Flex>
        <Box mx="4">
          <NavLink to="register">
            <Button colorScheme="teal" variant="solid">
              Sign Up
            </Button>
          </NavLink>
        </Box>

        <NavLink to="login">
          <Button colorScheme="teal" variant="outline">
           
            Log In
          </Button>
        </NavLink>
      </Flex>
    </div>
  );
}

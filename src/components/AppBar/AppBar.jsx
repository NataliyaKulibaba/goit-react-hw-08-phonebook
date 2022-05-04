import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { Box, Flex, Container } from '@chakra-ui/react';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Box as="header" py={3} bg="gray.100">
      <Container maxW="container.lg">
        <Flex justifyContent="space-between" alignItems="center">
          <Navigation />

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
      </Container>
    </Box>
  );
}

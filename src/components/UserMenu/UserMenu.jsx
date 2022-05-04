import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { Button, Flex, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import Avatar from '../images/Avatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <Flex justifyContent="end" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={Avatar}
        alt="Avatar"
        mr="3"
      />
      <Text as="i" mr="10">
        Hello, {name}
      </Text>

      <Button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        colorScheme="teal"
        variant="solid"
      >
        Log Out
      </Button>
    </Flex>
  );
}

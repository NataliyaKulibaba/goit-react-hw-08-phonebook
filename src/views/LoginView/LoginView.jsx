import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from '../../redux/auth/auth-operations';
import {
  Button,
  FormControl,
  Stack,
  Input,
  Flex,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn({ password, email }));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack mx="auto" my="8" w="400px">
        <FormControl>
          <Flex flexDirection="column">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<EmailIcon color="gray.300" />}
              />
              <Input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                mb="3"
                required
              />
            </InputGroup>

            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              mb="3"
              required
            />

            <Button type="submit" colorScheme="teal" variant="solid">
              LogIn
            </Button>
          </Flex>
        </FormControl>
      </Stack>
    </form>
  );
}

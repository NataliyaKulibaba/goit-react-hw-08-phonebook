import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  addContact,
} from '../../redux/contacts/contacts-operations';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Flex,
  Stack,
} from '@chakra-ui/react';
import { PhoneIcon, EditIcon } from '@chakra-ui/icons';

function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const newContactName = e.target.elements.name.value;
    const newContactNumber = e.target.elements.number.value;

    const newContact = {
      name: newContactName,
      number: newContactNumber,
    };

    const contact = contacts.map(item => item.name);
    contact.includes(newContactName)
      ? Notify.info(`${name} is already in contact`)
      : dispatch(addContact(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <Flex justifyContent="center">
      <form onSubmit={handleSubmit}>
        <Stack spacing={3} w="400px" mt='10'>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<EditIcon color="gray.300" />}
            />
            <Input
              id="name"
              placeholder="Name"
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.300" />}
            />
            <Input
              placeholder="Number"
              type="tel"
              name="number"
              value={number}
              onChange={handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
          </InputGroup>

          <Button type="submit" colorScheme="teal" variant="solid" py="2" m="3">
            Add contact
          </Button>
        </Stack>
      </form>
    </Flex>
  );
}

export default Form;

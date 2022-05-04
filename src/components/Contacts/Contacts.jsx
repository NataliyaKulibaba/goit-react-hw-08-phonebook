import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { UnorderedList, Flex, Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

function Contacts() {
  const dispatch = useDispatch();
  const contactList = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <UnorderedList listStyleType="none">
      {getVisibleContacts().map(({ name, number, id }) => (
        <li key={id}>
          <Flex justifyContent="space-between" w="400px" m="auto">
            {name}
            <span>{number}</span>

            <Button
              type="button"
              colorScheme="teal"
              variant="outline"
              p="1"
              m="1"
              size="35px"
              onClick={() => dispatch(deleteContact(id))}
            >
              <DeleteIcon />
            </Button>
          </Flex>
        </li>
      ))}
    </UnorderedList>
  );
}



export default Contacts;

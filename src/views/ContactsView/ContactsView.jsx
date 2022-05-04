import React from 'react';
import Form from '../../components/Form/Form';
import { Text, Center } from '@chakra-ui/react';
import Contacts from '../../components/Contacts/Contacts';
import Filter from '../../components/Contacts/Filter/Filter';
import { contactsSelectors } from 'redux/contacts';
import { useSelector } from 'react-redux';

export default function ContactsView() {
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  return (
    <>
      <Form />

      <Filter />

      <Contacts />
      {isLoadingContacts && (
        <Center>
          <Text color="gray.500" my="auto">
            Loading...
          </Text>
        </Center>
      )}
    </>
  );
}

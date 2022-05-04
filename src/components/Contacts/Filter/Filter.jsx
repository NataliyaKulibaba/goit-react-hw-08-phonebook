import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../../redux/contacts';
import { SearchIcon } from '@chakra-ui/icons';
import { InputGroup, InputLeftElement, Input, Flex } from '@chakra-ui/react';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  return (
    <Flex justifyContent="center">
      <InputGroup m="3" width="400px" mt='18'>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />

        <Input
          maxW="container.sm"
          placeholder="Find contacts by name"
          type="text"
          value={filter}
          onChange={e => dispatch(changeFilter(e.currentTarget.value))}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </InputGroup>
    </Flex>
  );
}

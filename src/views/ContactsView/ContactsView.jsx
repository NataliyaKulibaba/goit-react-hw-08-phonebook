import React from 'react';
import Form from '../../components/Form/Form';
import Section from '../../components/Section/Section';
import Contacts from '../../components/Contacts/Contacts';
import Filter from '../../components/Contacts/Filter/Filter';
import { useSelector } from 'react-redux';

export default function ContactsView(){
    const { status, error } = useSelector(state => state.contacts);
    return(
        <>
        <Section title="Phonebook">
          <Form />
        </Section>
  
        <Section title="Contacts">
          <Filter />
  
          <Contacts />
          {status === 'loading' && <h2>Loading...</h2>}
          {error && <h2>{error}</h2>}
        </Section>
      </>
    )
}
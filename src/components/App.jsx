import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';

import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { Container } from './App.styled';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('list-contacts'));
    if (data) {
      setContacts([...data]);
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem('list-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const isNameHas = name => {
    return contacts.some(contact => contact.name === name);
  };

  const onSubmit = data => {
    data.id = nanoid();
    setContacts(prev => {
      return [...prev, { ...data }];
    });
  };

  const onDelete = id => {
    const data = contacts.filter(contact => contact.id !== id);
    setContacts([...data]);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Container>
      <Section title="Movies finder">
        <ContactForm onSubmit={onSubmit} isNameHas={isNameHas} />
      </Section>

      <Section title="Movies">
        {contacts.length !== 0 && (
          <Filter filter={filter} onChange={setFilter} />
        )}
        <ContactList contacts={filterContacts()} onDelete={onDelete} />
      </Section>
    </Container>
  );
};

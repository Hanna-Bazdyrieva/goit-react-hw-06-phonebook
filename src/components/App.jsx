import { useState, useMemo } from 'react';
import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { useContacts } from 'hooks/useContacts';

const App = () => {

  const [filter, setFilter] = useState('');
  const {contacts, addContact, deleteContact} = useContacts()

  const changeFilter = evt => {
    const { value } = evt.target;
    setFilter(value.toLowerCase());
  };

  const filteredContacts = useMemo( () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }, [contacts, filter]);

  return (
    <Section>
      <Section title="Phonebook">
        <ContactForm formSubmitHandler={addContact} />
      </Section>
      <Section title="Contacts">
        {contacts.length !== 0 && (
          <>
            <Filter filter={filter} changeFilter={changeFilter} />
            <ContactList
              contacts={filteredContacts}
              deleteContact={deleteContact}
            />
          </>
        )}
      </Section>
    </Section>
  );
};

export default App;

   //* option to re-write existent contacts
    // this.setState(prev => ({
    //   contacts: [
    //     ...prev.contacts.filter(
    //       contact =>
    //         contact.name !== newContact.name &&
    //         contact.number !== newContact.number
    //     ),
    //     newContact,
    //   ],
    // }));
    // console.log('App -> state:', this.state);
  // eslint-disable-next-line react-hooks/exhaustive-deps

import { useMemo } from 'react';
import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { useSelector } from 'react-redux';
import { getFilter, getContactsItems } from '../redux/contactSlice';
import NoContacts from '../components/NoContacts';

const App = () => {
  const contacts = useSelector(getContactsItems);
  const filter = useSelector(getFilter);

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }, [contacts, filter]);

  return (
    <Section>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length !== 0 && (
          <>
            <Filter />
            <ContactList contacts={filteredContacts} />
          </>
        )}
        {contacts.length === 0 && <NoContacts />}
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

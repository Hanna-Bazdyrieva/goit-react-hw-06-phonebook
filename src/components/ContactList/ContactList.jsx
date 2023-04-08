import { Box } from 'components/Box/Box';
import ContactListItem from 'components/ContactListItem';
import { memo } from 'react';

const ContactList = ({contacts}) => {
  
  return (
    <Box as="ul" mx="auto" my={2} px={6} py={4} bg="list" borderRadius="20px">
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
        />
      ))}
    </Box>
  );
};

export default memo(ContactList);

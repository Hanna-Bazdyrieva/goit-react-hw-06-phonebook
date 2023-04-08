import { Box } from 'components/Box/Box';
import { Title } from './NoContacts.styled';

const NoContacts = () => {
  return (
    <Box
      as="div"
      mx="auto"
      my={2}
      px={6}
      py={4}
      bg="warning"
      borderRadius="10px"
    >
      <Title>You have no contacts so far...</Title>
    </Box>
  );
};

export default NoContacts;

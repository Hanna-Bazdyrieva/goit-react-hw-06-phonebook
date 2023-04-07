import { Box } from 'components/Box/Box';
import { Input, Title } from './Filter.styled';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contactSlice';


const Filter = () => {
const dispatch = useDispatch()
const filter = useSelector(state => state.contacts.filter)
// console.log(filter)

  return (
    <Box as="ul" mx="auto" my={2} px={6} py={4} bg="list" borderRadius="10px">
      <Title>Find contacts by name</Title>
      <Input
        name="text"
        type="text"
        value={filter}
        onChange={evt=>dispatch(changeFilter(evt.target.value))}
        placeholder="Enter something..."
      />
    </Box>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   // changeFilter: PropTypes.func.isRequired,
// };
export default Filter;

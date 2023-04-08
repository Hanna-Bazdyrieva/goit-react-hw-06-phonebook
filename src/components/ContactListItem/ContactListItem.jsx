import { Item, ItemData, DeleteBtn } from './ContactListItem.styled';
import { BsPersonCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux'
import { remove as removeContact } from 'redux/contactSlice';

const ContactListItem = ({ id, name, number}) => {

const dispatch = useDispatch()

  return (
    <Item>
      <BsPersonCircle />
      <ItemData>{name}</ItemData>
      <ItemData>{number}</ItemData>
      <DeleteBtn onClick={e => dispatch(removeContact(id))}>Delete</DeleteBtn>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;

import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/contacts-slice';
import { Input, LabelDescr } from './Filter.styled';

const Filter = () => {
   const dispatch = useDispatch()
  const hendleFilter = (e) => {
    const search = e.currentTarget
    console.log(search.value)
    dispatch(filterContact(search.value))
  }

  return (
    <LabelDescr htmlFor="filter">
      Find contacts by name
      <Input name="filter" type="text" onChange={hendleFilter}  debounceTimeout={500}/>
    </LabelDescr>
  );
};

export default Filter;
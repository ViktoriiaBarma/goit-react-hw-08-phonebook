import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/filter-slice';
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
      <Input name="filter" type="text" onChange={hendleFilter} />
    </LabelDescr>
  );
};

export default Filter;
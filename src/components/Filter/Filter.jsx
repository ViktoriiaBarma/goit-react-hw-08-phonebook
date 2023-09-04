// import { useDispatch } from 'react-redux';
// import { filterContact } from 'redux/contacts/filter-slice';
// import { Input, LabelDescr } from './Filter.styled';
// import { CloseBtn } from 'components/Modal/Modal.styled';
// import { RxCross2 } from 'react-icons/rx';


// const Filter = () => {
//   const dispatch = useDispatch();

//   const handleFilter = e => {
//     if (e.currentTarget.value) {
//       e.currentTarget.parentNode.children[2].classList.remove('hidden');
//     } else {
//       e.currentTarget.parentNode.children[2].classList.add('hidden');
//     }
//     dispatch(filterContact(e.currentTarget.value));
//   };

//  const clearFilter = e => {
//     e.currentTarget.parentNode.children[1].value = '';
//     dispatch(filterContact(e.currentTarget.parentNode.children[1].value));
//     e.currentTarget.classList.add('hidden');
//   };
  
//   return (
//     <LabelDescr htmlFor="filter">
//       Find contacts by name
//       <Input  id="name"
//               name="filter"
//               type="text"
//               placeholder="Search contact"
//         onChange={handleFilter} />
//        <CloseBtn onClick={clearFilter}
//             >
//               <RxCross2 />
//             </CloseBtn>
//     </LabelDescr>
//   );
// };

// export default Filter;




import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/filter-slice';
import { Input, LabelDescr } from './Filter.styled';

const Filter = () => {
   const dispatch = useDispatch()
  const hendleFilter = (e) => {
    dispatch(filterContact(e.currentTarget.value))
  }

  return (
    <LabelDescr htmlFor="filter">
      Find contacts by name
      <Input name="filter" type="text" onChange={hendleFilter} />
    </LabelDescr>
  );
};

export default Filter;
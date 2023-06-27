import { FilterWrapper, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'store/contacts/selectors';
import { setFilter } from 'store/contacts/filterSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <FilterWrapper>
      <Input
        type="text"
        name="filter"
        placeholder="Find a contact by name..."
        value={filter}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </FilterWrapper>
  );
};

export default Filter;

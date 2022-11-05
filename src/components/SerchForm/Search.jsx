import {Form, Input, SearchBtn} from './Search.styled';

export const SearchForm = ({ onSearch }) => {
  const handelSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const searchValue = form.elements.searchMovie.value;

    if (searchValue.trim() === ``) {
      return;
    }

    onSearch(searchValue);
    form.reset();
  };

  return (
    <Form action="submit" onSubmit={handelSubmit}>
      <Input type="text" name="searchMovie" />
      <SearchBtn>Search</SearchBtn>
    </Form>
  );
};

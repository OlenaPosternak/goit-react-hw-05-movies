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
    <form action="submit" onSubmit={handelSubmit}>
      <input type="text" name="searchMovie" />
      <button>Search</button>
    </form>
  );
};

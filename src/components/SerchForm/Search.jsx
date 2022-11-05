export const SearchForm = ({ onSearch, value }) => {
  const handelSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const searchValue = form.elements.searchMovie.value;
    console.log(searchValue);

    if (searchValue.trim() === ``) {
      return;
    }

    onSearch(searchValue);
    form.reset();
  };

  return (
    <form action="submit" onSubmit={handelSubmit}>
      <input
        type="text"
        name="searchMovie"
      />
      <button>Search</button>
    </form>
  );
};

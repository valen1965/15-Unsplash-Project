import { useGlobalContext } from './Context';
import Gallery from './Gallery';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    let searchValue = e.target.elements.search.value;
    if (!searchValue) return alert('Please enter value');
    setSearchTerm(searchValue);
    e.target.elements.search.value = '';
  };
  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input search-input'
          name='search'
          placeholder='cat'
        />
        <button type='submit' className='btn'>
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;

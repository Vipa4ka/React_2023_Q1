import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hook';
import styles from './SearchBar.module.css';
import { searchQuery } from '../../redux/slice/searchSlice';

function SearchBar() {
  const search = useAppSelector((state) => state.search.search);
  const dispatch = useAppDispatch();

  const [error, setError] = useState(false);
  const [searchLocal, setSearchLocal] = useState(search);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError(false);

    if (searchLocal.trim() === '') {
      setError(true);
      return;
    }

    dispatch(searchQuery(searchLocal));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentSearch = e.currentTarget.value;

    setSearchLocal(currentSearch);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          value={searchLocal}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder={'Search movies...'}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      {error && <div className={styles.error}>Enter something ...</div>}
    </>
  );
}

export default SearchBar;

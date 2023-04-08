import { useState, useEffect } from 'react';
import styles from './SearchBar.module.css';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('message') ?? '');
  const [error, setError] = useState(false);

  useEffect(() => {
    localStorage.setItem('message', searchQuery);
  }, [searchQuery]);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setError(false);

    if (searchQuery.trim() === '') {
      setError(true);
      return;
    }

    setSearchQuery('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentSearch = event.currentTarget.value.toLowerCase();

    setSearchQuery(currentSearch);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={searchQuery}
          onChange={handleChange}
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

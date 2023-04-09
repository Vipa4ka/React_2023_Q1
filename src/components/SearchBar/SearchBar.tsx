import { useState, useEffect, useRef } from 'react';
import styles from './SearchBar.module.css';
import { PropsSearch } from '../../types/index';

function SearchBar({ setSearch }: PropsSearch) {
  const [searchLocal, setSearchLocal] = useState(localStorage.getItem('message') ?? '');
  const [error, setError] = useState(false);
  const query = useRef<string>('');

  useEffect(() => {
    query.current = searchLocal;
  }, [searchLocal]);

  useEffect(() => {
    return () => {
      localStorage.setItem('message', query.current);
      setSearch(query.current);
    };
  }, [setSearch]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError(false);

    if (searchLocal.trim() === '') {
      setError(true);
      return;
    }
    setSearch(searchLocal);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentSearch = e.currentTarget.value.toLowerCase();

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

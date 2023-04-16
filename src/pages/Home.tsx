import { useState, useEffect } from 'react';
import { useAppSelector } from '../redux/hook';
import { useGetPopularFilmsQuery, useGetMovieSearchQuery } from '../services/Api';

import HeadTitle from '../components/HeadTitle';
import SearchBar from '../components/SearchBar';
import Movies from '../components/Movies';
import Modal from '../components/Modal';
import load from '../assets/loading.gif';
import { Films } from '../types/index';
import styles from '../components/Movies/movies.module.css';

function HomePage() {
  const [idMovie, setIdMovie] = useState(0);
  const [filmsTitle, setFilmsTitle] = useState<Films[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const search = useAppSelector((state) => state.search.search);

  const GetPopularFilms = useGetPopularFilmsQuery('');
  const GetMovieSearch = useGetMovieSearchQuery(search);

  const PopularFilms = GetPopularFilms.data?.results;
  const MovieSearch = GetMovieSearch.data?.results;

  useEffect(() => {
    setLoading(true);
    if (!search) {
      setFilmsTitle(PopularFilms);
      setLoading(false);

      return;
    }

    setFilmsTitle(MovieSearch);
    setLoading(false);
  }, [MovieSearch, PopularFilms, search]);

  const onClose = () => {
    setIsOpen(false);
  };

  function openModal(id: number) {
    setIdMovie(id);
    setIsOpen(true);
  }
  return (
    <>
      <HeadTitle>MOVIES</HeadTitle>
      <SearchBar />
      {loading && <img className={styles.load} src={load} />}
      <Movies onClickFilm={openModal} filmsTitle={filmsTitle} />
      {isOpen && <Modal idCardMovies={idMovie} onClose={onClose} />}
    </>
  );
}

export default HomePage;

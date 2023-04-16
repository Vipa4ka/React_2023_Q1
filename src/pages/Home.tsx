import { useState, useEffect } from 'react';
import * as Api from '../services/Api';
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
  const [search, setSearch] = useState(localStorage.getItem('message') ?? '');
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   setLoading(true);
  //   if (!search) {
  //     Api.fetchPopularFilms().then((data) => {
  //       setFilmsTitle(data.results);
  //       setLoading(false);
  //     });

  //     return;
  //   }

  //   Api.fetchMovieSearch(search).then((data) => {
  //     setFilmsTitle(data.results);
  //     setLoading(false);
  //   });
  // }, [search]);

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
      <SearchBar setSearch={setSearch} />
      {loading && <img className={styles.load} src={load} />}
      <Movies onClickFilm={openModal} filmsTitle={filmsTitle} />
      {isOpen && <Modal idCardMovies={idMovie} onClose={onClose} />}
    </>
  );
}

export default HomePage;

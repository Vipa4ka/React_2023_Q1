import { useState, useEffect } from 'react';
import * as Api from '../services/Api';
import HeadTitle from '../components/HeadTitle';
import SearchBar from '../components/SearchBar';
import Movies from '../components/Movies';
import Modal from '../components/Modal';

function HomePage() {
  const [idMovie, setIdMovie] = useState(0);
  const [filmsTitle, setFilmsTitle] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState(localStorage.getItem('message') ?? '');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!search) {
      Api.fetchPopularFilms()
        .then((data) => {
          setFilmsTitle(data.results);
        })
        .catch((err) => {
          setError(err.message);
        });
      return;
    }

    Api.fetchMovieSearch(search)
      .then((data) => {
        setFilmsTitle(data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [search]);

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
      <Movies onClickFilm={openModal} filmsTitle={filmsTitle} />
      {isOpen && <Modal idCardMovies={idMovie} onClose={onClose} />}
    </>
  );
}

export default HomePage;

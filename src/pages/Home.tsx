import { useState } from 'react';

import HeadTitle from '../components/HeadTitle';
import SearchBar from '../components/SearchBar';
import Movies from '../components/Movies';
import Modal from '../components/Modal';

function HomePage() {
  const [idMovie, setIdMovie] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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
      <Movies onClickFilm={openModal} />
      {isOpen && <Modal idCardMovies={idMovie} onClose={onClose} />}
    </>
  );
}

export default HomePage;

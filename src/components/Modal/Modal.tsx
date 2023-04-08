import { useState, useEffect } from 'react';
import * as Api from '../../services/Api';
import styles from '../Movies/movies.module.css';
import styleModal from './Modal.module.css';
import avatar from '../../assets/avatar.png';
import { Film, MovieId } from '../../types/index';

export default function Modal({ idCardMovies, onClose }: MovieId) {
  const [modalFilm, setModalFilm] = useState<Film>();

  useEffect(() => {
    Api.fetchMovieById(idCardMovies).then((data) => setModalFilm(data));
  }, [idCardMovies]);

  const handleModalClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={styleModal.overlay} onClick={handleModalClose}>
      {modalFilm && (
        <div className={styleModal.modal}>
          <svg
            className={styleModal.modal__cross}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={onClose}
          >
            <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
          </svg>
          <div className={styles.film}>
            <img
              className={styles.filmDetails}
              src={
                modalFilm.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${modalFilm.poster_path}`
                  : avatar
              }
              alt={modalFilm.title}
            />
            <div>
              <h1>{modalFilm.title}</h1>
              <p>User Score:{modalFilm.vote_average}</p>
              <p>Overview:{modalFilm.overview}</p>
              <h3>Genres</h3>
              <ul className={styles.filmsGenres}>
                {modalFilm.genres.map((film) => (
                  <li key={film.id}>{film.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h4>Additional information</h4>
          </div>
        </div>
      )}
    </div>
  );
}

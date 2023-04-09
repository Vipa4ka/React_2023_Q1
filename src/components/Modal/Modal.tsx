import { useState, useEffect } from 'react';
import * as Api from '../../services/Api';
// import styles from '../Movies/movies.module.css';
import styleModal from './Modal.module.css';
import notImage from '../../assets/notImage.png';
import avatar from '../../assets/avatar.png';
import load from '../../assets/loading.gif';
import { Film, MovieId } from '../../types/index';
import styles from '../Movies/movies.module.css';

export default function Modal({ idCardMovies, onClose }: MovieId) {
  const [modalFilm, setModalFilm] = useState<Film>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    Api.fetchMovieById(idCardMovies).then((data) => {
      setModalFilm(data);
      setLoading(false);
    });
  }, [idCardMovies]);

  const handleModalClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={styleModal.overlay} onClick={handleModalClose}>
      {loading && <img className={styles.load} src={load} />}
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
          <div className={styleModal.film}>
            <img
              className={styleModal.img_total}
              src={
                modalFilm.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${modalFilm.poster_path}`
                  : avatar
              }
              alt={modalFilm.title}
            />
            <div className={styleModal.info_card}>
              <h1 className={styleModal.title}>{modalFilm.title}</h1>
              <h2 className={styleModal.title}>{modalFilm.tagline}</h2>
              <p>
                <span className={styleModal.span}>Overview:</span> {modalFilm.overview}
              </p>
              <p>
                <span className={styleModal.span}>Homepage:</span>
                {modalFilm.homepage ? (
                  <a className={styleModal.homepage} href={modalFilm.homepage}>
                    {modalFilm.homepage}
                  </a>
                ) : (
                  ' Site not listed'
                )}
              </p>
              <p>
                <span className={styleModal.span}> Genres:</span>

                {modalFilm.genres.map((film) => '|' + film.name + '|')}
              </p>
              <p>
                <span className={styleModal.span}> Original language:</span>
                {modalFilm.original_language}
              </p>
              <p>
                <span className={styleModal.span}> Spoken languages:</span>

                {modalFilm.spoken_languages.length > 0
                  ? modalFilm.spoken_languages.map((language) => '|' + language.english_name + '|')
                  : ' Not specified'}
              </p>
              <p>
                <span className={styleModal.span}> User Score:</span>
                {modalFilm.vote_average}
              </p>
              <p>
                <span className={styleModal.span}> Vote count:</span>
                {modalFilm.vote_count}
              </p>
              <p>
                <span className={styleModal.span}> Popularity:</span>
                {modalFilm.popularity}
              </p>
              <p>
                <span className={styleModal.span}> Budget:</span>
                {modalFilm.budget > 0 ? modalFilm.budget : ' Not specified'}
              </p>
              <p>
                <span className={styleModal.span}> Revenue:</span>
                {modalFilm.revenue > 0 ? modalFilm.revenue : ' Not specified'}
              </p>
              <p>
                <span className={styleModal.span}> Release date:</span>
                {modalFilm.release_date}
              </p>
              <p>
                <span className={styleModal.span}> Runtime:</span>
                {modalFilm.runtime}
              </p>
              <p>
                <span className={styleModal.span}> Status:</span>
                {modalFilm.status}
              </p>
            </div>
          </div>
          <div>
            <h4 className={styleModal.span}>Additional information</h4>
            <div className={styleModal.company}>
              <span className={styleModal.span}> Production companies:</span>

              {modalFilm.production_companies.length > 0
                ? modalFilm.production_companies.map((film) => (
                    <div className={styleModal.list} key={film.id}>
                      <img
                        className={styleModal.company_img}
                        src={
                          film.logo_path
                            ? `https://image.tmdb.org/t/p/w300/${film.logo_path}`
                            : notImage
                        }
                        alt={film.name}
                      />
                      <span>{film.name}</span>
                    </div>
                  ))
                : '  Not specified'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

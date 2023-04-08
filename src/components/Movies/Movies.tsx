import { useState, useEffect } from 'react';
import * as Api from '../../services/Api';
import styles from './movies.module.css';
import avatar from '../../assets/avatar.png';
import { Films, ClickFilm } from '../../types/index';

export default function Movies({ onClickFilm }: ClickFilm) {
  const [films, setFilms] = useState<Films[]>([]);

  useEffect(() => {
    Api.fetchPopularFilms().then((data) => setFilms(data.results));
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      {films && (
        <ul className={styles.homePage}>
          {films.map((film) => (
            <li onClick={() => onClickFilm(film.id)} className={styles.homePageFilms} key={film.id}>
              {film.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                  alt={film.title ?? film.name}
                />
              ) : (
                <img src={avatar} alt={film.title ?? film.name} />
              )}
              <p className={styles.title_film}>{film.title ?? film.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

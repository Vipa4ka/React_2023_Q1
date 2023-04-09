import styles from './movies.module.css';
import avatar from '../../assets/avatar.png';
import { ClickFilm } from '../../types/index';

export default function Movies({ onClickFilm, filmsTitle }: ClickFilm) {
  return (
    <div>
      {filmsTitle && (
        <ul className={styles.homePage}>
          {filmsTitle.map((film) => (
            <li onClick={() => onClickFilm(film.id)} className={styles.homePageFilms} key={film.id}>
              {film.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                  alt={film.title ?? film.name}
                />
              ) : (
                <img className={styles.avatar} src={avatar} alt={film.title ?? film.name} />
              )}
              <p className={styles.title_film}>{film.title ?? film.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

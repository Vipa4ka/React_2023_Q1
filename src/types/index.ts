export type Card = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export interface CardProps {
  cards: Card[];
}

export type State = {
  nameInput: string;
  surnameInput: string;
  dateInput: string;
  countrySelect: string;
  genderInput: string;
  checkboxConsentInput: string;
  avatarInput: string;
};

export interface IFormInput {
  avatar: File[];
  name: string;
  surname: string;
  birthdate: string;
  country: string;
  gender: string;
  consent: boolean;
  consentNews: boolean;
}

export type FormCards = {
  name: string;
  surname: string;
  birthdate: string;
  gender: string;
  country: string;
  avatar: string;
  consent: boolean;
  consentNews: boolean;
  id: number;
};

export interface FormProps {
  onSubmitForms?: (newCard: FormCards) => void;
  cards?: FormCards[];
}

export type Title = {
  children: string;
};

export type Film = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: number;
  budget: number;
  genres: [{ id: number; name: string }];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [{ id: number; logo_path: number; name: string; origin_country: string }];
  production_countries: [{ iso_3166_1: string; name: string }];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export interface MovieId {
  idCardMovies: number;
  onClose: () => void;
}

export type Films = {
  id: number;
  backUrl: string;
  poster_path: string;
  name: string;
  pathname: number;
  title: string;
};
export interface ClickFilm {
  onClickFilm: (id: number) => void;
  filmsTitle: Films[];
}

export interface PropsSearch {
  setSearch: (searchLocal: string) => void;
}

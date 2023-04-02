import CardsListItem from '../components/Cards';
import HeadTitle from '../components/HeadTitle';
import SearchBar from '../components/SearchBar';

import cards from '../card.json';

function HomePage() {
  return (
    <>
      <HeadTitle>VEGETABLES AND FRUITS</HeadTitle>
      <SearchBar />
      <CardsListItem cards={cards} />
    </>
  );
}

export default HomePage;

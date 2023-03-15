import { Component } from 'react';

import CardsListItem from '../components/Cards/Cards';
import listCards from '../card.json';

class HomePage extends Component {
  state = {
    currentQuery: '',
    cards: listCards,
  };

  componentDidMount() {
    const query = localStorage.getItem('query');
    const parseQuery = JSON.parse(query!);
    if (parseQuery) {
      this.setState({ currentQuery: parseQuery });
    }
  }

  componentWillUnmount() {
    const { currentQuery } = this.state;
    localStorage.setItem('query', JSON.stringify(currentQuery));
  }

  submitProps = (searchQuery: string) => {
    this.setState({ currentQuery: searchQuery });
  };

  render() {
    const { currentQuery, cards } = this.state;

    return (
      <>
        {/* <HeadTitle>VEGETABLES AND FRUITS</HeadTitle> */}

        {/* <SearchBar submitProps={this.submitProps} currentQuery={currentQuery} /> */}
        <CardsListItem cards={cards} />
      </>
    );
  }
}

export default HomePage;

// function Home() {
//   return (
//     <>
//       <h1>Hello word!</h1>;
//       <CardsListItem cards={listCards} />;
//     </>
//   );
// }

// export default Home;

import { Component } from 'react';
import styles from './SearchBar.module.css';

interface StateSeach {
  searchQuery: string;
}

interface PropSearchBar {
  currentQuery: string;
  submitProps: (searchQuery: string) => void;
}

class SearchBar extends Component<PropSearchBar, StateSeach> {
  state = {
    searchQuery: '',
  };

  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { searchQuery } = this.state;
    const { submitProps } = this.props;

    if (searchQuery.trim() === '') {
      alert('Enter something to search.');
      return;
    }

    submitProps(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentSearch = event.currentTarget.value.toLowerCase();
    this.setState({ searchQuery: currentSearch });
  };

  render() {
    const { searchQuery } = this.state;
    const { currentQuery } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={searchQuery}
          onChange={this.handleChange}
          autoComplete="off"
          autoFocus
          placeholder={currentQuery || 'Search'}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;

import React from 'react';
import Card from '../Card/Card.js';
import styles from '../Column/Column.scss';
import { withRouter } from 'react-router';

class SearchResults extends React.Component {

  state = {
    value: this.props.searchString,
  }

  handle() {
    this.props.changeSearchString(this.state.value);
  }

  render() {
    const { cards } = this.props;
    console.log(cards);

    return (
      <div className={styles.component}>
        {cards.map(({ id, ...cardsProps }) => (
          <Card key={id} {...cardsProps} />
        ))}
      </div>
    );
  }
}

export default SearchResults;
import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import styles from '../Column/Column.scss';
import {withRouter} from 'react-router';

class SearchResults extends React.Component{
  static propTypes = {
    cards: PropTypes,
  }

  render() {
    const{cards} = this.props;
   
    return (
      <div className={styles.component}>
        {cards.map(({key, ...cardsProps}) => (
          <Card key={key} {...cardsProps} />
        ))}
      </div>
    );
  }
}

export default withRouter(SearchResults);
import React from 'react';
import Icon from '../Icon/Icon.js';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';

class SearchResults extends React.Component{
  static propTypes = {

  }

  render() {
    const{cards} = this.props;
   
    return (
      <div>
        {cards.map(({key, ...cardsProps}) => (
          <Card key={key} {...cardsProps} />
        ))}
      </div>
    );
  }
}

export default SearchResults;
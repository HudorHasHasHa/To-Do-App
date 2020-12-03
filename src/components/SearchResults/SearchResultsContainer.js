import {connect} from 'react-redux';
import Search from './SearchResults';
import getCardsForSearchResults from '../../redux/cardsRedux';

const mapStateToProps = () => {
  return {
    cards: getCardsForSearchResults(state, id),
  };
}

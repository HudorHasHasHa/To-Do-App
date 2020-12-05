import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearchResults} from '../../redux/cardsRedux';

const mapStateToProps = (state) => ({
  cards: getCardsForSearchResults(state, state.id),
});

// const mapDispatchToProps = (dispatch) => ({
//   SearchString: SearchString => dispatch(SearchString),
// });

export default connect(mapStateToProps)(SearchResults);

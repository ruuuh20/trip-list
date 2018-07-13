import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import { connect } from 'react-redux';
import { updateSearch, storeSearch, retrieveSearches, clearHistory } from '../actions/search';
import { fetchVenues } from '../actions/attractions';
import { bindActionCreators } from 'redux';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount

  handleOnChange = (event) => {
    this.props.updateSearch(event.target.value);
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const search = this.props.search.keywords

    this.props.fetchVenues(search);
  }


  render() {
    console.log(this.props)

     let venues_list = "hi"
    if (this.props.venues) {

      venues_list = this.props.venues.map(venue => {
        return <div>{venue.name}</div>
      })
  }
    return (

      <div>
    <SearchBox
      handleOnSubmit={this.handleOnSubmit}
      handleOnChange={this.handleOnChange}
       inputValue={this.props.search.keywords}

      />
      {venues_list}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({ search: state.search,
    venues: state.venues
  });
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateSearch,
fetchVenues

  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)

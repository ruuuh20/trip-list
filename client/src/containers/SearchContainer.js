import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import { connect } from 'react-redux';
import { updateSearch, storeSearch, retrieveSearches, clearHistory } from '../actions/search';
import { bindActionCreators } from 'redux';

class SearchContainer extends Component {
  constructor() {
    super();
  }

  handleOnChange = (event) => {
    this.props.updateSearch(event.target.value);
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const search = this.props.search.keywords

    this.props.fetchVenues(search);
  }


  render() {
    return (


    <SearchBox
      handleOnSubmit={this.handleOnSubmit}
      handleOnChange={this.handleOnChange}
       inputValue={this.props.search.keywords}

      />
    )
  }
}

const mapStateToProps = (state) => {
  return { search: state.search };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateSearch,


  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)

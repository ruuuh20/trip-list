import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';

class SearchContainer extends Component {
  constructor() {
    super();
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

export default SearchContainer;

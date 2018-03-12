import React, { Component } from 'react';
import { connect } from 'react-redux';


class AttractionsShow extends Component {
  // debugger
  render() {
    const { attraction } = this.props;

    return (
      <div className="attractionshow">
        <h1>{attraction.name}</h1>
        <h4>{attraction.category}</h4>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const attraction = state.attractions.find(attraction => attraction.id === +ownProps.match.params.attractionId);

  if (attraction) {
    return { attraction }
  } else {
    return { attraction: {} }
  }
}

export default connect(mapStateToProps)(AttractionsShow)

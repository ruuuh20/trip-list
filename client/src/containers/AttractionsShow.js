import React, { Component } from 'react';
import { connect } from 'react-redux';


class AttractionsShow extends Component {
  // debugger
  render() {
    const { attraction } = this.props;

    return (
      <div>
        <div className="attractionside">
          <h1 id="attr-name">{attraction.name}</h1>
          <h4>{attraction.category}</h4>
          <p>city: {attraction.city}</p>
          <p>price: {attraction.price}</p>
          <p>website: {attraction.website}</p>
        </div>
        <div className="main">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <img className="attr-image" src={attraction.img_url} alt={attraction.name} />
        </div>
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

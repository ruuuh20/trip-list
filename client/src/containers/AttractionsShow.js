import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/sidebar'


class AttractionsShow extends Component {
  // debugger
  render() {
    const { attraction } = this.props;

    return (
      <div>
      <Sidebar attraction={attraction} />
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

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAttractions } from '../actions/attractions'
import { bindActionCreators } from 'redux';
import AttractionCard from '../components/AttractionCard'
import './attractions.css';
import AttractionsNew from './AttractionsNew';
import SearchContainer from './SearchContainer';
import { fetchVenues } from '../actions/attractions'


class Attractions extends Component {
  componentDidMount() {
    this.props.getAttractions()

  }

  handleInput = (event) => {
    console.log(event.target.value)

  }

  render() {
    const { attractions, trips } = this.props;
    let attrSummary = ""

    if (this.props.attractions.length >= 1) {
      // console.log(this.props.trips)
      attrSummary = (

      this.props.attractions.map(attraction =>
        <AttractionCard key={attraction.id} attraction={attraction} /> )
      )

    }
    else {
      attrSummary = "blank"
    }
    return(
      <div>
        <div className="attractionsContainer">
            <h1 className="title">ATTRACTIONS</h1>
        <AttractionsNew trips={this.props.trips} changed={this.handleInput}/>

          {attrSummary}
        </div>
      </div>
    )
    }
  }





function mapStateToProps(state) {
  return ({
    attractions: state.attractions,
    trips : state.trips,
    search: state.search
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAttractions, fetchVenues }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Attractions)

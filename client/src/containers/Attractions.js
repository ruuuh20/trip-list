import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAttractions } from '../actions/attractions'
import { bindActionCreators } from 'redux';
import AttractionCard from '../components/AttractionCard'
import './attractions.css'


class Attractions extends Component {
  componentDidMount() {
    this.props.getAttractions()

  }

  render() {
    const { attractions } = this.props
    return(
      <div>

        <div className="attractionsContainer">
        <h1>ATTRACTIONS</h1>
          {this.props.attractions.map(attraction =>
            <AttractionCard key={attraction.id} attraction={attraction} /> )}
        </div>
        

      </div>
    )
    }
  }





function mapStateToProps(state) {
  return ({
    attractions: state.attractions
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAttractions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Attractions)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTrip } from '../actions/trips';
import { bindActionCreators } from 'redux';

class TripsNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      destination: 'Or Add a City Here',

    };
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { addTrip, history } = this.props;

    addTrip(this.state);
    // debugger
    // this.props.history.push('/')
    // Cannot read property 'push' of  history.push   ????????????
    this.setState({
      destination: ''
    })
  }

  handleOnChange = event => {
    this.setState({
      destination: event.target.value
    });
  }

  render() {
    return (
      <div>

      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="destination"></label>
        <input
          type="text"
          value={this.state.destination}
          onChange={this.handleOnChange}
        />
        <input type="submit" value="Create Trip" />

      </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addTrip
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(TripsNew)

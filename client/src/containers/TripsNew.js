import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTrip } from '../actions/trips'

class TripsNew extends Component {
  constructor() {
    super();

    this.state = {
      destination: ''
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { addTrip, history } = this.props;

    addTrip(this.state);
    // debugger
    this.props.history.push('/trips')
  }

  handleOnChange = event => {
    this.setState({
      destination: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Add a new destination</h2>
      <form onSubmit={this.handleOnSubmit}>
        <input
          type="text"
          onChange={this.handleOnChange}
        />
        <input type="submit" />

      </form>
      </div>
    )
  }
}

export default connect(null, { addTrip })(TripsNew)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAttraction } from '../actions/attractions';
import { bindActionCreators } from 'redux';


class AttractionsNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      city: '',
      category: '',
      img_url: '',
      price: '',
      website: ''

    };
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { addAttraction, history } = this.props;

    addAttraction(this.state);

    this.setState({
      name: '',
      city: '',
      category: '',
      img_url: '',
      price: '',
      website: ''
    })
  }

  handleOnChange = event => {
      const { name, value } = event.target
      this.setState({
        [name]: value
      });
    }

  render() {
    return (
      <div>

      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          className="forminput"
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleOnChange}
        />


        <label htmlFor="city">City: </label>
        <input
          className="forminput"
          name="city"
          type="text"
          value={this.state.city}
          onChange={this.handleOnChange}
        />

        <select>
        {this.props.trips.map(t => (
          <option value={t.destination} onChange={this.handleOnChange}>{t.destination}</option>
        ))}
        </select>
          <br/>

        <label htmlFor="category">Category: </label>
        <input
          className="forminput"
          name="category"
          type="text"
          value={this.state.category}
          onChange={this.handleOnChange}
        />


        <label htmlFor="img_url">image_url: </label>
        <input
          className="forminput"
          name="img_url"
          type="text"
          value={this.state.img_url}
          onChange={this.handleOnChange}
        />
        <br/>

        <label htmlFor="price">Price: </label>
        <input
          className="forminput"
          name="price"
          type="text"
          value={this.state.price}
          onChange={this.handleOnChange}
        />


        <label htmlFor="website">Website: </label>
        <input
          className="forminput"
          name="website"
          type="text"
          value={this.state.website}
          onChange={this.handleOnChange}
        />
        <br/>

        <input id="attractionsubmit" type="submit" value="Create Attraction" />

      </form>
      </div>
    )
  }


}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addAttraction
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(AttractionsNew)

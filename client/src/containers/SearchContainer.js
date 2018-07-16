import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import { connect } from 'react-redux';
import { updateSearch, storeSearch, retrieveSearches, clearHistory } from '../actions/search';
import { fetchVenues } from '../actions/attractions';
import { bindActionCreators } from 'redux';
import './SearchContainer.css';
import fetchJsonp from 'fetch-jsonp';

// import 'jquery/src/jquery';
import $ from 'jquery';
// import * as $ from 'jquery';
// declare var $: $

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: "",
      countries: [],
      regions: [],
      cities: []
    }
  }

  componentDidMount = () => {
    let initialCountries = [];

   fetchJsonp('https://battuta.medunes.net/api/country/all/?&key=bd8c940f6ad6dfa181f7d32922758c74&callback=?')
   .then((response) => {
  console.log(response)
           return response.json();
       }).then(data => {
         // console.log(data.body + "Hellllllooooo")
         // console.log(JSON.stringify(data))
         var stringed = JSON.stringify(data)
         console.log(data.length)

       initialCountries = data.map((country) => ({
         value: country.name, code: country.code
       })

       );
       console.log(initialCountries);
       this.setState({
           countries: initialCountries,
       });
   });

  }

  handleOnChange = (event) => {
    this.props.updateSearch(event.target.value);
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const search = this.props.search.keywords

    this.props.fetchVenues(search);
  }

  handleOption = (e) => {
    let countryCode

//     You have to capture the value of the event target in a variable, and then use that in the updateValue callback.
//
// It seems like by the time the callback happens, the target of that specific event is "released"
      let countryName = e.target.value



    // from stackoverflow - to get the id/code for each country!
    for (let node of e.target.children) {
    if (node.value === e.target.value) {
      console.log(node.getAttribute('data-id'))
      countryCode = node.getAttribute('data-id')
      // return;
    }
  }
  // console.log(e.target.value + "nameeeee")

    let initialRegions = [];
  //
   fetchJsonp("https://battuta.medunes.net/api/region/"
	    +countryCode
	    +"/all/?key=bd8c940f6ad6dfa181f7d32922758c74&callback=?")
   .then((response) => {
  console.log(response)
           return response.json();
       }).then(data => {

         var stringed = JSON.stringify(data)
         console.log(data.length)

       initialRegions = data.map((region) => {
           return region.region
       });
       console.log(initialRegions);
       // e.persist();
       this.setState({
          selectedCountry: countryCode,

           regions: initialRegions,
       });
   });
  }

  handleRegion = (e) => {

    let regionCode = e.target.value
    let countryCode = this.state.selectedCountry

    let initialCities = [];
  //
   fetchJsonp(  "https://battuta.medunes.net/api/city/"
 	    +countryCode
 	    +"/search/?region="
 	    +regionCode
 	    +"&key=bd8c940f6ad6dfa181f7d32922758c74&callback=?")
   .then((response) => {
  console.log(response)
           return response.json();
       }).then(data => {

         var stringed = JSON.stringify(data)
         console.log(data.length)

       initialCities = data.map((city) => {
           return city.city
       });
       console.log(initialCities);
       // e.persist();
       this.setState({

           cities: initialCities
       });
   });

  }







  render() {

     let venues_list = "hi"
    if (this.props.venues) {

      venues_list = this.props.venues.map(venue => {
        return <div>{venue.name}</div>
      })
    }

  //countries 1
  let countries = this.state.countries;
  let optionItems = countries.map((country) =>

              <option
                    key={country.code}
                    data-id={country.code}
                  >{country.value}
              </option>
              );
 // regions 2
 let regions = ""
 let regionItems= ""
 if (this.state.regions.length >= 1) {
   regions = this.state.regions
 // let regions = this.state.regions ? this.state.regions : ""
 regionItems = regions.map((region) =>
      <option
          key={region.region}
          data-id={region.region}

       >{region}
     </option>
)
} else {
  regionItems = "no regions"
}


//cities 3
let cities = ""
let cityItems= ""
if (this.state.cities.length >= 1) {
  cities = this.state.cities
// let regions = this.state.regions ? this.state.regions : ""
cityItems = cities.map((city) =>
     <option
         key={city.city}
         data-id={city.city}

      >{city}
    </option>
)
} else {
 cityItems = "no city"
}


    return (

      <div>
    <SearchBox
      handleOnSubmit={this.handleOnSubmit}
      handleOnChange={this.handleOnChange}
       inputValue={this.props.search.keywords}

      />
      {venues_list}

      <div>
             <select onChange={(e) => this.handleOption(e)}>
                {optionItems}
             </select>
             <select onChange={this.handleRegion}>
                {regionItems}
             </select>
             <select onChange={this.handleCity}>
                {cityItems}
             </select>
         </div>

      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return ({ search: state.search,
    venues: state.venues
  });
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateSearch,
fetchVenues

  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)

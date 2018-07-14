import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import { connect } from 'react-redux';
import { updateSearch, storeSearch, retrieveSearches, clearHistory } from '../actions/search';
import { fetchVenues } from '../actions/attractions';
import { bindActionCreators } from 'redux';
import './SearchContainer.css'

// import 'jquery/src/jquery';
import $ from 'jquery';
// import * as $ from 'jquery';
// declare var $: $

class SearchContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    console.log("HELLO")

  }

  // componentDidMount

  handleOnChange = (event) => {
    this.props.updateSearch(event.target.value);
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const search = this.props.search.keywords

    this.props.fetchVenues(search);
  }





// componentDidMount = () => {
//   $(document).ready(function(){
//
//
//
//   	 $("#f_elem_city").autocomplete({
//   		source: function (request, response) {
//   		 $.getJSON(
//   			"http://gd.geobytes.com/AutoCompleteCity?callback=?&q="+request.term,
//   			function (data) {
//   			 response(data);
//   			}
//   		 );
//   		},
//   		minLength: 3,
//   		select: function (event, ui) {
//   		 var selectedObj = ui.item;
//   		 $("#f_elem_city").val(selectedObj.value);
//   		getcitydetails(selectedObj.value);
//   		 return false;
//   		},
//   		open: function () {
//   		 $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
//   		},
//   		close: function () {
//   		 $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
//   		}
//   	 });
//   	 $("#f_elem_city").autocomplete("option", "delay", 100);
//   	});
//
//
// function getcitydetails(fqcn) {
//
// 	if (typeof fqcn == "undefined") fqcn = $("#f_elem_city").val();
//
// 	let cityfqcn = fqcn;
//
// 	if (cityfqcn) {
//
// 	    $.getJSON(
// 	                "http://gd.geobytes.com/GetCityDetails?callback=?&fqcn="+cityfqcn,
//                      function (data) {
// 	            $("#geobytesinternet").val(data.geobytesinternet);
// 	            $("#geobytescountry").val(data.geobytescountry);
// 	            $("#geobytesregionlocationcode").val(data.geobytesregionlocationcode);
// 	            $("#geobytesregion").val(data.geobytesregion);
// 	            $("#geobyteslocationcode").val(data.geobyteslocationcode);
// 	            $("#geobytescity").val(data.geobytescity);
// 	            $("#geobytescityid").val(data.geobytescityid);
// 	            $("#geobytesfqcn").val(data.geobytesfqcn);
// 	            $("#geobyteslatitude").val(data.geobyteslatitude);
// 	            $("#geobyteslongitude").val(data.geobyteslongitude);
// 	            $("#geobytescapital").val(data.geobytescapital);
// 	            $("#geobytestimezone").val(data.geobytestimezone);
// 	            $("#geobytesnationalitysingular").val(data.geobytesnationalitysingular);
// 	            $("#geobytespopulation").val(data.geobytespopulation);
// 	            $("#geobytesnationalityplural").val(data.geobytesnationalityplural);
// 	            $("#geobytesmapreference").val(data.geobytesmapreference);
// 	            $("#geobytescurrency").val(data.geobytescurrency);
// 	            $("#geobytescurrencycode").val(data.geobytescurrencycode);
// 	            }
// 	    );
// 	}
// }



// }




  render() {
    console.log(this.props)

     let venues_list = "hi"
    if (this.props.venues) {

      venues_list = this.props.venues.map(venue => {
        return <div>{venue.name}</div>
      })
  }
    return (

      <div>
    <SearchBox
      handleOnSubmit={this.handleOnSubmit}
      handleOnChange={this.handleOnChange}
       inputValue={this.props.search.keywords}

      />
      {venues_list}

      <div className="section no-pad-bot yellow lighten-3">
          <div id="show-case" className="container">
              <div className="section">

                  <div className="row">
                      <div className="col s12 m12">
                          <div className="icon-block">
                              <h2 className="center black-text light header subtitle"><i className="fa fa-file-code-o"></i> <a href="http://battuta.medunes.net" target="_blank">Battuta</a> Show case</h2>
                              <div className="col s4">
                                  <label className="left-align" for="country">Country</label>
                                  <select className="brwoser-default" id="country"></select>
                              </div>

                              <div className="col s4">
                                  <label className="left-align" for="region">Region</label>
                                  <select className="brwoser-default" id="region"></select>
                              </div>

                              <div className="col s4">
                                   <label className="left-align" for="city">City</label>
                                  <select className="autocomplete" id="city"></select>
                              </div>
                          </div>
                      </div>
                  </div>
                   <div className="row">
                      <div className="col s2 m2"></div>
                      <div className="col s6 m6">
                          <div id="location" className="orange lighten-1 black-text"></div>
                      </div>
                  </div>
              </div>
          </div>
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

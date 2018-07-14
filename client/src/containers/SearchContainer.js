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



  var currentCities=[];

var BATTUTA_KEY="bd8c940f6ad6dfa181f7d32922758c74"
  // Populate country select box from battuta API
var url = "https://battuta.medunes.net/api/country/all/?key="+BATTUTA_KEY+"&callback=?";
  $.getJSON(url,function(countries)
  {
    console.log(countries);
    $('#country').material_select();
    //loop through countries..
    $.each(countries,function(key,country)
    {
        $("<option></option>")
                .attr("value",country.code)
                .append(country.name)
                      .appendTo($("#country"));

    });
    // trigger "change" to fire the #state section update process
    $("#country").material_select('update');
    $("#country").trigger("change");


  });

  $("#country").on("change",function()
  {

    var countryCode=$("#country").val();

    // Populate country select box from battuta API
    url="https://battuta.medunes.net/api/region/"
    +countryCode
    +"/all/?key="+BATTUTA_KEY+"&callback=?";

    $.getJSON(url,function(regions)
    {
      $("#region option").remove();
      //loop through regions..
      $.each(regions,function(key,region)
      {
          $("<option></option>")
                  .attr("value",region.region)
                  .append(region.region)
                        .appendTo($("#region"));
      });
      // trigger "change" to fire the #state section update process
      $("#region").material_select('update');
      $("#region").trigger("change");

    });

  });
  $("#region").on("change",function()
  {

    // Populate country select box from battuta API
    var countryCode=$("#country").val();
  var region=$("#region").val();
    url="https://battuta.medunes.net/api/city/"
    +countryCode
    +"/search/?region="
    +region
    +"&key="
    +BATTUTA_KEY
    +"&callback=?";

    $.getJSON(url,function(cities)
    {
      currentCities=cities;
        var i=0;
        $("#city option").remove();

      //loop through regions..
      $.each(cities,function(key,city)
      {
          $("<option></option>")
                  .attr("value",i++)
                  .append(city.city)
                  .appendTo($("#city"));
      });
      // trigger "change" to fire the #state section update process
      $("#city").material_select('update');
      $("#city").trigger("change");

    });

  });
  $("#city").on("change",function()
  {
    var currentIndex=$("#city").val();
    var currentCity=currentCities[currentIndex];
    var city=currentCity.city;
    var region=currentCity.region;
    var country=currentCity.country;
    var lat=currentCity.latitude;
    var lng=currentCity.longitude;
    $("#location").html('<i className="fa fa-map-marker"></i> <strong> '+city+"/"+region+"</strong>("+lat+","+lng+")");
  });

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

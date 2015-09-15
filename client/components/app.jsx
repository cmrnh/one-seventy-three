var React = require('react');
var http = require('axios');
var Reflux = require('reflux');
var _ = require('lodash');

var Actions = require('../actions');
var Artist = require('./artist.jsx');

var App = React.createClass({

    getInitialState: function() {
      return {
        suggestedArtists: []
      }
    },

    handleSearchClick: function(e) {
      var artistName = React.findDOMNode(this.refs.artistName); // get the DOM node
      Actions.searchArtist(artistName.value);
      artistName.value = ''; // clear the input
    },

    handleArtistClick: function(e) {
      Actions.searchArtist(e.target.text);
    },

    render: function() {
      return (
        <div>
          <h1>Echo Suggest</h1>
          <input placeholder='artist name' ref='artistName' />
          <button onClick={ this.handleSearchClick }>Search</button>
          <div>
            { _.map(this.state.suggestedArtists, function(artist, i) {
              return (
                <Artist name={ artist.name } onClick={ this.handleArtistClick } />
              )
            }, this) }
          </div>
        </div>
      );
    }

  });

module.exports = App;
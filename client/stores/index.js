var Reflux = require('reflux');

var Actions = require('../actions');

var Store = Reflux.createStore({

  listenables: Actions,

  init: function() {
    // `init` is run once when the shared store object is created
    this.suggestedArtists = [];
  },

  getInitialState: function() {
    // `getInitialState` runs everytime a component connects to the store
    return this.suggestedArtists;
  },

  onSearchArtist: function() {
    console.log('onSearchArtist');
    // TODO: trigger loading indicator state change
  },

});

module.exports = Store;

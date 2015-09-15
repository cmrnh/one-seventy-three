var Reflux = require('reflux');

var searchArtist = Reflux.createAction();

searchArtist.listen(function() {
  console.log(arguments);
});

module.exports = {
  searchArtist: searchArtist
};

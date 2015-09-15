var Reflux = require('reflux');
var http = require('axios');

var searchArtist = Reflux.createAction({ 'children': ['completed', 'failed'] });

searchArtist.listen(function(artistName) {
  http({
    method: 'get',
    url: 'http://developer.echonest.com/api/v4/artist/similar',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      'name': artistName,
      'api_key': 'NXYHVSJ5L3KAWFU6W'
    }
  })
  .then(this.completed);
});

module.exports = {
  searchArtist: searchArtist
};

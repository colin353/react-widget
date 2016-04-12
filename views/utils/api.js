var axios = require('axios');

var utils = {
  get_widgets: function() { return axios.get('/api?method=get_widgets').then(function(w) {
      return w.data;
    });
  },
  new_widget: function(w) {
    return axios.post('/api?method=new_widget', {widget: w});
  }
};

module.exports = utils;

var store = {
  set_value: function(key, value) {
    window._store[key] = value;
  },
  get_value: function(key) {
    if(key in window._store) return window._store[key];
    else return false;
  }
};

window._store = {};

module.exports = store;

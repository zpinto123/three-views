if (process.env.REACT_APP_DEV || process.env.NODE_ENV === 'development') {
  module.exports = require('./configure-store.dev');
} else {
  module.exports = require('./configure-store.prod');
}

const configureStore = require("@reduxjs/toolkit").configureStore;
const counterReduceer = require("../features/counter/counterSlice");

// configure store
const store = configureStore({
  reducer: {
    counter: counterReduceer,
  },
});

module.exports = store;

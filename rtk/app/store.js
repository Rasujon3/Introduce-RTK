const configureStore = require("@reduxjs/toolkit").configureStore;
const counterReduceer = require("../features/counter/counterSlice");
const dynamicCounterReducer = require("../features/dynamicCounter/dynamicCounterSlice");

// configure store
const store = configureStore({
  reducer: {
    counter: counterReduceer,
    dynamicCounter: dynamicCounterReducer,
  },
});

module.exports = store;

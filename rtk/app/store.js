const configureStore = require("@reduxjs/toolkit").configureStore;
const counterReduceer = require("../features/counter/counterSlice");
const dynamicCounterReducer = require("../features/dynamicCounter/dynamicCounterSlice");
const { createLogger } = require("redux-logger");

const logger = createLogger();
// configure store
const store = configureStore({
  reducer: {
    counter: counterReduceer,
    dynamicCounter: dynamicCounterReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

module.exports = store;

import {applyMiddleware, compose, createStore} from 'redux';
import {DevTools} from '../ui/DevTool';
import {rootReducer} from "./reducers";
import {coreMiddleware} from "./middleware/core";
import {appMiddleware} from "./middleware/app";
import {multiMiddleware} from "./middleware/core/multi.middleware";

// compose store enhancers
const enhancer = compose(
  applyMiddleware(...appMiddleware, ...coreMiddleware),
  DevTools.instrument()
);

export const store = createStore(rootReducer, {}, enhancer);

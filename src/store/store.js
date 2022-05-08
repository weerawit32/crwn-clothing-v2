import {
  compose,
  applyMiddleWare,
  legacy_createStore as createStore,
} from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducers";
const middleWares = [logger];
const composedEnhancers = compose(applyMiddleWare(...middleWares));
export const store = createStore(rootReducer, undefined, composedEnhancers);

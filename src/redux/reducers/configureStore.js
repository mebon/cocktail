import {applyMiddleware, createStore} from "redux";
import rootReducers from "./rootReducers";
import thunk from "redux-thunk";

export default function configureStore(){
    return createStore(rootReducers,applyMiddleware(thunk))
}
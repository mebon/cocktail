import {combineReducers} from "redux";
import changeCocktailReducer from "./changeCocktailReducer";
import cocktailsListReducer from "./cocktailsListReducer";
const rootReducers = combineReducers({
    changeCocktailReducer: changeCocktailReducer,
    cocktailsListReducer:cocktailsListReducer,
});

export default rootReducers;
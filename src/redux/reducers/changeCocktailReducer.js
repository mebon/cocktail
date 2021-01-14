import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function changeCocktailReducer(state=initialState.currentCocktail,action){
    switch(action.type){
        case actionTypes.CHANGE_COCKTAIL:
            return action.payload
        default:
            return state
    }

}
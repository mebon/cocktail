import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function changeCocktailReducer(state=initialState.cocktails,action){
    switch(action.type){
        case actionTypes.GET_COCKTAILS_SUCCESS:
            return action.payload
        default:
            return state;
    }

}
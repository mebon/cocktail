import * as actionTypes from "./actionTypes";

export function changeQuery(query) {

  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + query;

  const fetchPromise = fetch(url).then(resp => {
    const contentType = resp.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return resp.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  }).then((data) => {
    return data.drinks;
  });

  return {
    type: 'CHANGE_QUERY',
    payload: fetchPromise
  };
}

export function getCocktails(query) {

  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + query;

  const fetchPromise = fetch(url).then(resp => {
    const contentType = resp.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return resp.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  }).then((data) => {
    return data.drinks;
  });

  return {
    type: 'CHANGE_QUERY',
    payload: fetchPromise
  };
}





//export function getCocktails() {
//  return function (dispatch) {
    
//    let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=egg"
//    return fetch(url).then(response => response.json())
//      .then(result => dispatch(getCocktailsSuccess(result)))
//     }}
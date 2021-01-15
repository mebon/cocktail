import React, { Component } from "react";
import SearchInput from "./SearchInput";
import DrinksList from "./DrinksList";
import { Container } from "reactstrap";
class SearchForm extends Component {

  state = {
    drinks: []
  }

  getDrink = async (e) => {
    const drinkName = e.target.elements.drinkName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}&count=100`);
    const data = await api_call.json();
    this.setState({ drinks: data.drinks });
    console.log(this.state.drinks);
  }

  render() {
    return (
      <div className="App">
        <Container>
        <SearchInput getDrink={this.getDrink} />
        <DrinksList drinks={this.state.drinks}/>
        </Container>
      </div>
    );
  }
};

export default SearchForm;
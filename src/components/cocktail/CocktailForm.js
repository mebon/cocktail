import React, { Component, dropdownItem } from "react";
import { ButtonGroup } from 'reactstrap';
import Drinks from "../search/Drinks";

class CocktailForm extends Component {

    state = {
        drinks: [],
        categoryName: {}
    }
    changeCategoryName(newName) {
        this.state.categoryName = newName
    }

    getCategory = async (e) => {
        e.preventDefault();
        const api_call = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${this.state.categoryName}`);
        const data = await api_call.json();
        this.setState({ drinks: data.drinks });
        console.log(this.state.drinks);
    }
    render() {
        return (
            <div onSubmit={this.getCategory}>
                <form >

                    <ButtonGroup >
                        <button onClick={() => this.changeCategoryName("c=Cocktail")} >Cocktail</button>
                        <button onClick={() => this.changeCategoryName("c=Ordinary_Drink")}>Ordinary Drink</button>
                        <button onClick={() => this.changeCategoryName("c=Shot")} >Shot</button>
                        <button onClick={() => this.changeCategoryName("c=Coffee / Tea")} >Coffee / Tea</button>
                        <button onClick={() => this.changeCategoryName("c=Other/Unknown")} >Other/Unknown</button>
                        <button onClick={() => this.changeCategoryName("c=Punch / Party Drink")} >Punch / Party Drink</button>
                        <button onClick={() => this.changeCategoryName("c=Milk / Float / Shake")} >Milk / Float / Shake</button>
                        <button onClick={() => this.changeCategoryName("c=Homemade Liqueur")} >Homemade Liqueur</button>
                        <button onClick={() => this.changeCategoryName("c=Beer")} >Beer</button>
                        <button onClick={() => this.changeCategoryName("a=Alcoholic")} >Alcoholic</button>
                        <button onClick={() => this.changeCategoryName("a=Non_Alcoholic")} >Non Alcoholic</button>
                        <button onClick={() => this.changeCategoryName("a=Optional alcohol")} >Optional alcohol</button>
                    </ButtonGroup>
                    <br></br>
                </form>

                <Drinks drinks={this.state.drinks} />
            </div>
        )
    }
}
export default CocktailForm;

import React, { Component } from "react";
import { ButtonGroup, Button } from 'reactstrap';
import DrinksList from "../search/DrinksList";

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

                    <ButtonGroup size="sm" style={{color:'white',backgroundColor: '#5555',}}>
                        <Button color="outline-dark" type="submit" onClick={() => this.changeCategoryName("c=Cocktail")} ><b style={{color:'black'}}>Cocktail</b></Button>
                        <Button color="outline-dark" type="submit" onClick={() => this.changeCategoryName("c=Ordinary_Drink")}><b style={{color:'black'}}>Ordinary Drink</b></Button>
                        <Button color="outline-dark" type="submit" onClick={() => this.changeCategoryName("c=Shot")} ><b style={{color:'black'}}>Shot</b></Button>
                        <Button color="outline-dark" type="submit" onClick={() => this.changeCategoryName("c=Coffee / Tea")} ><b style={{color:'black'}}>Coffee / Tea</b></Button>
                        <Button color="outline-dark" type="submit" onClick={() => this.changeCategoryName("c=Other/Unknown")} ><b style={{color:'black'}}>Other/Unknown</b></Button>
                        <Button color="outline-dark" type="submit" onClick={() => this.changeCategoryName("c=Punch / Party Drink")} ><b style={{color:'black'}}>Punch / Party Drink</b></Button>
                        <Button color="outline-dark" type="submit" onClick={() => this.changeCategoryName("c=Milk / Float / Shake")} ><b style={{color:'black'}}>Milk / Float / Shake</b></Button>
                        <Button color="outline-dark" type="submit" onClick={() => this.changeCategoryName("c=Homemade Liqueur")} ><b style={{color:'black'}}>Homemade Liqueur</b></Button>
                        <Button color="outline-dark" type="submit" onClick={() => this.changeCategoryName("c=Beer")} ><b style={{color:'black'}}>Beer</b></Button>
                        <Button color="outline-dark" type="submit" onClick={() => this.changeCategoryName("a=Alcoholic")} ><b style={{color:'black'}}>Alcoholic</b></Button>
                        <Button color="outline-dark" type="submit" onClick={() => this.changeCategoryName("a=Non_Alcoholic")} ><b style={{color:'black'}}>Non Alcoholic</b></Button>
                        <Button color="outline-dark" type="submit" onClick={() => this.changeCategoryName("a=Optional alcohol")} ><b style={{color:'black'}}>Optional alcohol</b></Button>
                    </ButtonGroup>
                    <br></br>
                </form>

                <DrinksList drinks={this.state.drinks} />
            </div>
        )
    }
}
export default CocktailForm;

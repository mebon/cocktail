import React, { Component } from 'react';
import Navi from '../navi/Navi';
import { Container, Row, Col } from "reactstrap";

export default class SelectedCocktail extends Component {
    state = {
        activeDrink: []
    }
    componentDidMount = async () => {
        console.log(this.props);
        const drinkName = this.props.location.state.drink;
        const req = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`);

        const res = await req.json();
        this.setState({ activeDrink: res.drinks[0] });
        console.log(this.state.activeDrink);
    }
    render() {
        const drink = this.state.activeDrink;
        console.log(drink)
        return (
            <div>
                <Navi />
                <br /><Container style={{
                    color: 'white',
                    backgroundColor: '#5555',
                }}>
                    <Row>
                        <Col xs="5">
                            <br /> <img src={drink.strDrinkThumb} alt={drink.strDrink}height="400px"></img>

                        </Col>
                        <Col xs="7">
                            <h1><u>Instruction : {drink.strDrink}</u></h1>{drink.strInstructions}
                            <br /><u><b>Drink Name :</b></u> {drink.strDrink}
                            <br /><u><b>Category :</b></u> {drink.strCategory}
                            <br /><u><b>Glass Type :</b></u> {drink.strGlass}
                            <br /><u><b>Alcoholic :</b></u> {drink.strAlcoholic}
                            <h4><u>Ingredients</u></h4>
                            {drink.strMeasure1} {drink.strIngredient1}
                            <br />{drink.strMeasure2} {drink.strIngredient2}
                            <br />{drink.strMeasure3} {drink.strIngredient3}
                            <br />{drink.strMeasure4} {drink.strIngredient4}
                            <br />{drink.strMeasure5} {drink.strIngredient5}
                            <br />{drink.strMeasure6} {drink.strIngredient6}
                            <br />{drink.strMeasure7} {drink.strIngredient7}
                            <br />{drink.strMeasure8} {drink.strIngredient8}
                            

                        </Col>
                    </Row>
                <br/>
                </Container>

            </div>

        )
    }

}

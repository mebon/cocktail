import React from "react";
import { Link} from "react-router-dom";

import { Col, Container, Row } from "reactstrap";
const Drinks = props => (
    <Container>
        <Row>
            {props.drinks.map((drink) => {
                return (
                    <Col md-4 style={{
                        color: 'white',
                        backgroundColor: '#5555',
                    }}>
                        <div>
                        {drink.strAlcoholic}
                            <br />
                            <Link to={{ pathname: `/search/${drink.idDrink}`, state: { drink: drink.strDrink } }}>
                                <img
                                    className="image__box-img"
                                    src={drink.strDrinkThumb}
                                    alt={drink.strDrink}
                                    height="200" />

                                <h6 style={{
                                    color: 'black',
                                    backgroundColor: '#5555',
                                    position: "absolute",
                                    top: "205px",
                                }}>{drink.strDrink.length<25? `${drink.strDrink}`:`${drink.strDrink.substring(0,24)}...`} </h6>
                            </Link>
                        </div>
                        <br />
                    </Col>
                )
            })}
        </Row>

    </Container>
)

export default Drinks;
import React, { Component } from "react";
import { Container} from 'reactstrap';
import Navi from "../navi/Navi";
import CocktailForm from "./CocktailForm";


export default class Cocktails extends Component {

  render() {

    return (
      <div>
        <Navi />
        <Container>
          <CocktailForm></CocktailForm>
        </Container>


      </div>


    );
  }
}

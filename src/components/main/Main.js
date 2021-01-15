import React, { Component } from "react";
import Navi from "../navi/Navi";
import Random from "./Random";

 export default class Main extends Component {

  render() {

    return (
      <div>
      <Navi />
      <Random></Random>

      </div>

    );
  }
}

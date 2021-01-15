import React, { Component } from "react";
import Footer from "../navi/Footer";
import Navi from "../navi/Navi";
import SearchForm from "./SearchForm";

export default class SeachPage extends Component {

  render() {
    return (
      <div>
        <Navi/>
        <SearchForm></SearchForm>
        <br/>
        <p style={{
          color: "#ffffff",
          marginLeft: "44%",
        }}>

        </p>
      </div>

    );
  }
}

import React, { Component } from "react";
import Navi from "../navi/Navi";
import SearchForm from "./SearchForm";

export default class Search extends Component {

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

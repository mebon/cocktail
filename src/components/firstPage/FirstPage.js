import React, { Component } from "react";
import { Col, Button, } from "reactstrap";
import logontext from "../../image/logontext2.png";
import Footer from "../navi/Footer";

export default class FirstPage extends Component {


  render() {
    return (
      
      <div style={{
        width: "500px",
        height: "1000px",
        position: "sticky",
        left: "36%",
        top: "10%",
      }}>
                <a href="/main/" ><img src={logontext} ></img></a>
        <Col>
          <Button size="lg" block href="/main/">Main Page</Button><br/>
          <Button size="lg" block href="/cocktails/">Cocktail List</Button><br/>
          <Button size="lg" block href="/search/">Search</Button><br/>          
        </Col>

      <Footer></Footer>
      </div>

    );
  }
}

import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

const Random = () => {
  const [drink, setDrink] = useState([])
  const [drink2, setDrink2] = useState([])
  const [drink3, setDrink3] = useState([])
  const [drink4, setDrink4] = useState([])
  const [drink5, setDrink5] = useState([])
  const [drink6, setDrink6] = useState([])
  const [drink7, setDrink7] = useState([])
  const [drink8, setDrink8] = useState([])
  const [drink9, setDrink9] = useState([])
  const [drink10, setDrink10] = useState([])
  const [drink11, setDrink11] = useState([])
  const [drink12, setDrink12] = useState([])
  const fetchDrink = async () => { const response = await fetch(url); const data = await response.json(); setDrink(data.drinks); }
  const fetchDrink2 = async () => { const response = await fetch(url); const data = await response.json(); setDrink2(data.drinks); }
  const fetchDrink3 = async () => { const response = await fetch(url); const data = await response.json(); setDrink3(data.drinks); }
  const fetchDrink4 = async () => { const response = await fetch(url); const data = await response.json(); setDrink4(data.drinks); }
  const fetchDrink5 = async () => { const response = await fetch(url); const data = await response.json(); setDrink5(data.drinks); }
  const fetchDrink6 = async () => { const response = await fetch(url); const data = await response.json(); setDrink6(data.drinks); }
  const fetchDrink7 = async () => { const response = await fetch(url); const data = await response.json(); setDrink7(data.drinks); }
  const fetchDrink8 = async () => { const response = await fetch(url); const data = await response.json(); setDrink8(data.drinks); }
  const fetchDrink9 = async () => { const response = await fetch(url); const data = await response.json(); setDrink9(data.drinks); }
  const fetchDrink10 = async () => { const response = await fetch(url); const data = await response.json(); setDrink10(data.drinks); }
  const fetchDrink11 = async () => { const response = await fetch(url); const data = await response.json(); setDrink11(data.drinks); }
  const fetchDrink12 = async () => { const response = await fetch(url); const data = await response.json(); setDrink12(data.drinks); }
  useEffect(() => { fetchDrink() }, [])
  useEffect(() => { fetchDrink2() }, [])
  useEffect(() => { fetchDrink3() }, [])
  useEffect(() => { fetchDrink4() }, [])
  useEffect(() => { fetchDrink5() }, [])
  useEffect(() => { fetchDrink6() }, [])
  useEffect(() => { fetchDrink7() }, [])
  useEffect(() => { fetchDrink8() }, [])
  useEffect(() => { fetchDrink9() }, [])
  useEffect(() => { fetchDrink10() }, [])
  useEffect(() => { fetchDrink11() }, [])
  useEffect(() => { fetchDrink12() }, [])

  return (
    <>
      <section className="drinks" md-4 style={{
                        color: 'white',
                        backgroundColor: '#5555',
                    }}>
        {drink.map((d) => {
          return (
            <Row >
              <Col xs="3">
                <div>
                  <Link to={{ pathname: `/search/${d.idDrink}`, state: { drink: d.strDrink } }}>
                    <img height="250px" src={d.strDrinkThumb} alt={d.strDrink} /></Link>
                </div>
              </Col>
              <Col xs="9">
                <div>
                  <h2>{d.strDrink}</h2>
                  <h3>Instructions : {d.strDrink}</h3>
                  <div className="underline"></div>
                  <p>{d.strInstructions}</p>
                </div>
              </Col>
            </Row>
            
          )
        })}
        {drink2.map((d) => {
          return (
            <Row>
              <Col xs="3">
                <div>
                  <Link to={{ pathname: `/search/${d.idDrink}`, state: { drink: d.strDrink } }}>
                    <img height="250px" src={d.strDrinkThumb} alt={d.strDrink} /></Link>
                </div>
              </Col>
              <Col xs="9">
                <div>
                  <h2>{d.strDrink}</h2>
                  <h3>Instructions : {d.strDrink}</h3>
                  <div className="underline"></div>
                  <p>{d.strInstructions}</p>
                </div>
              </Col>
            </Row>
          )
        })}
        {drink3.map((d) => {
          return (
            <Row>
              <Col xs="3">
                <div>
                  <Link to={{ pathname: `/search/${d.idDrink}`, state: { drink: d.strDrink } }}>
                    <img height="250px" src={d.strDrinkThumb} alt={d.strDrink} /></Link>
                </div>
              </Col>
              <Col xs="9">
                <div>
                  <h2>{d.strDrink}</h2>
                  <h3>Instructions : {d.strDrink}</h3>
                  <div className="underline"></div>
                  <p>{d.strInstructions}</p>
                </div>
              </Col>
            </Row>
          )
        })}
        {drink4.map((d) => {
          return (
            <Row>
              <Col xs="3">
                <div>
                  <Link to={{ pathname: `/search/${d.idDrink}`, state: { drink: d.strDrink } }}>
                    <img height="250px" src={d.strDrinkThumb} alt={d.strDrink} /></Link>
                </div>
              </Col>
              <Col xs="9">
                <div>
                  <h2>{d.strDrink}</h2>
                  <h3>Instructions : {d.strDrink}</h3>
                  <div className="underline"></div>
                  <p>{d.strInstructions}</p>
                </div>
              </Col>
            </Row>
          )
        })}
        {drink5.map((d) => {
          return (
            <Row>
              <Col xs="3">
                <div>
                  <Link to={{ pathname: `/search/${d.idDrink}`, state: { drink: d.strDrink } }}>
                    <img height="250px" src={d.strDrinkThumb} alt={d.strDrink} /></Link>
                </div>
              </Col>
              <Col xs="9">
                <div>
                  <h2>{d.strDrink}</h2>
                  <h3>Instructions : {d.strDrink}</h3>
                  <div className="underline"></div>
                  <p>{d.strInstructions}</p>
                </div>
              </Col>
            </Row>
          )
        })}
        {drink6.map((d) => {
          return (
            <Row>
              <Col xs="3">
                <div>
                  <Link to={{ pathname: `/search/${d.idDrink}`, state: { drink: d.strDrink } }}>
                    <img height="250px" src={d.strDrinkThumb} alt={d.strDrink} /></Link>
                </div>
              </Col>
              <Col xs="9">
                <div>
                  <h2>{d.strDrink}</h2>
                  <h3>Instructions : {d.strDrink}</h3>
                  <div className="underline"></div>
                  <p>{d.strInstructions}</p>
                </div>
              </Col>
            </Row>
          )
        })}
        {drink7.map((d) => {
          return (
            <Row>
              <Col xs="3">
                <div>
                  <Link to={{ pathname: `/search/${d.idDrink}`, state: { drink: d.strDrink } }}>
                    <img height="250px" src={d.strDrinkThumb} alt={d.strDrink} /></Link>
                </div>
              </Col>
              <Col xs="9">
                <div>
                  <h2>{d.strDrink}</h2>
                  <h3>Instructions : {d.strDrink}</h3>
                  <div className="underline"></div>
                  <p>{d.strInstructions}</p>
                </div>
              </Col>
            </Row>
          )
        })}
        {drink8.map((d) => {
          return (
            <Row>
              <Col xs="3">
                <div>
                  <Link to={{ pathname: `/search/${d.idDrink}`, state: { drink: d.strDrink } }}>
                    <img height="250px" src={d.strDrinkThumb} alt={d.strDrink} /></Link>
                </div>
              </Col>
              <Col xs="9">
                <div>
                  <h2>{d.strDrink}</h2>
                  <h3>Instructions : {d.strDrink}</h3>
                  <div className="underline"></div>
                  <p>{d.strInstructions}</p>
                </div>
              </Col>
            </Row>
          )
        })}
        {drink9.map((d) => {
          return (
            <Row>
              <Col xs="3">
                <div>
                  <Link to={{ pathname: `/search/${d.idDrink}`, state: { drink: d.strDrink } }}>
                    <img height="250px" src={d.strDrinkThumb} alt={d.strDrink} /></Link>
                </div>
              </Col>
              <Col xs="9">
                <div>
                  <h2>{d.strDrink}</h2>
                  <h3>Instructions : {d.strDrink}</h3>
                  <div className="underline"></div>
                  <p>{d.strInstructions}</p>
                </div>
              </Col>
            </Row>
          )
        })}
        {drink10.map((d) => {
          return (
            <Row>
              <Col xs="3">
                <div>
                  <Link to={{ pathname: `/search/${d.idDrink}`, state: { drink: d.strDrink } }}>
                    <img height="250px" src={d.strDrinkThumb} alt={d.strDrink} /></Link>
                </div>
              </Col>
              <Col xs="9">
                <div>
                  <h2>{d.strDrink}</h2>
                  <h3>Instructions : {d.strDrink}</h3>
                  <div className="underline"></div>
                  <p>{d.strInstructions}</p>
                </div>
              </Col>
            </Row>
          )
        })}
        {drink11.map((d) => {
          return (
            <Row>
              <Col xs="3">
                <div>
                  <Link to={{ pathname: `/search/${d.idDrink}`, state: { drink: d.strDrink } }}>
                    <img height="250px" src={d.strDrinkThumb} alt={d.strDrink} /></Link>
                </div>
              </Col>
              <Col xs="9">
                <div>
                  <h2>{d.strDrink}</h2>
                  <h3>Instructions : {d.strDrink}</h3>
                  <div className="underline"></div>
                  <p>{d.strInstructions}</p>
                </div>
              </Col>
            </Row>
          )
        })}
        {drink12.map((d) => {
          return (
            <Row>
              <Col xs="3">
                <div>
                  <Link to={{ pathname: `/search/${d.idDrink}`, state: { drink: d.strDrink } }}>
                    <img height="250px" src={d.strDrinkThumb} alt={d.strDrink} /></Link>
                </div>
              </Col>
              <Col xs="9">
                <div>
                  <h2>{d.strDrink}</h2>
                  <h3>Instructions : {d.strDrink}</h3>
                  <div className="underline"></div>
                  <p>{d.strInstructions}</p>
                </div>
              </Col>
            </Row>
          )
        })}
      </section>
    </>
  )
}

export default Random
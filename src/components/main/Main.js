import React, { Component } from "react";
import cocktailDeneme from "../../image/cocktailDeneme.jpg";
import {
  Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody, CardDeck
} from 'reactstrap';
import { UncontrolledCarousel } from 'reactstrap';
import Navi from "../navi/Navi";


const items = [
  
  {
    src: 'https://img-s1.onedio.com/id-5738635b8167d6ef501a825e/rev-0/raw/s-e359d84401532e7677cc0f19ac35579307878080.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: 'https://www.kokteyltarifi.com/wp-content/uploads/2020/05/tekilasunrise-scaled.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: 'https://listelist.com/wp-content/uploads/2018/09/IMG_7356.jpg',
    altText: 'Çilekli Soda',
    caption: 'Çilekli Soda',
    header: 'Çilekli Soda',
    key: '5',
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

 export default class Main extends Component {

  render() {

    return (
      
      <div>
        <Navi/>
        <h3>Günün Önerisi</h3>
       {Example()}
        <CardDeck>
          <Card color="dark">
            <a href="/cocktail1/"><CardImg  top width="100%" height="225px" src={cocktailDeneme} alt="Card image cap"></CardImg></a>
            <CardBody>
              <CardTitle tag="h5">Portakal Suyu</CardTitle>
              <CardSubtitle className="mb-2 text-muted">Portakaldan Sıkılarak Elde Edilen Sıvı</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <Button href="/cocktail1/">Detay</Button>
            </CardBody>
          </Card>
          <Card color="dark">
          <a href="/cocktail1/"><CardImg  top width="100%" height="225px" src={cocktailDeneme} alt="Card image cap"></CardImg></a>
            <CardBody>
              <CardTitle tag="h5">Fişne Suyu</CardTitle>
              <CardSubtitle className="mb-2 text-muted">Fişneden Sıkılarak Elde Edilen Sıvı</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button>Detay</Button>
            </CardBody>
          </Card>
          <Card color="dark">
          <a href="/cocktail1/"><CardImg  top width="100%" height="225px" src={cocktailDeneme} alt="Card image cap"></CardImg></a>
            <CardBody>
              <CardTitle tag="h5">Elma Suyu</CardTitle>
              <CardSubtitle className="mb-2 text-muted">Elmada Sıkılarak Elde Edilen Sıvı</CardSubtitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Detay</Button>
            </CardBody>
          </Card>
          <Card color="dark">
          <a href="/cocktail1/"><CardImg  top width="100%" height="225px" src={cocktailDeneme} alt="Card image cap"></CardImg></a>
            <CardBody>
              <CardTitle tag="h5">Ananas Suyu</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Ananastan Sıkılarak Elde Edilen Sıvı</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button>Detay</Button>
            </CardBody>
          </Card>
        </CardDeck>
        <br/>
        <CardDeck>
          <Card color="dark">
          <a href="/cocktail1/"><CardImg  top width="100%" height="225px" src={cocktailDeneme} alt="Card image cap"></CardImg></a>
            <CardBody>
              <CardTitle tag="h5">Portakal Suyu</CardTitle>
              <CardSubtitle className="mb-2 text-muted">Portakaldan Sıkılarak Elde Edilen Sıvı</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <Button href="/cocktails/">Detay</Button>
            </CardBody>
          </Card>
          <Card color="dark">
          <a href="/cocktail1/"><CardImg  top width="100%" height="225px" src={cocktailDeneme} alt="Card image cap"></CardImg></a>
            <CardBody>
              <CardTitle tag="h5">Fişne Suyu</CardTitle>
              <CardSubtitle className="mb-2 text-muted">Fişneden Sıkılarak Elde Edilen Sıvı</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button>Detay</Button>
            </CardBody>
          </Card>
          <Card color="dark">
          <a href="/cocktail1/"><CardImg  top width="100%" height="225px" src={cocktailDeneme} alt="Card image cap"></CardImg></a>
            <CardBody>
              <CardTitle tag="h5">Elma Suyu</CardTitle>
              <CardSubtitle className="mb-2 text-muted">Elmada Sıkılarak Elde Edilen Sıvı</CardSubtitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Detay</Button>
            </CardBody>
          </Card>
          <Card color="dark">
          <a href="/cocktail1/"><CardImg  top width="100%" height="225px" src={cocktailDeneme} alt="Card image cap"></CardImg></a>
            <CardBody>
              <CardTitle tag="h5">Ananas Suyu</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Ananastan Sıkılarak Elde Edilen Sıvı</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button>Detay</Button>
            </CardBody>
          </Card>
        </CardDeck>
        <br/>
        <CardDeck>
          <Card color="dark">
          <a href="/cocktail1/"><CardImg  top width="100%" height="225px" src={cocktailDeneme} alt="Card image cap"></CardImg></a>
            <CardBody>
              <CardTitle tag="h5">Portakal Suyu</CardTitle>
              <CardSubtitle className="mb-2 text-muted">Portakaldan Sıkılarak Elde Edilen Sıvı</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <Button href="/cocktails/">Detay</Button>
            </CardBody>
          </Card>
          <Card color="dark">
          <a href="/cocktail1/"><CardImg  top width="100%" height="225px" src={cocktailDeneme} alt="Card image cap"></CardImg></a>
            <CardBody>
              <CardTitle tag="h5">Fişne Suyu</CardTitle>
              <CardSubtitle className="mb-2 text-muted">Fişneden Sıkılarak Elde Edilen Sıvı</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button>Detay</Button>
            </CardBody>
          </Card>
          <Card color="dark">
          <a href="/cocktail1/"><CardImg  top width="100%" height="225px" src={cocktailDeneme} alt="Card image cap"></CardImg></a>
            <CardBody>
              <CardTitle tag="h5">Elma Suyu</CardTitle>
              <CardSubtitle className="mb-2 text-muted">Elmada Sıkılarak Elde Edilen Sıvı</CardSubtitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Detay</Button>
            </CardBody>
          </Card>
          <Card color="dark">
          <a href="/cocktail1/"><CardImg  top width="100%" height="225px" src={cocktailDeneme} alt="Card image cap"></CardImg></a>
            <CardBody>
              <CardTitle tag="h5">Ananas Suyu</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Ananastan Sıkılarak Elde Edilen Sıvı</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button>Detay</Button>
            </CardBody>
          </Card>
        </CardDeck>

      </div>

    );
  }
}

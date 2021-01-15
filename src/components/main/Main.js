import React, { Component } from "react";

import { UncontrolledCarousel } from 'reactstrap';
import Navi from "../navi/Navi";
import Random from "./Random";


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
      <Navi />
      <Random></Random>

      </div>

    );
  }
}

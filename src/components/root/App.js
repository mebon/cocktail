import React, {Component} from 'react';
import { Container } from 'reactstrap';
import { Route, Switch} from "react-router-dom";
import Main from '../main/Main';
import SeachPage from "../search/SearchPage";
import Cocktails from '../cocktail/Cocktails';
import FirstPage from '../firstPage/FirstPage';
import cocktailBackground from "../../image/cocktailBackground.png";
import NotFound from '../empty/NotFound';
import Footer from '../navi/Footer';
import SelectedCocktail from '../search/SelectedCocktail';

export default class App extends Component {

render(){
  return (
    <div style={{
      background: `url(${process.env.PUBLIC_URL + cocktailBackground})` ,
      //backgroundPosition : 'center',
      backgroundRepeat : "no-repeat",
      backgroundAttachment : "fixed",
      backgroundPosition : 'sticky',
      backgroundSize :"100% 100%",
      backgroundColor :'black',
      color:'white',
      
      }}>
    
      <Container>
        <Switch >
          <Route path="/" exact component={FirstPage}/>
          <Route path="/main" exact component={Main}/>
          <Route path="/search" exact component={SeachPage}/>
          <Route path="/cocktails/" exact component={Cocktails}/> 
          <Route path="/search/:idDrink" exact component={SelectedCocktail}/>
          <Route component={NotFound} />

        </Switch>
        <Footer></Footer>

      </Container>
    </div>
  );
  }
  }

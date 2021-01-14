import React, {Component} from 'react';
import { Container } from 'reactstrap';
import { Route, Switch} from "react-router-dom";
import Main from '../main/Main';
import Search from "../search/Search";
import Cocktails from '../cocktail/Cocktails';
import FirstPage from '../firstPage/FirstPage';
import cocktailDeneme from "../../image/cocktailBackground.jpg";
import NotFound from '../empty/NotFound';
import SearchCocktail from '../search/SearchCocktail';

export default class App extends Component {

render(){
  return (
    <div style={{
      background: `url(${process.env.PUBLIC_URL + cocktailDeneme})` ,
      //backgroundPosition : 'center',
      backgroundRepeat : "no-repeat",
      backgroundAttachment : "fixed",
      //backgroundPosition : 'sticky',
      backgroundSize :"100% 100%",
      backgroundColor :'black',
      color:'white',
      
      }}>
    
   
    <div style={{
        //backgroundImage: `url(${process.env.PUBLIC_URL + cocktailDeneme})` ,
        //backgroundPosition : 'absolute',
        //
        //backgroundRepeat: 'repeat-y',
        //backgroundSize: 'cover',
        //width:'100%',
        //height:'1000px',
        //backgroundColor:'#101010',

    }}>

      <Container>
        <Switch >
          <Route path="/" exact component={FirstPage}/>
          <Route path="/main" exact component={Main}/>
          <Route path="/search" exact component={Search}/>
          <Route path="/cocktails/" exact component={Cocktails}/> 
          <Route path="/search/:idDrink" exact component={SearchCocktail}/>
          <Route component={NotFound} />

        </Switch>
        
      </Container>
    </div> </div>
  );
  }
  }

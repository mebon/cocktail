<Navi />
        <Container>
          <Media>
            <Media left href="/cocktail1/">
              <Media object src={cocktailDeneme} width='250px' height='250px' position='center' alt="cocktailExample1" />
            </Media>
            <Media body>
              <Media heading>
                Portakal Suyu xDe
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
          </Media>
        </Container>





<form onSubmit={props.getDrink} style={{marginBottom:"2rem"}}>
                <InputGroup>
                    <InputGroupAddon addonType="prepend"><Button className="searchBar__input"><Link to="/search/">Search</Link></Button></InputGroupAddon>
                    <Input className="searchBar__input" type="text" name="drinkName"/>
                </InputGroup>
                </form>
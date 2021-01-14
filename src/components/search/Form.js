import React from 'react';
import {InputGroup,InputGroupAddon,Button,Input} from "reactstrap"

const Form =props=>(
    <form onSubmit={props.getDrink} style={{marginBottom:"2rem"}}>
        <InputGroup>
        <InputGroupAddon addonType="prepend"><Button className="searchBar__input">Search</Button></InputGroupAddon>
        <Input className="searchBar__input" type="text" name="drinkName" />
        </InputGroup>
        
    </form>
)

export default Form;
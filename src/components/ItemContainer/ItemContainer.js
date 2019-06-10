import React, {Component} from "react";
import "./ItemContainer.css";
import {Item} from "../Item/Item";

export default class ItemContainer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {name,price,imgURL,onClick,...props}=this.props;
        return(
            <Item>
                <a href="#" onClick={onClick} name={name} data-price={price} className="item__container">
                    <img src={imgURL} />
                    <h3 className="itemName">{name}</h3>
                    <span>{price} Kč</span>
                </a>
            </Item>
            
        );
    }
}
import React, {Component}  from "react";
import "./ContentSelector.css";
import {data} from "./data";
import ItemContainer from "../../components/ItemContainer/ItemContainer";

export default class ContentSelector extends Component{
    constructor(props){
        super(props);
        this.IMG_PATH="./dist/img/";
        console.log("PROPS Content selector: ",props);
    }

    itemClick(e){
        
        let selectedItem=e.currentTarget;
        let itemName=selectedItem.getAttribute("name");
        let itemPrice=selectedItem.getAttribute("data-price");
        console.log("ITEM CLICK: ",itemPrice);

        const selectedItemData={
            type:"ADD_ITEM",
            name:itemName,
            price:itemPrice
        }

        this.props.store.dispatch(selectedItemData);
    }

    render(){
        const res=data.map((item,index)=>
                <ItemContainer key={index} onClick={this.itemClick.bind(this)} name={item.name} price={item.price} imgURL={this.IMG_PATH+item.imgURL} />
        )
        return(
            <section className="content__selector_container" style={{height:window.innerHeight}}>
                {res}
            </section>
        );
    }
}
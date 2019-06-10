import React, {Component} from "react";
import "./Item.css";

class Item extends Component{
    constructor(props){
        super(props)
    }


    render(){
        const {children}=this.props;
        return(
            <div className="item__content">
                {children}
            </div>
        );
    }
}

export {Item};

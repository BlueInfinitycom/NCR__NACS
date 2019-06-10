import React, {Component} from "react";
import "./Button.css";

class Button extends Component{


    constructor(props){
        super(props)
    }

    render(){
        const {value,onClick,className}=this.props;
        return(
            <a href="#" className="bt" onClick={onClick}>{value}</a>
        );
    }
}

export {Button};
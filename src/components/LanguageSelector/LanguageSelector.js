import React, {Component} from "react";
import {styles} from "../LanguageSelector/LanguageSelector.css";

class LanguageSelector extends Component{

    render(){
            const {children,...props}=this.props;
        return(
            <section className="lang__container">
                <div className="container">
                    <div className="row">
                        {children}
                    </div>
                </div>
            </section>
        );
    }
}

export {LanguageSelector};
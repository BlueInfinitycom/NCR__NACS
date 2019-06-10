import React, {Component} from "react";
import {LanguageSelector} from "../../components/LanguageSelector/LanguageSelector";
import {data,bgImg} from "./data";
import "./intro.css";

export default class Intro extends Component{
    constructor(props){
        super(props);
    }

    languageSelectorClick(e){
        e.preventDefault;
        const _target=e.currentTarget;
        const _lang=_target.getAttribute("id");
        this.props.onSelectLanguage(_lang);
    }

    backBtClick(){
        this.props.btBackClick();
    }

    render(){

            const langData=data.map((item,index)=>
                <li key={index}>
                    <a id={item.lang} href="#" onClick={this.languageSelectorClick.bind(this)}>
                        <img src={item.imgUrl} className="img-responsive img--center" /><br/>
                        <span><strong>{item.lang}</strong></span>
                    </a>
                </li>
            )
            

        return(
            <section className="intro__page" style={{height:window.innerHeight}}>
                <div className="container">
                    <div className="row">
                        <LanguageSelector>
                            <ul>
                                {langData}
                            </ul>
                        </LanguageSelector>
                    </div>
                </div>
            </section>
        );
    }
}
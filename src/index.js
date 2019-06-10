/* application settings */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

/* import reducers */

import {cashierReducer} from "./actions/ActionsCashier";


/* application content */
import Intro from "./widgets/Intro/Intro";
import FoodConfigurator from "./widgets/FoodConfigurator/FoodConfigurator";

/* import custom global styles CSS */
import "./custom.css";

var _app=document.getElementById("app");
var trace=console.log.bind(this);

const store=createStore(cashierReducer);

class NACSApp extends Component{

    constructor(props){
        super(props);
        this.state={view:'intro',lang:undefined};
    }

    selectLanguage(e){
        this.setState({view:"foodConfigurator",lang:e});
    }

    selectView(){
        let viewerContainer;

        switch(this.state.view){
            case "intro" : return viewerContainer= <Intro onSelectLanguage={this.selectLanguage.bind(this)} />;
            case "foodConfigurator" : return viewerContainer= <FoodConfigurator store={this.props.store} />;
            default : return viewerContainer= <Intro onSelectLanguage={this.selectLanguage.bind(this)} lang={intro_data} />;
        }
    }

    onClickBackBt(e){
        this.setState({view:"intro",lang:undefined});
    }

    render(){
        const {...props}=this.props;
    return(
            <section className="app_container" style={{height:window.innerHeight}}>
               <div className="container-fluid">
                    <div className="row"> 
                        {this.selectView()}
                    </div>
                </div>
            </section>
        );
    }
}

const render=()=>{
    ReactDOM.render(<Router><NACSApp store={store} /></Router>,_app);
}

store.subscribe(render);
render();
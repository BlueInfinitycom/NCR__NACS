import React, {Component} from 'react';
import {Button} from "../../components/Button/Button";
import Cashier from "../Cashier/Cashier";
import ContentSelector from "../ContentSelector/ContentSelector";

export default class FoodConfigurator extends Component{

    constructor(props){
        super(props);
        console.log("STORE: ",props);
    }

    backBtClick(){
        // this.props.btBackClick();
        console.log("KLIK: back");
    }

    showOrder(){

    }

    voidOrder(){

    }

    completeOrder(){

    }

    render(){
            const {store,...props}=this.props;
        return(
            <section className="food_configurator">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-sm-3">
                            <Cashier store={store} />
                        </div>
                        <div className="col-sm-9">
                            <ContentSelector store={store} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-4"><Button value="SHOW MY ORDER" onClick={this.showOrder.bind(this)} /></div>
                        <div className="col-sm-4"><Button value="VOID ORDER" onClick={this.voidOrder.bind(this)} /></div>
                        <div className="col-sm-4"><Button value="COMPLETE ORDER" onClick={this.completeOrder.bind(this)} /></div>
                    </div>
                </div>
            </section>            
        );
    }
}
import React, {Component} from "react";
import "./Cashier.css";
import {Button} from "../../components/Button/Button";

export default class Cashier extends Component {
    constructor(props){
        super(props)
    }

    addItem(data){
            console.log("DATA: ",data.name);
        return(<div className="added_item">
        <span>{data.name}</span><span>{data.price}</span><Button className="bt__erase" value="X" onClick={()=>console.log("smazat")} />
    </div>);
    }

    removeItem(){

    }



    render(){
            const {store,...props}=this.props;
        const res=this.addItem(store.getState());
        console.log(res);

        return(
            <section className="cashier__container text-center" style={{height:window.innerHeight}}>
                <div className="row ">
                    <h1>Cashier</h1>
                </div>
                <div className="row">
                    {res}
                </div>
            </section>
        );
    }
}
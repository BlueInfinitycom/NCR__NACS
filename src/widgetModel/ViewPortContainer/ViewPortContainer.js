import React, {Component} from  "React";
import {ViewPort} from "../ViewPort/ViewPort";


export default class ViewPortContainer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {children}=this.props;
        return(

            <section>
               <div className="container">
               <ViewPort>
                   {children}
               </ViewPort>
               </div>
            </section>

            /*
            <section>
               <div className="container">
                   {this.state.btBackVisibility ? 
                     <div className="row">
                        <BackToSelectLanguage onClickBt={this.onClickBackBt.bind(this)} show={this.state.btBackVisibility} />
                    </div>  : null
                }
                    <div className="row"> 
                        {this.selectView()}
                    </div>
                </div>
            </section>
            */
        );
    }
}
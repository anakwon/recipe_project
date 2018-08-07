import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props){
        super(props);


    }


    addRow(){
        return(
            <div className="row">
                <label>Ingredient : </label>
                <input />
            </div>
        )
    }
    render(){
        return(
            <form>            
                {this.addRow()}
                {this.addRow()}
                {this.addRow()}
					 <div className="container">
						<div className="row">
							<div className="col s6 offset-s6 right-align">
								<div className="btn-floating btn-large waves-effect waves-light red" >
                               <i className="material-icons" onClick={this.addRow.bind(this)}>add</i>
								</div>
							</div>
						</div>
					 </div>
					 <div className="container">
                        <div className="row">
                            <div className="col s12 offset-s4">
					            <button className="waves-effect waves-light btn-large">Search</button>
                            </div>
                        </div>
                     </div>
            </form>
        );
    }
}

export default AddItem;
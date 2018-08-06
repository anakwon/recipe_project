import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';

class AddItem extends Component {
    render(){
        return(
            <form>
                <div className="container">
                    <div className="row">
                        <label>Ingredient 1 : </label>
                        <input />
                    </div>
                </div>
					 <div className="container">
                    <div className="row">
                        <label>Ingredient 2 : </label>
                        <input />
                    </div>
                </div>
					 <div className="container">
                    <div className="row">
                        <label>Ingredient 3 : </label>
                        <input />
                    </div>
                </div>
					 <div className="container">
                    <div className="row">
                        <label>Ingredient 4 : </label>
                        <input />
                    </div>
                </div>
					 <div className="container">
						<div className="row">
							<div className="col s6 offset-s6 right-align">
								<div className="btn-floating btn-large waves-effect waves-light red">
								<i className="material-icons">add</i>
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
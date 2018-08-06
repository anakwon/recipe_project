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
					 	<div className="s10 btn-floating btn-large waves-effect waves-light red">
						 <i className="material-icons">add</i>
						 </div>
					 </div>
					 <button>Search</button>
            </form>
        );
    }
}

export default AddItem;
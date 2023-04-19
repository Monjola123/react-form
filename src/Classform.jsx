import React, { Component } from "react";

export class Classform extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			pword: "",
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const pword = e.target.password.value;

		this.setState({
			name,
			email,
			pword,
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
                <h1> CLASSFORM </h1>
    <label>
    Name:
    </label><br/>                    
	<input type="text" name="name" placeholder="Name" /><br/>
    <label>
    Email:
    </label><br/>
	<input type="email" name="email" placeholder="email" /><br/>
    <label>
    Password:
    </label><br/>
    <input type="password" name="password" placeholder="password" /><br/>
					<button input type="submit"> SUBMIT</button> 
				</form>

				<h1>{this.state.name}</h1>
				<h1>{this.state.email}</h1>
				<h1>{this.state.pword}</h1>
			</div>
		);
	}
}

export default Classform;
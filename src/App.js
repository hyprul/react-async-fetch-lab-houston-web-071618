// create your App component here
import React, { Component } from 'react';
import Greeting from './components/Greeting.js';
import Button from './components/Button.js';


export default class App extends Component {

	state = {
		peopleInSpace: []
	}

	componentDidMount() {
		fetch('http://api.open-notify.org/astros.json')
			.then(response => response.json())
			.then(data => {
				this.setState({
					peopleInSpace: data.people
				})
			})
	};

	render() {

		return (
			<div>
				< Greeting />
				< Button />
			</div>
		)
	}
}
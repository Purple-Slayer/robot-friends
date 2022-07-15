import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';




class App extends Component {
	constructor() {
	  super()
		this.state = {
          robots: [],
	      searchfield: ' '
	    }
	}

    componentDidMount(){
    	fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    }

     onSearchChange = (event) => {
     	this.setState({ searchfield: event.target.value })
     	const filteredRobots = this.state.robots.filter(robots => {
     		return  robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
     	});
     	console.log(filteredRobots);
     }


	render() {
		const { robots, searchfield } = this.state;
	const filteredRobots = robots.filter(robots => {
       return  robots.name.toLowerCase().includes(searchfield.toLowerCase());
     	})
	return robots.lenght ? 
		<h1> LOADİNG . . . </h1> :
	 (
	
		<div className="tc">
		      <h1 className="f1"> Robo Friends </h1>
		      <SearchBox searchChange={this.onSearchChange} />
		     <Scroll>
               <CardList robots={ filteredRobots } />
             </Scroll>
        </div>
		);
    
   }
}

export default App;
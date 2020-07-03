import React,{Component} from 'react';

class Button extends Component{
	constructor(){
		super();
		this.state={
			width:'0px'
		};
	}
	openNav = () =>{
		this.setState({width:'15%'});
	}	
		
	closeNav = () =>{
		console.log("close");
		this.setState({width:'0%'});
	}

	
	render(){
		const w=this.state.width;
		const mystyle={
			width:w
		};
		return(
			<div>
				<div id="myNav" style={mystyle} className="overlay">
				  <a href="#" className="closebtn" onClick={()=>this.closeNav()}>&times;</a>
				  <div className="overlay-content">
				  <a href="#">About</a>
		     		  <a href="#">Services</a>
				  <a href="#">Clients</a>
			    	  <a href="#">Contact</a>
			  	</div>
				</div>
				<span className="hamb" onClick={()=>this.openNav()}>&#9776; </span>
			</div>
		);
	}
}
export default Button;


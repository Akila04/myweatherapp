import React,{Component} from 'react';

class DateAndPlace extends Component{
		
	getdate = (date) =>{

		if(date != ''){
			const timezone1=new Date(parseInt(date) * 1000).toString();
			const d=timezone1.substring(0,16);
			return <p className="date">{d}</p>
		}
		else{
			return <p></p>
		}
	}

	getplace = (city,country) =>{
		if(city != ''){
			return <p className="place">{city} , {country}</p> 
		}
		else{
			return <p></p>
		}
	}

	render(){
		return(
			<div>
			{this.getplace(this.props.city,this.props.country)}
			{this.getdate(this.props.date)}			
			</div>
		);
	}
}
export default DateAndPlace;

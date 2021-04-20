import React,{Component} from 'react';
import { WiHumidity} from "weather-icons-react";
import { WiDayWindy} from "weather-icons-react";



class WindAndHumidity extends Component{

	getwind = (wind) =>{
		if(wind !==''){
			return <div className="humidity"> Wind <WiDayWindy size={50} /><p>{wind} mph</p></div>	
		}
		else{
			return <div></div>
		}
	}

	gethumidity = (humidity) =>{
		if(humidity !== ''){
			return <div className="humidity"> Humidity <WiHumidity size={50} /><p>{humidity} mph</p></div>
		}
		else{
			return <div></div>
		}

	}
	render(){
		return(
			<div>
			{this.getwind(this.props.wind)}
			{this.gethumidity(this.props.humidity)}
			</div>
		
		);
	}
}
export default WindAndHumidity;

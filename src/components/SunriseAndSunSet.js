import React,{Component} from 'react'
import { WiSunrise} from "weather-icons-react";
import { WiSunset} from "weather-icons-react";


class SunriseAndSunSet extends Component{

	constructor(props){
		super(props);
		this.state={
			rise:'',
			set:''
		};
	}
	gettime = () =>{
		const sunrise=this.props.sunrise;
		const sunset=this.props.sunset;
		if(sunrise != ''){
			const timezone1=new Date(parseInt(sunrise) * 1000).toString();
			const timezone2=new Date(parseInt(sunset) * 1000).toString();
			const sunrisetime=timezone1.substring(16,21);
			const sunsettime=timezone2.substring(16,21);
			return(
				<div>
				<div className="sun">Sunrise <WiSunrise size={50} /><p>{sunrisetime}</p></div>
				<div className="sun">Sunset <WiSunrise size={50} /><p>{sunsettime}</p></div>
	
				</div>
			);
		}
		else{
			return <div></div>
		}
	}	

	render(){
		return(
			<div>
			{this.gettime()}
			</div>
		);
	}
}

export default SunriseAndSunSet;

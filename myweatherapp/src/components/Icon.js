import React,{Component} from 'react';

import { WiCloudy} from "weather-icons-react";
import { WiRain} from "weather-icons-react";
import { WiNightClear} from "weather-icons-react";
import { WiDayHaze } from "weather-icons-react";
import { WiSprinkle} from "weather-icons-react";
import { WiFog} from "weather-icons-react";
import { WiDayCloudyGusts} from "weather-icons-react";
import { WiThunderstorm} from "weather-icons-react";


class Icon extends Component{
	
	getweather = (des)=>{
		switch(des){
			case "Clouds":
				return <WiCloudy size={200} />
			case "Mist":
				return <WiFog size={200} />
			case "Drizzle":
				return <WiSprinkle size={200} />
			case "Haze":
				return <WiDayHaze size={200} />
			case "Clear":
				return <WiNightClear size={200} />
			case "Rain":
				return <WiRain size={200} />
			case "Thunderstorm":
				return <WiThunderstorm size={200} />
			case "":
				return <p></p>
			default :
				return <WiDayCloudyGusts size={200} />
		}

	}

	gettemp = (temp) =>{
		if(temp!=''){
			const t=Math.floor(temp - 273.15);
			console.log(t);
			return <p className="weathertemp">{t}&deg;C</p>
		}
		else{
			return <p></p>
		}
	}

	render(){
		return(
			<div className="weathericons">
			{this.getweather(this.props.icon)}
			{this.gettemp(this.props.temp)}

			<p className="description">{this.props.icon}</p>

			</div>
		);
	}
}

export default Icon;

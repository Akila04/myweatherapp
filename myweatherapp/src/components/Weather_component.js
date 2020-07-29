import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Button'
import Icon from './Icon'
import SunriseAndSunSet from './SunriseAndSunSet'
import WindAndHumidity from './WindAndHumidity'
import DateAndPlace from './DateAndPlace'

import { WiNightAltCloudyGusts} from "weather-icons-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
//const axios=require('axios');

class Weather_component extends Component{
	constructor(){
		super();
		this.autocompleteInput = React.createRef();
		this.autocomplete = null;
		this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
		this.state={
			temp: '',
			city:'',
			description:'',
			country:'',
			error:'',
			date:'',
			icon:'',
			sunrise:'',
			sunset:'',
			wind:'',
			humidity:''
		};
	}

		
	setweather = (response) =>{
		console.log(response);
		this.setState({
			temp:response.data.main.temp,
			city:response.data.name,
			description:response.data.weather[0].main,
			country:response.data.sys.country,
			error:'',
			date:response.data.dt,
			icon:response.data.weather[0].main,
			sunrise:response.data.sys.sunrise,
			sunset:response.data.sys.sunset,
			wind:response.data.wind.speed,
			humidity:response.data.main.humidity

		});
	}
	
	seterror = (city) =>{
		this.setState({
			temp:'',
			city:'',
			country:'',
			description:'',
			date:'',
			icon:'',
			sunrise:'',
			sunset:'',
			wind:'',
			humidity:'',
			error:<p className="error">
				<FontAwesomeIcon icon={faFrown} /> Sorry,the specified city was not found.</p>
		});
	}
	
	getweather = (name) =>{	
		const city=name;
		if(city === ''){
			this.setState({error:''});
			return;
		}
		const Apikey="44f2e0222cafae724c2b6a53cacee4b3";
		axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + Apikey)
			.then(response => {this.setweather(response)})
			.catch(error =>{this.seterror(city)})
	}
	
	/*componentDidMount() {
		const google = window.google;
		const ele=this.autocompleteInput.current;
		this.autocomplete = new google.maps.places.Autocomplete(ele,{types: ['geocode']});
		this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
	 }*/
	handlePlaceChanged(){
		//console.log(document.getElementById('cityname').value);
		//const place = this.autocomplete.getPlace();
		//this.getweather(place.name);
		const cityname=document.getElementById('cityname').value;
		this.getweather(cityname);
	}
		
	 	
	
	render(){		
	return(	
		<div>
		    <div className="header">
			<WiNightAltCloudyGusts size={70}   />
			 &nbsp;&nbsp;Weather App	
		    </div>
		    <div className="inputcontainer" name="inputdivision">
			<i className="glyphicon glyphicon-search searchicon icon"></i>
			<input className="inputfield" onChange={this.handlePlaceChanged}
				 type='text' id="cityname" placeholder="Enter City" />
		    </div>
		    <div className="weathercontent">
			{this.state.error}
			<DateAndPlace date={this.state.date} city={this.state.city} country={this.state.country}/>
			<div className="row">
			<div className="col-sm-4">
				<Icon icon={this.state.icon} temp={this.state.temp} />
			</div>
			<div className="col-sm-4">
				<SunriseAndSunSet sunrise={this.state.sunrise} sunset={this.state.sunset} />	
			</div>
			<div className="col-sm-4">
				<WindAndHumidity wind={this.state.wind} humidity={this.state.humidity} />
			</div>
			</div>
		    </div>
		</div>

	);
	}	
}
export default Weather_component;

/*
<input className="inputfield" 
				ref={this.autocompleteInput} type='text' id="autocomplete" placeholder="Enter City" />
 */






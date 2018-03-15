import axios from 'axios';

//From Open Weather Map
const API_KEY = "e47d2b1df81aa81a3462c72e60a28d15";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FECTH_WEATHER = 'FECTH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},do`;
	const request = axios.get(url);

	return {
		type: FECTH_WEATHER,
		payload: request
	};
}
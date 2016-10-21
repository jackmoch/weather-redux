import axios from 'axios'

const API_KEY = '8979670765e2d45cd0fc9052bf3f35ee'

export const FETCH_WEATHER = 'FETCH_WEATHER'
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`
	const request = axios.get(url)

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}
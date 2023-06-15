import axios from '@/plugins/axios'

export function getAbout() {
	// return axios.get("http://13.209.11.180:8090/about")
	return axios({
		url: 'about',
		method: 'GET'
	})
}
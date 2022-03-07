import axios from 'axios'

const HttpInstance = axios.create({
	baseURL: 'https://pp-api-desafio.herokuapp.com',
	timeout: 1000,
	// headers: { 'X-Custom-Header': 'foobar' }
})

export default HttpInstance

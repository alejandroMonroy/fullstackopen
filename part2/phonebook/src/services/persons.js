import axios from "axios"

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl).then(response => response.data).catch(() => alert(''))

const create = newPerson => axios.post(baseUrl, newPerson).then(response => response.data).catch(() => alert(''))

export default { getAll, create }
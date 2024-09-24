import axios from "axios"

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl).then(response => response.data).catch(() => alert(''))

const create = newPerson => axios.post(baseUrl, newPerson).then(response => response.data).catch(() => alert(''))

const deletePerson = person => axios.delete(`${baseUrl}/${person.id}`).then(response => response.data).catch((error) => alert(error))

const updatePerson = person => axios.put(`${baseUrl}/${person.id}`, person).then(response => response.data).catch((error) => alert(error))

export default { getAll, create, deletePerson, updatePerson }
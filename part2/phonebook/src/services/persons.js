import axios from "axios"

const baseUrl = 'https://fullstackopen-r6ys.onrender.com/api/persons'

const getAll = () => axios.get(baseUrl).then(response => response.data)

const create = newPerson => axios.post(baseUrl, newPerson).then(response => response.data)

const deletePerson = person => axios.delete(`${baseUrl}/${person.id}`).then(response => response.data)

const updatePerson = person => axios.put(`${baseUrl}/${person.id}`, person).then(response => response.data)

export default { getAll, create, deletePerson, updatePerson }
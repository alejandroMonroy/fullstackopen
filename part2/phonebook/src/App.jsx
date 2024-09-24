import { useEffect, useState } from 'react'

import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personsService from './services/persons.js'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(allPersons => {
        setPersons(allPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const searchedPerson = persons.find(person => person.name == newName)
    if (searchedPerson === undefined) {      
      const newPerson = {name: newName, number: newPhone}
      personsService.create(newPerson).then(newPerson => {
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewPhone('')
      })
    }else{
      if(window.confirm(`${searchedPerson.name} is already added to phonebook, replace the old number with a new one?`)){
        const updatedPerson = {...searchedPerson, number: newPhone}
        personsService.updatePerson(updatedPerson).then(newPerson => {        
          setPersons(persons.map((person) => person.id === newPerson.id ? updatedPerson : person))
        })
      }
      setNewName('')
      setNewPhone('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleDeletePerson = person => {
    if(window.confirm(`Delete ${person.name}?`)){
      personsService.deletePerson(person)
      .then(deletedPerson => {
        setPersons(persons.filter(person => person.id !== deletedPerson.id))
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        value={newFilter}
        onChange={handleFilterChange}
      />
      <h3>add a new</h3>
      <PersonForm
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newPhone={newPhone} 
        handlePhoneChange={handlePhoneChange}
      />
      <h3>Numbers</h3>
      <Persons 
        persons={persons} 
        newFilter={newFilter} 
        onDelete={handleDeletePerson}
      />
    </div>
  )
}

export default App
const express = require('express')
const app = express()
var morgan = require('morgan')
require('dotenv').config()

app.use(express.json())

const cors = require('cors')

app.use(cors())
const Person = require('./models/person')

morgan.token('body', req => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
  .catch(error => next(error))
})

app.get('/api/persons/:id', (request, response, next) => {    
    Person.findById(request.params.id).then(person => {
      if (person) {
        response.json(person)
      } else{
        response.status(404).send()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response) => {
  Person.findByIdAndDelete(request.params.id)
  .then(result => {
    response.status(204).end()
  })
  .catch(error => next(error))
})

app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (!body.name || !body.number) {
      return response.status(400).json({ 
        error: 'name and number are mandatory fields' 
      })
    }

    Person.findOne({ name: new RegExp(`^${body.name}$`, 'i') }).then(person => {
      if (person) {
        person.number = number;
        const updatedPerson = person.save();
        return response.status(200).json(updatedPerson);
      } else {
        const newPerson = new Person ({
          name: body.name,
          number: body.number,
        })
      
        newPerson.save().then(savedPerson => {
          response.status(201).json(savedPerson)
        })      
      }
    })
    .catch(error => next(error))
  
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

app.use(errorHandler)
  
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
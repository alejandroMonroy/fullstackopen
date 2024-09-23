import Person from './Person'

const Persons = (props) => {
    return (
        <ul>
        {props.persons.filter((person) => person.name.toLowerCase().includes(props.newFilter.toLowerCase())).map((person) => <li key={person.id}><Person name={person.name} number={person.number}/></li>)}
      </ul>
    )
}

export default Persons
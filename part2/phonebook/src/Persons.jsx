import Person from './Person'

const Persons = ({persons, newFilter, onDelete}) => {
    return (
      <ul>
        {persons
        .filter((person) => 
          person.name.toLowerCase().includes(newFilter.toLowerCase()))
          .map((person) => 
            <li key={person.id}>
              <Person name={person.name} number={person.number} onDelete={()=>onDelete(person)}/>
            </li>
          )
        }
      </ul>
    )
}

export default Persons
import React, { useState, FormEvent } from 'react'

const App = () => {

  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-1234567' }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  function addName(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const names = persons.map(person => person.name)
    if (!names.includes(newName)) {
      names.push(newName)
      setPersons([...persons, { name: newName, number: newNumber }])
    } else {
      window.alert(`${newName} is already added to phonebook`)
    }
  }


  function handleNameChange(event: { target: HTMLInputElement }) {
    setNewName(event.target.value)
  }

  function handleNumberChange(event: { target: HTMLInputElement }) {
    setNewNumber(event.target.value)
  }

  function handleFilterChange(event: { target: HTMLInputElement }) {
    setFilter(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input value={filter} onChange={handleFilterChange} /></div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(person => person.name.toLowerCase().includes(filter)).map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App

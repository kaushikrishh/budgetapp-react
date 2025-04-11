import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModelEdit from './components/ModelEdit';


function App() {

  
  const [entries, setEntries] = useState(initialEntries)
  const [description , setDescription] = useState('')
  const [value , setValue] = useState('')
  const [isExpense , setIsExpense] = useState(true) 
  const [open , setOpen] = useState(false)

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id)
    console.log(`entries`, entries);
    console.log('delete result', result);
    setEntries(result)
  }

  function addEntry(description, value , isExpense) {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    })
    console.log(`entries`, entries);
    console.log('add result', result);
    setEntries(result)

  }


  return (
    <>
      <Container>
        <MainHeader title='Budget App' />

        <DisplayBalance title="Your Balance" value="2500.50" size="small" />

        <DisplayBalances />

        <MainHeader title='History' type="h3" />

        <EntryLines entries={entries} deleteEntry={deleteEntry} setOpen = {setOpen}/>

        <MainHeader title="Add new Transactions" type="h3"></MainHeader>
        <NewEntryForm 
          addEntry={addEntry} 
          description = {description}
          value = {value}
          isExpense = {isExpense}
          setDescription={setDescription}
          setValue = {setValue}
          setIsExpense = {setIsExpense}
        
        
        />
        <ModelEdit setOpen = {open} />

      </Container>
    </>
  );
}

export default App

var initialEntries = [
  {
    id: 0,
    description: "Work Income",
    value: "$1000.00",
    isExpense: false
  },
  {
    id: 1,
    description: "Water Bill",
    value: "$20.00",
    isExpense: true
  },
  {
    id: 2,
    description: "Rent",
    value: "$300.00",
    isExpense: true
  },
  {
    id: 3,
    description: "Electricity Bill",
    value: "$50.00",
    isExpense: true
  }

]

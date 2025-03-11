import { Container } from 'semantic-ui-react'
import './App.css'
import MainHeader from './components/MainHeader'
import DisplayBalance from './components/DisplayBalance'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalances from './components/DisplayBalances'
import EntryLine from './components/EntryLine'


function App() {


  return (
    <>
      <Container>
        <MainHeader title='Budget App' />

        <DisplayBalance title="Your Balance" value="2500.50" size="small" />
        
        <DisplayBalances />

        <MainHeader title='History' type="h3" />
        <EntryLine desc="income" value="$10.00" />
        <EntryLine desc="income" value="$20.00" />
        <EntryLine desc="expense" value="$20.00" isExpense/>

        <MainHeader title="Add new Transactions" type="h3"></MainHeader>
        <NewEntryForm />

      </Container>
    </>
  )
}

export default App

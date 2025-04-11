import React from 'react'
import { Form } from 'semantic-ui-react'
import BottonSaveOrCancel from './BottonSaveOrCancel'
import EntryForm from './EntryForm';


function NewEntryForm({addEntry, description,value,isExpense,setDescription,setIsExpense,setValue}) {

  
   return (
    <Form unstackable>
      <EntryForm 
        description = {description}
        value = {value}
        isExpense = {isExpense}
        setDescription={setDescription}
        setValue = {setValue}
        setIsExpense = {setIsExpense}
        
        />

      <BottonSaveOrCancel
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
      />
    </Form>
  )
}

export default NewEntryForm
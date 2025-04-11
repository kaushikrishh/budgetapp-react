import {Modal, Button} from 'semantic-ui-react';
import NewEntryForm from './NewEntryForm'


import React from 'react'

function ModelEdit({isOpen , setIsOpen}) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <NewEntryForm/>
      </Modal.Content>

      <Modal.Actions>
        <Button onClick ={()=>setIsOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>

  )
  
}
export default ModelEdit
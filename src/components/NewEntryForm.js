import React from 'react'
import { Form } from 'semantic-ui-react'
import BottonSaveOrCancel from './BottonSaveOrCancel'


function NewEntryForm() {
  return (
    <Form unstackable>
          <Form.Group>

            <Form.Input
              icon="tags"
              iconposition="left"
              width={12}
              label="Description"
              placeholder="New shiny things..."
            />

            <Form.Input
              width={4}
              label='Value'
              placeholder='99.00'
              icon='dollar'

            />
          </Form.Group>

         <BottonSaveOrCancel/>
        </Form>
  )
}

export default NewEntryForm
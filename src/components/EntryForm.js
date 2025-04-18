import React, { Fragment } from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

function EntryForm({
    description,value,isExpense,setDescription,setIsExpense,setValue
}) {
    return (
        <Fragment>
            <Form.Group>

                <Form.Input
                    icon="tags"
                    iconposition="left"
                    width={12}
                    label="Description"
                    placeholder="New shiny things..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <Form.Input
                    width={4}
                    label='Value'
                    placeholder='99.00'
                    icon='dollar'
                    iconPosition='left'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}

                />
            </Form.Group>

            <Segment compact>
                <Checkbox
                    toggle
                    label='is Expense'
                    checked={isExpense}
                    onChange={() => setIsExpense((oldState) => !oldState)}


                />

            </Segment>
        </Fragment>
    )
}

export default EntryForm
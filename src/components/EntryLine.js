import React from 'react'
import { Segment, Grid, Icon } from 'semantic-ui-react'

function EntryLine({desc, value, isExpense=false}) {
  return (
    <Segment color={isExpense?'red':'green'}>
          <Grid columns={3} textAlign='right'>
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'> {desc}</Grid.Column>
              <Grid.Column width={3} textAlign='right'>{value}</Grid.Column>
              <Grid.Column width={3}>
                <Icon name='edit' />
                <Icon name='trash' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
  )
}

export default EntryLine
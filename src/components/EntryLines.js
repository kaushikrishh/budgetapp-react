import React from 'react'
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';

function EntryLines({ entries , deleteEntry , setOpen}) {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine
          key={entry.id} {...entry} deleteEntry={deleteEntry} setOpen = {setOpen}
          
          // desc={entry.description}
          // value={entry.value}
          // isExpense={entry.isExpense}
        />
      ))}
    </Container>
  )
}

export default EntryLines
import React from 'react'
import { Button } from 'semantic-ui-react'

function BottonSaveOrCancel({addEntry , description , value , isExpense}) {
  return (
  //   <Button.Group>
  //   <Button>Cancel</Button>
  //   <Button.Or></Button.Or>
  //   <Button primary>OK</Button>
  // </Button.Group>
  <div className="ui buttons">
  <button className="ui button">Cancel</button>
  <div className="or"></div>
  <button className="ui positive button" onClick = {()=>addEntry(description , value ,isExpense)}>OK</button>
</div>
    
  )
}

export default BottonSaveOrCancel
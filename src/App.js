import { Container, Header, Statistic, Segment, Grid, Icon, Form, Button } from 'semantic-ui-react'
import './App.css'

function App() {


  return (
    <>
      <Container>
        <Header as='h1'>Budget</Header>
        <Statistic size='small'>
          <Statistic.Label>Your Balance: </Statistic.Label>
          <Statistic.Value>2,420.78</Statistic.Value>
        </Statistic>

        <Segment textAlign="center">
          <Grid columns={2} divided >
            <Grid.Row>
              <Grid.Column>
                <Statistic size="tiny" color="green">
                  <Statistic.Label style={{ textAlign: "left" }}>
                    Incoming:
                  </Statistic.Label>
                  <Statistic.Value>1,045.00</Statistic.Value>
                </Statistic>
              </Grid.Column>

              <Grid.Column>
                <Statistic size="tiny" color="red">
                  <Statistic.Label style={{ textAlign: "left" }}>
                    Expenses:
                  </Statistic.Label>
                  <Statistic.Value>625.50</Statistic.Value>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Header as='h3'>History</Header>

        <Segment color='red'>
          <Grid columns={3} textAlign='right'>
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'> Something</Grid.Column>
              <Grid.Column width={3} textAlign='right'>$20</Grid.Column>
              <Grid.Column width={3}>
                <Icon name='edit' />
                <Icon name='trash' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment color='green'>
          <Grid columns={3} textAlign='right'>
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'> Something else...</Grid.Column>
              <Grid.Column width={3} textAlign='right'>$13</Grid.Column>
              <Grid.Column width={3}>
                <Icon name='edit' />
                <Icon name='trash' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Header as='h3'>Add new Transactions</Header>
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

          <Button.Group>
          <Button>Cancel</Button>
          <Button.Or></Button.Or>
          <Button primary>OK</Button>
        </Button.Group>
        </Form>

      </Container>



    </>
  )
}

export default App

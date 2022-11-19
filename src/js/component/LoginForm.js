import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export default function LoginForm() {
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src={rigoImage} /> Inicia sesión con tu cuenta
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Contraseña'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Iniciar Sesión
          </Button>
        </Segment>
      </Form>
      <Message>
        ¿Eres nuevo por aquí? <Link to='/signup'>Regístrate</Link>
      </Message>
    </Grid.Column>
  </Grid>
  )
}

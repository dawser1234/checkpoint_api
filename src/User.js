import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function User({props}) {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    
    <Card.Body>
      <Card.Title>{props.id}</Card.Title>
      <Card.Text>
       {props.name}
      </Card.Text>
      <Card.Text>
      {props.phone}
     </Card.Text>
     <Card.Text>
     {props.website}
    </Card.Text>
    <Card.Text>
    {props.email}
   </Card.Text>

      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>

    </div>
  )
}

export default User
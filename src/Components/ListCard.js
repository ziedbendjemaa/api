import React from 'react'
import { Card ,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'


const ListCard = ({users}) => {
    
    return (
       
           <Card  style={{ width: '18rem', color:"black" }} className=" m-3">
  <avatar >{users.name[0]}</avatar>
  <Card.Body>
    <Card.Title>{users.name}</Card.Title>
    <Card.Text>
    {users.username}
    </Card.Text>
    <h5>{users.email}</h5>
    <Link to={`/info/${users.id}`}>
    <Button variant="primary">info</Button>
    </Link>
  </Card.Body>
</Card>
      
    )
}

export default ListCard

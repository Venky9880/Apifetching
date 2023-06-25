import Card from 'react-bootstrap/Card';

function BasicExample({id,image}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <img src={image} alt="" />
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Text>
          {id}
        </Card.Text>
       
      </Card.Body>
    </Card>
  )
}
export default BasicExample;
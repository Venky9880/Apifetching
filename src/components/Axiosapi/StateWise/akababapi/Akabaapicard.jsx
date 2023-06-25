import Card from 'react-bootstrap/Card';

function Akabaapicard(id,name) {
  return (
    <Card className="text-center">
      <Card.Header>{id}</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <img src="" alt="" />
        
      </Card.Body>
     
    </Card>
  );
}

export default Akabaapicard;
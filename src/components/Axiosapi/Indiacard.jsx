import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function WithHeaderExample({title,activecases}) {
  return (
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>
         {activecases}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default WithHeaderExample;
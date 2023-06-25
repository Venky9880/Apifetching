import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HeaderAndFooterExample(props) {
    let {dailyconfirmed,dailydeceased,dailyrecovered,date,dateymd,totalconfirmed,totaldeceased,totalrecovered}=props
  return (
    <Card className="m">
      <Card.Body>
        <Card.Text>dailyconfirmed:{dailyconfirmed}</Card.Text>
        <Card.Text>dailydeceased:{dailydeceased}</Card.Text>
        <Card.Text>dailyrecovered:{dailyrecovered}</Card.Text>
        <Card.Text>date:{date}</Card.Text>
        <Card.Title>dateymd:{dateymd}</Card.Title>
        <Card.Text>totalconfirmed:{totalconfirmed}</Card.Text>
        <Card.Text>totaldeceased:{totaldeceased}</Card.Text>
        <Card.Text>totaldeceased:{totalrecovered}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default HeaderAndFooterExample;
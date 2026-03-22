import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col.js';
function Body({ data }) {
  return (
    <>
      {
        data.map((user) => (
          <Col key={user.id} md="4">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={user.imageUrl} />
              <Card.Body>
                <Card.Title>{user.name} </Card.Title>
                <Card.Text> {user.address} </Card.Text>
                <Card.Text> Price: ₹ {Number(user.price).toLocaleString('en-IN')} /-  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))
      }
    </>
  );
}

export default Body;
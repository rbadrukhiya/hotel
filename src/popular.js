import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Popular() {
    return (
        <>
            <Container className="mb-5 mt-5">
                <Row>
                    <Col className="col-12  text-center display-5 mb-5">
                        <div className="popular_heading">
                            <b>POPULAR DESTINATIONS</b>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="g-5">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top"  src={require("./image/taj.jpg")} />
                    <Card.Body>
                        <Card.Text>
                           
                        </Card.Text>
                    MUMBAI  <Button variant="primary" className="ms-5">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col className="g-5">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require("./image/taj2.jpg")} />
                    <Card.Body>
                        
                        <Card.Text>
                            
                        </Card.Text>
                       JAIPUR <Button variant="primary " className="ms-5">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
                
                <Col className="g-5">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require("./image/taj3.jpg")} />
                    <Card.Body>
                        <Card.Text>
                        
                        </Card.Text>
                     GOA   <Button variant="primary" className="ms-5">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col className="g-5">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top"  src={require("./image/taj4.jpg")} />
                    <Card.Body>
                        <Card.Text>
                           
                        </Card.Text>
                    KOLKATA <Button variant="primary" className="ms-5">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col className="g-5">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require("./image/taj5.jpg")} />
                    <Card.Body>
                        
                        <Card.Text>
                            
                        </Card.Text>
                       LONDON <Button variant="primary " className="ms-5">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
                
                <Col className="g-5">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require("./image/taj6.jpg")} />
                    <Card.Body>
                        <Card.Text>
                        
                        </Card.Text>
                     MALDIVS  <Button variant="primary" className="ms-5">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
                
            </Container>
        </>
    )

}
export default Popular
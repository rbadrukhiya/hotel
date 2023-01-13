import { Button, Col, Container, Row } from "react-bootstrap"


function Fixed()
{
    return(
        <>
            <Container>
                <Row>
                    <Col>
                            <div className="fixed">
                                
                                <img src={require('./image/women.png')} alt="" className="img-fluid"/>
                                <Button className="btn">May I Help You</Button>
                            </div>

                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Fixed
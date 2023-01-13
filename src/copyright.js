import { Container, Row , Col} from "react-bootstrap"

function Copy()
{
    return(
        <>
        <div className="copyright">
            <Container>
                <Row>
                    <Col className='col-12 text-center'>
                        <a href="#">
                    <i class="fa-solid fa-copyright"></i> 2022 Badrukhiya Ravi All Rights Reserved
                    </a>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}
export default Copy
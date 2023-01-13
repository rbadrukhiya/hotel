import { Col, Container, Row } from "react-bootstrap"

function Happy() {
    return (
        <>
            <div className="happy  d-none d-sm-block">
                <Container>
                    <Row className=" d-flex justify-content-between align-items-center"  >
                        <Col className="col-auto text-center">
                            <div className="p-box-1">
                                <div className="p-icon text-center mb-4">
                                    <i class="fa-solid fa-person "></i></div>
                                <div className="p-content text-center">
                                    happy client
                                </div>
                            </div>
                        </Col>
                        <Col className="col-auto text-center">
                            <div className="p-box-2">
                                 <div className="p-icon text-center mb-4">
                                    <i class="fa-solid fa-person "></i></div>
                                <div className="p-content text-center">
                                    happy client
                                </div>
                            </div>
                        </Col>
                        <Col className="col-auto text-center">
                            <div className="p-box-3">
                                 <div className="p-icon text-center mb-4">
                                    <i class="fa-solid fa-person "></i></div>
                                <div className="p-content text-center">
                                    happy client
                                </div>
                            </div>
                        </Col>
                         <Col className="col-auto text-center ">
                            <div className="p-box-4">
                                 <div className="p-icon text-center mb-4">
                                    <i class="fa-solid fa-person "></i></div>
                                <div className="p-content text-center">
                                    happy client
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )

}
export default Happy
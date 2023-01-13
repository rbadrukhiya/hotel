import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Footer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="footer ">

                <Container>
                    <Row className="d-flex justify-content-between">
                        <Col className='d-none d-md-block'>
                            <div className="col-auto ">
                                <div className="f_logo">
                                    <img src={require("./image/download-removebg-preview.png")} className='img-fluid' alt="" />
                                </div>
                                <div className="f_content mt-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, soluta possimus, odio impedit quam itaque ducimus praesentium eius temporibus, illo tempora.
                                    <br></br>
                                    <br></br>
                                    <i class="fa-solid fa-phone pe-1"></i> 123_456_789
                                    <br></br>

                                    <i class="fa-regular fa-envelope pe-1"></i> royalrich@gmail.com<br></br>

                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="col-auto ">
                                <div className="footer_qheading">
                                    <b>QUICK  LINKS</b>
                                </div>
                                <div className="footer_qcontent mt-4">
                                    <a href="#">Events</a><br></br>
                                    <a href="#">Contact</a><br></br>
                                    <a href="#">Mentos</a><br></br>
                                    <a href="#">Galleries</a><br></br>
                                    <a href="#">Write For Us</a><br></br>
                                    <a href="#">Terms And Conditions</a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <Row>

                                <div className="col-auto ps-2">
                                    <div className="footer_contact ">
                                        <h5 className="f-l">Contact Us</h5>
                                    </div>
                                    <div className="footer_contact_info mt-4 d-flex">
                                        <i class="fa-brands fa-facebook  border border-1 p-1"></i>
                                        <i class="fa-brands fa-twitter  border border-1 p-1 ms-2"></i>
                                        <i class="fa-brands fa-youtube border border-1 ms-2 p-1"></i>
                                        <i class="fa-brands fa-instagram border border-1 ms-1 p-1"></i>
                                        <i class="fa-brands fa-linkedin border border-1 ms-1 p-1"></i>


                                    </div>
                                    <Button variant="primary" className="f-button  mt-3  " onClick={handleShow}>
                                        Contact Us
                                    </Button>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Contact Us</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="name@email.com"
                                                        autoFocus
                                                    />
                                                </Form.Group>
                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="exampleForm.ControlTextarea1"
                                                >
                                                    <Form.Label>About Us</Form.Label>
                                                    <Form.Control as="textarea" rows={3} />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>

                                            <Button variant="primary" onClick={handleClose}>
                                                Submit
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>

                                </div>

                            </Row>
                            <Row>
                                <div className="col-auto">
                                    <h5 className="mt-3 f-l">Online Payments</h5>
                                    <i class="fa-brands fa-amazon-pay border border-1 p-1"></i>
                                    <i class="fa-brands fa-google-pay border border-1 p-1 ms-2 "></i>
                                    <i class="fa-brands fa-paypal border border-1 p-1 ms-2"></i>
                                </div>
                            </Row>

                        </Col>
                    </Row>

                </Container>
            </div>

        </>

    )
}
export default Footer
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Dropdown from 'react-bootstrap/Dropdown';


function Gallery() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* address section start */}
      <div className="address_section p-2">

        <div className="container">
          <div className="row   justify-content-between">


            <div className="col-auto d-none d-md-block "><div className="email">
              <a href="#">royalrich@gmail.com</a>
            </div>
            </div>
            <div className="col-auto d-none d-lg-block"><div className="a-inquiry"><a href="#">HAVE ANY QUESTION ? + 91 98989 89898</a> </div></div>
            <div className="col-auto ">
              <div className="a-s-icons d-flex list-unstyled">
                <li><a href="#">
                  <i class="fa-brands fa-facebook-f me-3"></i>

                </a></li>
                <li><a href="#">
                  <i class="fa-brands fa-linkedin me-3"></i>

                </a></li>
                <li><a href="#">
                  <i class="fa-brands fa-square-instagram me-3"></i>

                </a></li>
                <li><a href="#">

                  <i class="fa-brands fa-twitter me-3"></i>
                </a></li>
                <li><a href="#">

                  <i class="fa-brands fa-whatsapp me-5"></i>
                </a></li>
                <li><a href="#">
                  <i class="fa-solid fa-right-to-bracket"></i>
                </a></li>
              </div>
            </div>
          </div>
        </div>

        {/* address section end */}
      </div>
      {/* header section start */}

      <div className="container mt-2">
        <header>
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <div className="logo ">
                <img src={require("./image/download.png")} className="img-fluid " alt="" />
              </div>
            </div>
            <div className="col-auto pt-3 d-none d-lg-block">
              <ul className='d-flex list-unstyled main_menu '>
                <li><a href="/home" className='me-5'>HOME</a></li>
                {/* <li><a href="#" className='me-5'>SERVICES <i class="fa-solid fa-angle-up sub_icon"></i> </a>
                   <ul className="submenu">

            <li><a href="#">TIMELESS WEDDING</a></li>
            <li><a href="#">LIFETIMEMEMBERSHIP</a></li>
            <li><a href="#">MEETINGS AND EVENTS</a></li>
            <li><a href="#">TAJ EXPERIANCE GIFT CARD</a></li>
            <li><a href="#">DINING</a></li>
            <li><a href="#">SPA</a></li>
            <li><a href="#">TAXI</a></li>

          </ul> 
                </li> */}
                <li><a href="/gallery" target='_blank' className='me-5'>GALLERY <i class="fa-solid fa-angle-up sub_icon"></i></a>
                  {/* <ul className="submenu">
            <li><a href="#">EVENT</a></li>
            <li><a href="#">FUNCTION</a></li>
          </ul> */}
                </li>
                <li><a href="/about" target='_blank' className='me-5'>ABOUT US <i class="fa-solid fa-angle-up sub_icon"></i> </a>
                  {/* <ul className="submenu">
            <li><a href="#">KNOW US</a></li>
            <li><a href="#">PLACEMENT PARTNERS</a></li>
          </ul> */}
                </li>
                <li><a href="/blog" target='_blank' className="me-5">BLOG <i class="fa-solid fa-angle-up sub_icon"></i></a></li>
                <li><a href="/contact" target='_blank' className='me-5'>CONTACT <i class="fa-solid fa-angle-up sub_icon"></i></a></li>
              </ul>
            </div>
            <div className="col-auto d-lg-none mt-2 ">


<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    <i class="fa-solid fa-bars"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/gallery">Gallery</Dropdown.Item>
    <Dropdown.Item href="/about">About Us</Dropdown.Item>
    <Dropdown.Item href="/blog">Blog</Dropdown.Item>
    <Dropdown.Item href="/contact">Contact</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

</div>
          </div>
        </header>
      </div>
      {/* header section end */}


      {/* component name  section start */}

      <div className="component">
        <div className="container pt-5 pb-5">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-auto pt-4 pb-4 ">
              <div className="component-name">
                <h4>Gallery</h4>
              </div>
            </div>
            <div className="col-auto">
              <div className="component-path">
                <Breadcrumb>
                  <Breadcrumb.Item href="/home " className="component-content"> Home </Breadcrumb.Item>
                  <Breadcrumb.Item href="/gallery" className="component-content">
                    Gallery
                  </Breadcrumb.Item>
                </Breadcrumb>

              </div>
            </div>
          </div>
        </div>
      </div>



<Container>
  <Row className="d-flex justify-content-center align-items-center mb-5 mt-5">
    <Col className="col-12 text-center p-3 g-heading display-5">
    Images Of The Royal Rich Hotel
    </Col>
  </Row>
</Container>


      <Container>
        <Row className="d-flex justify-content-between align-items-center" xl={2} xxl={2} md={1} sm={1} xs={1}>
        <Col className="col-auto p-0 mt-3 ">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/ViewoftheGatewayofIndia-3x2.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" target='_blank'>
        <img src={require('./image/taj-1.jpeg')} className='img-fluid'  alt="" />
        </a>

        </div>
        </Col>
        <Col className="col-auto p-0 mt-3">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Jiva%20Spa%20-%20Couples%20Suite.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" target='_blank'>
        <img src={require('./image/taj-2.jpeg')}  className='img-fluid' alt="" />
        </a>

        </div>
        </Col>
        <Col className="col-auto p-0 mt-3 ">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Harbour%20Bar%203.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" target='_blank'>
        <img src={require('./image/taj-3.jpeg')} className='img-fluid' alt="" />
        </a>

        </div>
        </Col>
        <Col className="col-auto p-0 mt-3">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Harbour%20Bar%201.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" target='_blank'>
        <img src={require('./image/taj-4.jpeg')}className='img-fluid' alt="" />
        </a>

        </div>
        </Col>
        <Col className="col-auto p-0 mt-3">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Jiva%20Spa%20-%20Hammam.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"  target='_blank'>
        <img src={require('./image/taj-5.jpeg')} className='img-fluid' alt="" />
        </a>

        </div>
        </Col>
        <Col className="col-auto p-0 mt-3">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Harbour%20Bar%202.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" target='_blank'>
        <img src={require('./image/taj-6.jpeg')} className='img-fluid' alt="" />
        </a>

        </div>
        </Col>
        <Col className="col-auto p-0 mt-3">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Jiva%20Spa%20-%20Therapy.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" target='_blank'>
        <img src={require('./image/taj-7.jpeg')} className='img-fluid' alt="" />
        </a>

        </div>
        </Col>
        <Col className="col-auto p-0 mt-3">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Jiva%20Spa%20-%20Therapy%201.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" target='_blank'>
        <img src={require('./image/taj-8.jpeg')} className='img-fluid' alt="" />
        </a>

        </div>
        </Col>
        <Col className="col-auto p-0 mt-3">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Jiva%20Spa%20-%20Entrance.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" target='_blank'>
        <img src={require('./image/taj-9.jpeg')} className='img-fluid' alt="" />
        </a>

        </div>
        </Col>
        <Col className="col-auto p-0 mt-3">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Ballroom.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" target={"_blank"}>
        <img src={require('./image/taj-10.jpeg')} className='img-fluid'  alt="" />
        </a>

        </div>
        </Col>
        <Col className="col-auto p-0 mt-3">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Jiva%20Spa%20-%20Reception.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" target={"_blank"}>
        <img src={require('./image/taj-11.jpeg')} className='img-fluid'  alt="" />
        </a>

        </div>
        </Col>
        <Col className="col-auto p-0 mt-3">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Jiva%20Spa%20-%20Amenities%201.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" target={"_blank"}>
        <img src={require('./image/taj-12.jpeg')} className='img-fluid'  alt="" />
        </a>

        </div>
        </Col>
        <Col className="col-auto p-0 mt-3">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Cocktail.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" target={"_blank"}>
        <img src={require('./image/taj-13.jpeg')} className='img-fluid'  alt="" />
        </a>

        </div>
        </Col>
        <Col className="col-auto p-0 mt-3">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Dutch%20Suite%20-%20Bedroom.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" target={"_blank"}>
        <img src={require('./image/taj-14.jpeg')} className='img-fluid'  alt="" />
        </a>

        </div>
        </Col>
        <Col className="col-auto p-0 mt-3">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Coral%20Suite%20-%20Living%20Room.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" target={"_blank"}>
        <img src={require('./image/taj-15.jpeg')}  className='img-fluid' alt="" />
        </a>

        </div>
        </Col>
        <Col className="col-auto p-0 mt-3">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Palace%20Corridor.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" target={"_blank"}>
        <img src={require('./image/taj-16.jpeg')} className='img-fluid' alt="" />
        </a>

        </div>
        </Col>
        <Col className="col-auto p-0 mt-3">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Taj%20Club%20City%20&%20Sea%20View%20Room%20-%20Bathroom.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" target={"_blank"}>
        <img src={require('./image/taj-17.jpeg')} className='img-fluid' alt="" />
        </a>

        </div>
        </Col>
        <Col className="col-auto p-0 mt-3">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Taj%20Club%20City%20View%20Room%20-%20Bedroom.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" target={"_blank"}>
        <img src={require('./image/taj-18.jpeg')} className='img-fluid' alt="" />
        </a>

        </div>
        </Col>
        <Col className="col-auto p-0 mt-3">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Elephanta%20Suite%20-%20Bathroom.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" target={"_blank"}>
        <img src={require('./image/taj-19.jpeg')} className='img-fluid' alt="" />
        </a>

        </div>
        </Col>
        <Col className="col-auto p-0 mt-3">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Dutch%20Suite%20-%20Bathroom.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" target={"_blank"}>
        <img src={require('./image/taj-20.jpeg')} className='img-fluid'  alt="" />
        </a>

        </div>
        </Col>
        <Col className="col-auto p-0 mt-3">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Luxury%20Room%20-%20Bathroom.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"target={"_blank"}>
        <img src={require('./image/taj-21.jpeg')} className='img-fluid' alt="" />
        </a>

        </div>
        </Col>
        <Col className="col-auto p-0 mt-3">
        <div className="c-img-1">
          <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Rendezvous.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg" target={"_blank"}>
        <img src={require('./image/taj-22.jpeg')} className='img-fluid'  alt="" />
        </a>

        </div>
        </Col>
        </Row>
      </Container>

      {/* <div className="container">
        <div className="row d-flex">
          <div className="col-auto p-0">
            <div className="c-img-1">
              hello
            </div>
            <div className="col-auto p-0">
              <div className="c-img-2">
                hello
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* component name  section     end */}


      {/* footer section start */}
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
                <h5>Contact Us</h5>
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
                    <h5 className="mt-3">Online Payments</h5>
                    <i class="fa-brands fa-amazon-pay border border-1 p-1"></i>
                    <i class="fa-brands fa-google-pay border border-1 p-1 ms-2 "></i>
                    <i class="fa-brands fa-paypal border border-1 p-1 ms-2"></i>
                </div>
            </Row>
            
        </Col>
    </Row>

</Container>
</div>

      {/* footer section end  */}

      {/* copyright section start */}
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
      {/* copyright section end */}

    </>
  )
}
export default Gallery
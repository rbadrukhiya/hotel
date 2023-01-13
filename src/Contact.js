import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Dropdown from 'react-bootstrap/Dropdown';


function Contact() {
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
                <li><a href="/blog" target='_blank' className="me-5">BLOG</a></li>
                <li><a href="/contact" target='_blank' className='me-5'>CONTACT</a></li>
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
                <h4>Contact</h4>
              </div>
            </div>
            <div className="col-auto">
              <div className="component-path">
                <Breadcrumb>
                  <Breadcrumb.Item href="/home" className="component-content"> Home </Breadcrumb.Item>
                  <Breadcrumb.Item href="/contact" className="component-content">
                    Contact
                  </Breadcrumb.Item>
                </Breadcrumb>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* component name  section     end */}


      {/* contact section start */}

      <div className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="c-heading text-center">
                <span>Contact Us</span>
              </div>
              <div className="c-content text-center">
                <p><b>Have a question or need assistance? &nbsp;</b>We are here to help you with anything you need. <br></br>Here's how you can contact us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="contact-us-section-2 p-3 mt-5 mb-5">
        <div className="container">
          <div className="row d-flex justify-content-between row-cols-xxl-2 row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-sm-1 ">
            <div className="col-auto">
              <div className="contact-content">
                <div className="contact-content-heading">
                  <span>Join Our Team | Contact Us</span>
                  <p className="pt-4 ">If you are looking to work in a dynamic workplace and think that you have what it takes to excel in a competitive environment, then do not hesitate to knock. Fill out the form to help us understand your caliber and we will open the door if we like what we see.</p>
                  <p>In case you are here as a client and are interested in utilizing one of our services, feel free to contact us through this form or directly call/email us via details given in the footer. We would love to work alongside you and help in making your dreams come true.</p>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="contact-img">
                <img src={require("./image/contact_us.jpeg")} className='img-fluid' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="contact-us-card p-5 ">
        <div className="container pb-5 pt-5">
          <div className="row d-flex justify-content-between align-items-center row-cols-xxl-3 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1" xs={1}>
            <div className="col-auto mt-3">
              <div className="email-card">
                <div className="email-icon text-center">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div className="email-heading text-center">Email</div>
                <div className="email-content text-center">
                  <p>royalrich@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-auto mt-3">
              <div className="phone-card">
                <div className="phone-icon text-center"><i class="fa-solid fa-headset"></i></div>
                <div className="phone-heading text-center">Phone</div>
                <div className="phone-content text-center">+ 91 98989 89898</div>


              </div>
            </div>
            <div className="col-auto mt-3">
              <div className="address-card">
                <div className="address-icon text-center"><i class="fa-solid fa-location-dot"></i></div>
                <div className="address-heading text-center">Address</div>
                <div className="address-content text-center">here</div>


              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="our_location mb-5">


        <div className="container">

          <div className="row logo">
            <div className="col-12 text-center display-5 mt-5 ">
              {/* <img src={require("./image/download.png")} className='img-fluid me-5 d-none d-md-block' alt="" /> */}
              <b><i>OUR LOCATION</i></b>
              {/* <img src={require("./image/download.png")} alt="" className="img-fluid ms-5 " /> */}
            </div>
          </div>
        </div>
        <div className="container">
          <img src={require("./image/map.jpeg")} alt="" className="img-fluid mt-5" />
        </div>
      </div>
      {/* contact section end */}

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

      {/* copy right section end */}
    </>
  )
}
export default Contact
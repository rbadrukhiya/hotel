import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Dropdown from 'react-bootstrap/Dropdown';


function About() {
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
                <li><a href="/blog" target='_blank' className="me-5">BLOG<i class="fa-solid fa-angle-up sub_icon"></i></a></li>
                <li><a href="/contact" target='_blank' className='me-5'>CONTACT<i class="fa-solid fa-angle-up sub_icon"></i></a></li>
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
                <h4>About</h4>
              </div>
            </div>
            <div className="col-auto">
              <div className="component-path">
                <Breadcrumb>
                  <Breadcrumb.Item href="/home" className="component-content"> Home </Breadcrumb.Item>
                  <Breadcrumb.Item href="/about" className="component-content">
                    About
                  </Breadcrumb.Item>
                </Breadcrumb>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* component name  section     end */}

      {/* box-section start */}

      <div className="a-box p-5 pt-5 pb-5">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center row-cols-xl-3 row-cols-xxl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
            <div className="col-auto pt-4 pb-4">
              <div className="a-box-1">
                <div className="a-icon text-center">
                  <i class="fa-solid fa-eye "></i>
                </div>
                <div className="a-heading-icon text-center">
                  Customer Vision
                </div>
                <div className="a-content mt-3 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa nemo dolores minima eos veritatis fuga quis iste dolorum. Harum veritatis quia molestiae ad animi repellat assumenda impedit ab illum.
                </div>
              </div>
            </div>
            <div className="col-auto pt-4 pb-4">
              <div className="a-box-1">
                <div className="a-icon text-center"><i class="fa-solid fa-face-smile"></i></div>
                <div className="a-heading-icon text-center">
                  Customer Satisfaction
                </div>
                <div className="a-content mt-3 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa nemo dolores minima eos veritatis fuga quis iste dolorum. Harum veritatis quia molestiae ad animi repellat assumenda impedit ab illum.
                </div>

              </div>
            </div>
            <div className="col-auto pt-4 pb-4">
              <div className="a-box-1">
                <div className="a-icon text-center"><i class="fa-solid fa-bell-concierge"></i></div>
                <div className="a-heading-icon text-center">
                  Customer Services
                </div>
                <div className="a-content mt-3 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa nemo dolores minima eos veritatis fuga quis iste dolorum. Harum veritatis quia molestiae ad animi repellat assumenda impedit ab illum.
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* box-section end */}
      {/* our team section start */}
      <div className="our-team m-0">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="our-heading">
                <span>Our Team</span>
                <p>
                  We Are All Set To Provide Exceptional Quality And Constant Support</p>

              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-auto  mt-5">
              <div className="our-box-1">
                <div className="our-box-img text-center">
                  <img src={require('./image/ceo.jpeg')} alt="" />
                </div>
                <div className="our-box-content p-2">
                  <div className="row">
                    <div className="col-12 text-center">
                      <span>CEO</span>
                      <p>Ravi Badrukhiya</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto mt-5">
              <div className="our-box-1">
                <div className="our-box-img text-center">
                  <img src={require('./image/ceo.jpeg')} alt="" />
                </div>
                <div className="our-box-content p-2">
                  <div className="row">
                    <div className="col-12 text-center">
                      <span>MD</span>
                      <p>Ravi Badrukhiya</p>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      {/* our team section end */}

      {/* slider section start */}
      <div className="review pb-5 ">


        <div className=" p-3">
          <div className="row">
            <div className="col-12  a-heading text-center">
              What Our Client Say
            </div>
          </div>
          <div className="col-12 text-center a-slogan" >
            <span>Happy words of our satisfied customers</span>

          </div>
        </div>

        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-auto">
              <OwlCarousel className='owl-theme mt-2' loop margin={10} items='1' autoplay autoplayTimeout='3000' dots={false}>
                <div class='item d-flex justify-content-between'>
                  <div className="review_img">
                    <img src={require("./image/client.jpg")} className='img-fluid' alt="" />
                  </div>
                  <div className="review_content mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore repellendus suscipit, voluptates iure aperiam quo molestiae molestias perspiciatis dignissimos optio veniam perferendis sapiente neque similique dolorem minus dolorum, autem quaerat.
                  </div>
                </div>
                <div class='item d-flex justify-content-between'>
                  <div className="review_img d-flex justify-content-center align-items-center ">
                    <img src={require("./image/client2.jpeg")} className='img-fluid' alt="" />
                  </div>
                  <div className="review_content mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore repellendus suscipit, voluptates iure aperiam quo molestiae molestias perspiciatis dignissimos optio veniam perferendis sapiente neque similique dolorem minus dolorum, autem quaerat.
                  </div>
                </div>
                <div class='item d-flex justify-content-between'>
                  <div className="review_img">
                    <img src={require("./image/client3.jpeg")} className='img-fluid' alt="" />
                  </div>
                  <div className="review_content mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore repellendus suscipit, voluptates iure aperiam quo molestiae molestias perspiciatis dignissimos optio veniam perferendis sapiente neque similique dolorem minus dolorum, autem quaerat.
                  </div>
                </div>
                <div class='item d-flex justify-content-between'>
                  <div className="review_img">
                    <img src={require("./image/client4.jpeg")} className='img-fluid' alt="" />
                  </div>
                  <div className="review_content mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore repellendus suscipit, voluptates iure aperiam quo molestiae molestias perspiciatis dignissimos optio veniam perferendis sapiente neque similique dolorem minus dolorum, autem quaerat.
                  </div>
                </div>


              </OwlCarousel>
            </div>
          </div>

        </div>
      </div>

      {/* slider section end */}


      {/* choose section start */}
      <Container >
                <Row>
                    <Col className="col-12 text-center display-5 mt-5 ">
                    <b>WHY CHOOSE US HOTEL</b>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5 mb-5">
                <Row xs={1} sm={2} md={2} lg={3} xl={3} xxl={3} className='mb-5'>
                    <Col>
                        <div className="why_box_1 col choose p-2 mt-3">
                        <i class="fa-solid fa-wallet me-2"></i>  Price Is Your Budget
                        </div>
                    </Col>
                    <Col >
                        <div className="why_box_2 co p-2 choose mt-3">
                        <i class="fa-solid fa-lock me-2"></i>Booking Is Safe
                        </div>
                    </Col>
                    <Col >
                        <div className="why_box_3 col choose p-2 mt-3">
                        <i class="fa-solid fa-earth-americas me-2"></i> Manage Your Booking Online  
                      </div>
                    </Col>
                
                    <Col>
                    <div className="why_box_4 choose col p-2 mt-3">
                    <i class="fa-regular fa-comment me-2"></i>  
                    The Staff Speak In English
                        </div>
                        </Col>
                    <Col>
                    <div className="why_box_5 choose col p-2 mt-3">
                    <i class="fa-solid fa-children me-2"></i>
                    Great Location For Couples
                        </div>
                        </Col>
                        <Col>
                        <div className="why_box_6  choose col p-2 mt-3">
                        <i class="fa-solid fa-sun me-2"></i>  Best Sunset View
                        </div>
                        </Col>
                </Row>
            </Container>
      {/* choose section end */}


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

      {/* footer section end */}

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
      {/* copy right section end */}
    </>
  )
}
export default About
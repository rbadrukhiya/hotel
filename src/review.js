import { Container ,Row , Col } from "react-bootstrap"
import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Review()
{
    return(
        <>
        <div className="review pb-5 mt-5">
            <Container>
                <Row>
                    <Col className='col-12 display-5 text-center mt-5 mb-5'>
                        <div className="review_heading">
                           <b> CLIENT REVIEW</b>   
                            </div> 
                            </Col>
                </Row>
            {/* <Container>
                <Row className="justify-content-between">
                    <Col className="col-auto">
                        <div className="review_box_1">
                            <div className="review_img">
                                <img src={require("./image/client.jpg")} alt="" className="img-fluid" />
                            </div>
                            <div className="review_content">

                            </div>
                        </div>
                    </Col>
                    <Col className="col-auto">
                        <div className="review_box_2">
                        <div className="review_img">
                                <img src={require("./image/client2.jpeg")} alt="" className="img-fluid" />
                            </div>
                            <div className="review_content">

                            </div>
                        </div>
                    </Col>
                    <Col className="col-auto">
                        <div className="review__box_3">
                        <div className="review_img">
                                <img src={require("./image/client3.jpeg")} alt="" className="img-fluid" />
                            </div>
                            <div className="review_content">

                            </div>
                        </div>
                    </Col>
                    
                </Row>
            </Container> */}

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
                    </Container>

            </div>
        </>
    )
}
export default Review
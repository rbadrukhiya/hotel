import { Container ,Row , Col  } from "react-bootstrap"

function Choose()
{
    return(
            <>
            
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
            </>
    )
}
export default Choose
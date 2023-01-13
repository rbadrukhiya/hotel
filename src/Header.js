// import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
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
    </>
  )
}
export default Header
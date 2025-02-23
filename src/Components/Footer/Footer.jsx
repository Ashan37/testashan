import React from "react";
import { Container, Row, Col,ListGroup,ListGroupItem} from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "../../Styles/footer.css";
const quickLinks=[
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/#',
    display:'Privacy Policy'
  },
  {
    path:'/cars',
    display:'Car Listing'
  },
  {
    path:'/blogs',
    display:'Blog'
  },
  {
    path:'/contact',
    display:'Contact'
  },
]

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Car Rental
                    <br />
                    Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className='footer__logo-content'>
            Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries.
              </p>
          </Col>
         
          <Col lg='2' md='4' sm='6'>
          <div className="mb-4">
          <h5 className="footer__link-title">Quick Links</h5>
          <ListGroup>
            {
              quickLinks.map((item,index)=>(
                <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                  <Link to ={item.path}>{item.display}</Link>

                </ListGroupItem>
              ))
            }
          </ListGroup>
          </div>
          </Col>

          <Col lg='3' md='4' sm='6'>
          <div className="mb-4">
            <h5 className="footer__link-title mb-4">Head Office</h5>
            <p className="office__info">112/4, Nicholos Road, Colombo 10, Sri Lanka</p>
            <p className="office__info">Phone: 011-6597418</p>
            <p className="office__info">Email: biverse@gmail.com</p>
            <p className="office__info">Office Time:8am-6am</p>
          </div>
          </Col>

          <Col lg='3' md='4' sm='6'>
          <div className="mb-4">
            <h5 className="footer__link-title">Newsletter</h5>
            <p className="section__description">Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Email" />
              <span>
                <i class="ri-send-plane-line"></i>
                </span>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

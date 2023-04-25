import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";

function DemoBootstrap() {
  return (
    <div>
      {/* Đây là navbar */}
      <Navbar bg='lightNavbar' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link className='text-navbar' href='#home'>
                Home
              </Nav.Link>
              <Nav.Link className='text-navbar' href='#link'>
                Link
              </Nav.Link>
              <Nav.Link className='text-navbar' href='#about'>
                About
              </Nav.Link>
              <Nav.Link className='text-navbar' href='#contact'>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Đây là carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://cdnimg.vietnamplus.vn/uploaded/bokttj/2023_01_02/avatar_the_way_of_water.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://cdnimg.vietnamplus.vn/uploaded/bokttj/2023_01_02/avatar_the_way_of_water.jpg'
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://cdnimg.vietnamplus.vn/uploaded/bokttj/2023_01_02/avatar_the_way_of_water.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DemoBootstrap;

import React from 'react'
import Header from '../components/Header'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import House from "../assets/luxuryHouse.jpg"
import House2 from "../assets/grange.jpg"
import Footer from '../components/Footer'
export default function About() {
  return (
    <div>
      <Header></Header>
      <Container className='py-5'>
        <h2 className='display-6 text-center text-uppercase fw-normal'>About Us</h2>
        <hr className='mb-4' />
        <Row>
          <Col md={8}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sapiente nobis itaque, voluptate expedita nulla, neque pariatur officia porro quasi labore. Iste totam mollitia repudiandae nesciunt, incidunt explicabo enim reprehenderit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quos delectus eos aspernatur. Facere blanditiis ipsum iusto unde possimus sint eveniet animi corrupti quae, saepe fugit exercitationem. Eveniet, assumenda numquam.
              Laudantium, vel possimus? Aliquid soluta, distinctio vitae modi iste incidunt! Nisi dolor ad perferendis illum corporis velit dolorum tempore culpa nam dicta, ullam quo, aut, quasi unde architecto doloribus officia?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sapiente nobis itaque, voluptate expedita nulla, neque pariatur officia porro quasi labore. Iste totam mollitia repudiandae nesciunt, incidunt explicabo enim reprehenderit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quos delectus eos aspernatur. Facere blanditiis ipsum iusto unde possimus sint eveniet animi corrupti quae, saepe fugit exercitationem. Eveniet, assumenda numquam.
              Laudantium, vel possimus? Aliquid soluta, distinctio vitae modi iste incidunt! Nisi dolor ad perferendis illum corporis velit dolorum tempore culpa nam dicta, ullam quo, aut, quasi unde architecto doloribus officia?
            </p>
          </Col>
          <Col md={4}>
            <img src={House} className='w-100'/>
          </Col>
        </Row>
        <hr className='mt-4'/>
        <Row className='pt-2'>
          <Col md={4}>
            <img src={House2} className='w-100'/>
          </Col>
          <Col md={8}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sapiente nobis itaque, voluptate expedita nulla, neque pariatur officia porro quasi labore. Iste totam mollitia repudiandae nesciunt, incidunt explicabo enim reprehenderit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quos delectus eos aspernatur. Facere blanditiis ipsum iusto unde possimus sint eveniet animi corrupti quae, saepe fugit exercitationem. Eveniet, assumenda numquam.
              Laudantium, vel possimus? Aliquid soluta, distinctio vitae modi iste incidunt! Nisi dolor ad perferendis illum corporis velit dolorum tempore culpa nam dicta, ullam quo, aut, quasi unde architecto doloribus officia?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sapiente nobis itaque, voluptate expedita nulla, neque pariatur officia porro quasi labore. Iste totam mollitia repudiandae nesciunt, incidunt explicabo enim reprehenderit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quos delectus eos aspernatur. Facere blanditiis ipsum iusto unde possimus sint eveniet animi corrupti quae, saepe fugit exercitationem. Eveniet, assumenda numquam.
              Laudantium, vel possimus? Aliquid soluta, distinctio vitae modi iste incidunt! Nisi dolor ad perferendis illum corporis velit dolorum tempore culpa nam dicta, ullam quo, aut, quasi unde architecto doloribus officia?
            </p>
          </Col>
          
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  )
}

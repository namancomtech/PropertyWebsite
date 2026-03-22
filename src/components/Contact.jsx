import React from 'react'
import Header from '../components/Header'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Footer from '../components/Footer'
export default function Contact() {
  return (
    <div>
      <Header></Header>
      <Container className='py-5'>
        <h2 className='display-6 text-center text-uppercase fw-normal'>Contact Us</h2>
        <hr />
        <Row className='pt-3'>
          <Col md={3}>
            <form action="">
              <p>
                <label htmlFor="name" className='me-2'>Enter Name: </label>
                <input type="text" id='name' />
              </p>
              <p>
                <label htmlFor="phoneNo" className='me-3'>Phone No.: </label>
                <input type="text" id='phoneNo' />
              </p>
              <p>
                <label htmlFor="emailId" className='me-4'>Email ID: </label>
                <input type="email" id='emailId' />
              </p>
              <p>
                <label htmlFor="enquiry" className='me-4'>Ask Anything 👇 </label>
              </p>
              <p>
                <textarea name="" id="enquiry" style={{width:"280px", height: "250px"}}></textarea>
              </p>
              <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
          </Col>
          <Col md={{ span: 2, offset: 1 }} className='d-flex align-items-center'>
            <hr />
            <h3 className='text-center border-top border-bottom py-3'>Don't feel <br />Shy <br />To <br />Get in <br />Touch <br />with our <br />Company</h3>
            <hr />
          </Col>
          <Col md={{ span: 5, offset: 1 }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7007.035574386988!2d77.3285847935791!3d28.584239500000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5aa47ad82cb%3A0xb516bfdfd29836fd!2sDhawan%20Properties%20-%20Real%20Estate%20Consultants!5e0!3m2!1sen!2sin!4v1773648426916!5m2!1sen!2sin" width="100%" height="450" loading="lazy" ></iframe>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  )
}

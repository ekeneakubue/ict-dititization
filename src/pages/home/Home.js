import React from 'react'
import './Home.css'
import {Container, Row, Col} from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Container>
        <Row className='home__main'>
          <Col md={6}>
            <div className='left-txt'>
              <h3 className='text-center txt1'>Learn to code with our</h3>
              <h1 className='text-primary text-center txt2'>Full Stack MERN Bootcamp</h1>
              <p className='text-left'>This Program gives you essential full-stack developer skills by bringing together modern coding techniques and the intensity of a programming bootcamp. We will focus on building react apps, using MongoDB, ExpressJS, React and NodeJS.</p>
              <div className='justify-content-center'>
                <button type="button" class="btn btn-primary btn1">Apply Now</button>
                <button type="button" class="btn btn-outline-primary btn1">Download Curriculum</button>
              </div>
            </div>
          </Col>
          <Col md={6}>            
            <img className='img-fluid banner' src='https://images.unsplash.com/photo-1556636530-6b7482d80e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='banner'/>                    
          </Col>
        </Row>

        <Row className=''>          
          <Col md={5} className=''><hr className='bg-primary'/></Col>
          <Col md={2}>
            <div className='course-title'>Our Courses</div>
          </Col>
          <Col md={5}><hr className='bg-primary'/></Col>
        </Row>

        <Row className='courses'>          
          <Col md={4}><div className='box text-left' data-toggle="tooltip" data-placement="top" title="HTML is Hypertext Markup Language"><i class="bi bi-arrow-right text-primary arrow-icon"></i> HTML</div></Col>
          <Col md={4}><div className='box text-left'><i class="bi bi-arrow-right text-primary arrow-icon"></i> CSS</div></Col>
          <Col md={4}><div className='box text-left'><i class="bi bi-arrow-right text-primary arrow-icon"></i> JavaScript</div></Col>
        </Row>
        <Row className='courses'>          
          <Col md={4}><div className='box text-left'><i class="bi bi-arrow-right text-primary arrow-icon"></i> ReactJs/Redux</div></Col>
          <Col md={4}><div className='box text-left'><i class="bi bi-arrow-right text-primary arrow-icon"></i> NodeJs/ExpressJs</div></Col>
          <Col md={4}><div className='box text-left'><i class="bi bi-arrow-right text-primary arrow-icon"></i> MongoDB</div></Col>
        </Row>
      </Container>
    </>
  )
}

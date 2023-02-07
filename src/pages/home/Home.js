import React from 'react'
import './Home.css'
import {Container, Row, Col} from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Container>
        <Row className='home__main'>
          <Col md={9} className='get'>
            <h2 className='text-left'>Get to Know Us</h2><hr className='bg-warning'/>
            <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Col>
          <Col md={3} className='bg-info'>
            Latest News<hr className='bg-light'/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

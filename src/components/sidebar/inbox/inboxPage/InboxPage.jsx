import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './InboxPage.css'
import Stack from '@mui/material/Stack';


const InboxPage = () => {
  return <div>
       
  <Row>
    <Col lg={5} md={12} xs={12} sm={12}>
      <Col className='searchInboxPage' lg={12} md={12} xs={12} sm={12}>
        <center><input type="search" placeholder='Search...' /></center>
      </Col>
      <Col lg={12} md={12} xs={12} sm={12}>
        <Row className='inboxMessage'>
              <Col lg={2} md={2} xs={2} sm={2}>
                <center><img src="images/circul.svg" alt="" /></center>
              </Col>
              <Col lg={10} md={10} xs={10} sm={10}>
               <span>Shageldi Alyyew</span>
                <Stack spacing={-2}>
               <p>Some box title here</p>
               <Stack direction='row' spacing={7}>
               <span id='paddingTop'>Some message here with limit</span>
               <span>20.01.2022 15:00</span>
               </Stack>
               </Stack>
              </Col>
        </Row>
       
      </Col>

    </Col>




    <Col lg={7} md={7} xs={12} sm={12}></Col>
  </Row>
  </div>;
};

export default InboxPage;

import React, { useState } from "react";

import Modal from 'react-bootstrap/Modal';
import RequestBox from './RequestBox'
import { Button } from 'react-bootstrap'
import ContactCard from "./ContactCard"



export default function PopupContact (){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  



  return(
<>
      <Button variant="info" onClick={handleShow}>
        My Contact
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>My contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactCard/>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import RequestBox from "./RequestBox";
import { Button } from "react-bootstrap";
import ContactCard from "./ContactCard";
import Alert from "react-bootstrap/Alert";

export default function PopupContact(props) {
  const [show, setShow] = useState(false);
  const [pop, setPop] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePop = () => setPop(true);


  return ( 
    <>
      

      <Button variant="info" onClick={handleShow} className="contact-button">
        My Contacts
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>My Contacts</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Press Send Email to send an appointment reminder to a contact!
          <ContactCard
            sessionID={props.sessionID}
            setActive={props.setActive}
            handlePop={handlePop}
            handleClose={handleClose}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

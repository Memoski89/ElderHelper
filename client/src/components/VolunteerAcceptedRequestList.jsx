import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

function RequestTablei(props) {
  console.log("props line 8 from volunteer accepted list ", props);

  const [successfulForm, setSuccessfulForm] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("inside complete request");

    let updateOfStatus = "complete";

    const geti = () => {
      let returnObj = {};
      for (let i in props) {
        //console.log("props.listItem[]iiiiiiiiiiiiii", props);

        returnObj = {
          fullilled_by_volunter: props.sessionIDTOUSE,
          status: updateOfStatus,
          requestID: props.requestID,
        };
      }
      console.log("returnObj", returnObj);
      return returnObj;
    };

    let updateRequestObjVolunteerAccept = geti();
    console.log(
      "inside complete request - OBJ TO SEND BACKEND LINE35",
      updateRequestObjVolunteerAccept
    );

    axios
      .post("http://localhost:8000/updateRequest", {
        updateRequestObjVolunteerAccept,
      })
      .then((res) => {
        //console.log("inside .then success update ");
        //NOW WHAT - START HERE

        setSuccessfulForm(true);
      })
      .catch((err) => {
        console.log("Error ReqBox 54", err);
      });

    console.log(
      "update object to send back to db",
      updateRequestObjVolunteerAccept
    );
  };

  return (
    <tbody>
      <tr>
        <td>{props.requestID}</td>
        <td>{props.posted_by}</td>
        <td>{props.date_of_request}</td>
        <td>{props.task_description}</td>
        <td>{props.task_postal_code}</td>
        <td>{props.date_posted}</td>
        <td>{props.fullilled_by_volunter}</td>
        <td>{props.status}</td>
        <Button onClick={handleSubmit} variant="success" type="submit">
          Completed
        </Button>{" "}
      </tr>
    </tbody>
  );
}

export default function VolunteerRequestList(props) {
  return (
    // <p> HI </p>
    <>
      <h1 className="accepted-requests">Accepted and Completed <br/> Requests</h1>
      <Table className="table-completed" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Request #</th>
            <th>Posted by</th>
            <th>Date Requested</th>
            <th>Description</th>
            <th>Postal Code</th>
            <th>Date Posted</th>
            <th>Volunteer</th>
            <th>Status</th>
            <th>Mark Request Complete</th>
          </tr>
        </thead>

        {props.acceptedRequestList.map((response) => (
          <RequestTablei
            key={response.id}
            requestID={response.id}
            posted_by={response.posted_by}
            date_of_request={response.date_of_request}
            task_description={response.task_description}
            task_postal_code={response.task_postal_code}
            date_posted={response.date_posted}
            fullilled_by_volunter={response.fullilled_by_volunter}
            status={response.status}
            sessionIDTOUSE={props.sessionID}
          />
        ))}
      </Table>
    </>
  );
}

import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function VolunteerRequestList(props) {
  console.log("props VolDispList ", props);

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Request #</th>
          <th>Posted by</th>
          <th>Date Requested</th>
          <th>Description</th>
          <th>Postal Code</th>
          <th>Date Posted</th>
          <th>Volunteer ID</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>

          <td>{props.requestID}</td>
          <td>{props.posted_by}</td>
          <td>{props.date_of_request}</td>
          <td>{props.task_description}</td>
          <th>{props.task_postal_code}</th>
          <th>{props.date_posted}</th>
          <th>{props.fullilled_by_volunter}</th>
          <th>{props.status}</th>
        </tr>
      </tbody>
    </Table>
  );
}

import React from 'react';
// import { Card,   MDBBreadcrumb, MDBBreadcrumbItem, MDBFormInline, Button } from 'mdbreact';
import {Card, Button} from 'react-bootstrap'
const BreadcrumSection = () => {
  return (
    <Card className="mb-5">
        <Card.Body id="breadcrumb" className="d-flex align-items-center justify-content-between">
            {/* <MDBBreadcrumb>
                <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>Dashboard</MDBBreadcrumbItem>
            </MDBBreadcrumb> */}
            <form className="md-form m-0 form-inline">
                <input className="form-control form-control-sm" type="search" placeholder="Type your query" aria-label="Search"/>
                <Button size="sm" color="primary" className="my-0" type="submit"><i icon="search" /></Button>
            </form>
        </Card.Body>
    </Card>
  )
}

export default BreadcrumSection;


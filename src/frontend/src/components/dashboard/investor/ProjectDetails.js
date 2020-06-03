/* eslint-disable no-multi-str */
/* eslint-disable no-console */
/* eslint no-console: "error" */
import React from "react";
import { Upload, message, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import reqwest from "reqwest";
// import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";




class ProjectDetails extends React.Component {
    render() {
  
    return (
      <>
      <div class="jumbotron p-4 p-md-5 text-dark rounded shadow-sm">
          
      <div class="container">
              <div class="row justify-content-start stripped">
                <div class="col-4">
                  Project Name:
                </div>
                <div class="col-4">
                  Palm Oil Production
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-4">
                  Project ID:
                </div>
                <div class="col-4">
                  000AAAA1
                </div>
              </div>
              <div class="row justify-content-end stripped">
                <div class="col-4">
                  Application Date:
                </div>
                <div class="col-4">
                  29-05-2020
                </div>
              </div>
              <div class="row justify-content-around">
                <div class="col-4">
                  Name of SME
                </div>
                <div class="col-4">
                  ZEE Nig. Limited
                </div>
              </div>
              <div class="row justify-content-between stripped">
                <div class="col-4">
                  SME ID.: 
                </div>
                <div class="col-4">
                  00000ASZ
                </div>
              </div>
            </div><br></br>
        <div class="container">
                <div class="row justify-content-start stripped">
                  <div class="col-4">
                    SME Address:
                  </div>
                  <div class="col-4">
                    Lagos Nigeria
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-4">
                    Milestone:
                  </div>
                  <div class="col-4">
                    In progress
                  </div>
                </div>
                <div class="row justify-content-end stripped">
                  <div class="col-4">
                    How many previous completed project?
                  </div>
                  <div class="col-4">
                    N/A
                  </div>
                </div>
                <div class="row justify-content-around">
                  <div class="col-4">
                    Number of Staff:
                  </div>
                  <div class="col-4">
                    8 persons
                  </div>
                </div>
                <div class="row justify-content-between stripped">
                  <div class="col-3">
                    Project Description: 
                  </div>
                  <div class="col-9">
                    This is the production and distributtion of palm in Wholesale and retail capacituies across the country
                  </div>
                </div>
                <div className="download">
                  <Button  type="primary">Download Proposal <DownloadOutlined /></Button> 
                </div>
              </div>
        </div>
      </>
    );
  }
}
export default ProjectDetails;

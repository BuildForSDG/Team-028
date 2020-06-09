import React from "react";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Redirect } from "react-router";
import "../../../../styles/modal.css";

class EligibilityCreteria extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null
     //show : false
    };
    
    
  }

  
  

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <>
        {/*** About Modal */}
        <Modal
          size="lg"
          // show={this.props.showModal}
          // onHide={this.closeEligibilty}
          dialogClassName="modal-90w"
          aria-labelledby="login"
          bsPrefix="modal"
        >
          <Modal.Header closeButton bsPrefix="modal-header">
            <Row>
              <Col className="text-center pr-1">
                <Modal.Title id="login" className="text-light">
                  We are eazSME
                </Modal.Title>
              </Col>
            </Row>
          </Modal.Header>
          <Modal.Body bsPrefix="modal-body">
            <div>
              <p>
                We believe most Small and Medium Size Businesses aren't getting the finance they need to start and grow
                their business. This is why we strive to review your organization's financial history, and provide you
                with the excellent service you deserve to access funds received from Government and International
                bodies.
              </p>
              <hr></hr>
              <Row>
                <Col>
                  <Modal.Title id="login" className="text-light">
                    WHY eazSME?
                  </Modal.Title>
                  <p>
                    SMEs are a crucial contributor to industry in emerging markets, contributing up to 60% of total
                    employment. However, 200 million SMEs lack access to affordable financial services and credit.
                  </p>
                </Col>
                <Col>
                  <br />
                  <p>
                    So we started eazSME to provide a platform through which SMEs can access investment funds from
                    potential investors through a transparent and regulated process.
                  </p>
                </Col>
              </Row>
            </div>
            <hr></hr>
            <div>
              <h5>Meet Our Team</h5>
              <p>
                We are a skilled team of Business Analyst, Software Developers, Project Managers who identified a gap in
                financing Small and Medium Business Enterprises and have decided to bridge the gap. Our Mission is to
                make investement funds accessible to SMEs and the utilization of the funds monitored and regulated.
              </p>
              <hr></hr>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default EligibilityCreteria;

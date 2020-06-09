/* eslint-disable no-multi-str */
import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import serialize from "form-serialize";

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      email: "davidy@test.com",
      description: "",
      userID: "",
      data: {},
      success: "",
      error: ""
    };

   /* this.update = this.update.bind(this);
    this.getUserID = this.getUserID.bind(this);*/
    this.varifyPassword = this.varifyPassword.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
  }

  componentDidMount() {
    // this.update();
  }
    

  getUserID(event) {
    event.preventDefault();
    this.setState({ userID: event.target.value });
    this.update();
  }

  varifyPassword(event) {
    event.preventDefault();
    const value = event.target.value;
    // axios.get("http://localhost:4000")  https://eazsme-backend.herokuapp.com//user/ make a request for a password and use it to verify password
  }

  handleEditorChange(e) {
    this.setState({ description: e.target.getContent() });
    console.log("Content was updated:", e.target.getContent());
  }

  submitUpdate(e) {
    e.preventDefault();
    const form = document.querySelector("form[name=update]")
    const formFields = serialize(form, {hash: true});
       axios.put("http://localhost:4000/updateOrguser", formFields)
    .then((data) => {
     console.log(data.status);
      if(data.status === 200) {
        this.setState({success: "Update was successful!"});
        console.log(this.state.success);
      }else {
        this.setState({error: "Error performing update"});
      }
    })
    .catch((error) => {
      this.setState({error: "Error performing update"}); 
      console.log(error);
    });
  }

  render() {
    const success= this.state.success;
    const error= this.state.error;
  
    return (
      <Card.Body>
       
        <Row>
          {/* <Col md="4">
            <Image src="holder.js/100px250" fluid />
          </Col> */}
          <Col md="12">
          {success ? (
              <div className="text-bold text-success">
                <h5>{success}</h5>
              </div>
            ) : (
              <div className="text-bold text-success">
                <h5>{error}</h5>
              </div>
            )}
            <Form name="update">
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  name="email"
                 
                 /* onChange={this.getUserID}*/
                />
              </Form.Group>

            

              <Form.Text>Change password</Form.Text>
              <Form.Group controlId="password">
                <Form.Label>Old Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="opassword" onBlur={this.varifyPassword} />
              </Form.Group>

              <Form.Text>Change password</Form.Text>
              <Form.Group controlId="newPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" placeholder="New Password" name="password" />
              </Form.Group>

              <Form.Text>Change password</Form.Text>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={this.submitUpdate}>
                Update User
              </Button>
            </Form>
          </Col>
        </Row>
      </Card.Body>
    );
  }
}
export default Update;

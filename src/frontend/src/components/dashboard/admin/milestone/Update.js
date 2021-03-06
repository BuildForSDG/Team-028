/* eslint-disable quotes */
/* eslint-disable no-multi-str */
/* eslint-disable no-console */
/* eslint no-console: "error" */
/*eslint quotes: ["error", "double"]*/
/*eslint-env es6*/
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
      catID: "",
      data: {},
      success: "",
      error: ""
    };

    this.submitUpdate = this.submitUpdate.bind(this);
    this.getMilestoneId = this.getMilestoneId.bind(this);
  }

  componentDidMount() {
    this.getMilestoneId();
  }

  async getMilestoneId(e) {
    e.preventDefault();
    const { milestoneId } = this.props.match;
    await axios
      .get("https://eazsme-backend.herokuapp.com/milestones/" + milestoneId)
      .then((data) => {
        if (data.status === "success") {
          this.setState({ catID: data.id });
          this.setState({ data });
        }
      })
      .catch((error) => console.log(error));
  }

  async submitUpdate(e) {
    e.preventDefault();
    const form = document.querySelector(`form[name="update"]`);
    const formFields = serialize(form, { hash: true });
    const { catID } = this.state;
    await axios
      .patch("https://eazsme-backend.herokuapp.com/projects/name/" + catID, formFields)
      .then((data) => {
        if (data.status === "success") {
          this.setState({ success: "Update was successful!" });
        } else {
          this.setState({ error: "Error performing update" });
        }
      })
      .catch((error) => console.log(error));
  }

  render() {
    const data = this.state.data;
    const success = this.state.success;
    const error = this.state.error;
    const id = data.id;
    const applicationId = data.applicationId;
    const name = data.name;
    const description = data.description;
    const startDate = data.startDate;
    const endDate = data.endDate;
    const progress = data.progress;
    const status = data.status;
    return (
      <Card.Body>
        {success ? (
          <div className="text-bold text-success">
            <h5>{success}</h5>
          </div>
        ) : (
          <div className="text-bold text-success">
            <h5>{error}</h5>
          </div>
        )}
        <Row>
          <Col>
            <Form name="update">
              <Form.Group controlId="id">
                <Form.Label>Milestone ID:</Form.Label>
                <Form.Control type="text" name="id" defaultValue={id} />
              </Form.Group>

              <Form.Group controlId="name">
                <Form.Label>Milestone Name:</Form.Label>
                <Form.Control type="text" name="categoryName" defaultValue={name} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Editor
                  apiKey="oym93hgea69gv4o5cjoxfc1baobo49f82d4ah9j66v3n955r"
                  initialValue={description}
                  init={{
                    height: 200,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image",
                      "charmap print preview anchor help",
                      "searchreplace visualblocks code",
                      "insertdatetime media table paste wordcount"
                    ],
                    toolbar:
                      "undo redo | formatselect | bold italic | \
                    alignleft aligncenter alignright | \
                    bullist numlist outdent indent | help"
                  }}
                  name="description"
                />
              </Form.Group>

              <Form.Group controlId="applicationId">
                <Form.Label>Application ID:</Form.Label>
                <Form.Control type="text" name="applicationId" defaultValue={applicationId} />
              </Form.Group>

              <Form.Group controlId="startDate">
                <Form.Label>Start Date:</Form.Label>
                <Form.Control type="date" name="startDate" defaultValue={startDate} />
              </Form.Group>

              <Form.Group controlId="endDate">
                <Form.Label>End Date:</Form.Label>
                <Form.Control type="date" name="endDate" defaultValue={endDate} />
              </Form.Group>

              <Form.Group controlId="progress">
                <Form.Label>Progress:</Form.Label>
                <Form.Control type="text" name="progress" defaultValue={progress} />
              </Form.Group>

              <Form.Group controlId="status">
                <Form.Label>Status:</Form.Label>
                <Form.Control type="text" name="status" defaultValue={status} />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={this.submitUpdate}>
                Update Milestone
              </Button>
            </Form>
          </Col>
        </Row>
      </Card.Body>
    );
  }
}
export default Update;

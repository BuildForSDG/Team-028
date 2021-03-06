/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Proposal from "./ProposalDetails";
import axios from "axios";

class SmeProposals extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      projectproposals: []
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  async fetchData() {
    const url = "https://eazsme-backend.herokuapp.com/project/investorAll";

    const data = await axios.get(url);

    const projectproposals = data.data.data;

    localStorage.setItem("proposals", JSON.stringify(projectproposals));
    this.setState({ projectproposals });

  }
  render() {
    const data = this.state.projectproposals;

    return (
      <>
      <div className="sachBody">
        <ul className="sach">
          <li><Button style={{float:"right",borderRadius:"5%",background:"orange"}}  variant="default" type="submit" > Search</Button></li>
            <li><Form.Group controlId="searchId">
            <Form.Control className="searchBar" style={{ width:"250px", float:"right",marginRight:"10px" }} type="text" placeholder="Enter project name to search" name="search" />
          </Form.Group></li>
          </ul>
        </div> 
      <nav aria-label="Page navigation example">
      <Card.Body>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Project Name</th>
              <th scope="col">SME</th>
              <th scope="col">Proposal Name</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Status</th>
              
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          {data.map((item, index, arr) => {
              const startDate = new Date(`${item.dateStart}`).toLocaleDateString();
              const endDate = new Date(`${item.dateEnd}`).toLocaleDateString();
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.projectName}</td>
                  <td>{item.companyName}</td>
                  <td>{item.proposal}</td>
                  <td>{startDate} </td>
                  <td>{endDate} </td>
                  <td>{item.status}</td>
                  {/*  <td>
                  <Link to={`/investor/proposal-details/${item.applicationId}`}>more details <svg class="bi bi-box-arrow-up-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 0 0 3 14.5h8a1.5 1.5 0 0 0 1.5-1.5V9a.5.5 0 0 0-1 0v4a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 5v8zm7-11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.5H9a.5.5 0 0 1-.5-.5z"/>
              <path fill-rule="evenodd" d="M14.354 1.646a.5.5 0 0 1 0 .708l-8 8a.5.5 0 0 1-.708-.708l8-8a.5.5 0 0 1 .708 0z"/>
              </svg></Link>
                  </td>*/}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card.Body>
      
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    </>
    );
  }
}
export default SmeProposals;
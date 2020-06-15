/* eslint-disable array-callback-return */

/* eslint-disable no-console */
/* eslint no-console: "error" */

import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

export default class InvestorsAndFunding extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchData: "",
      foundData: [],
      valueChange: "",
      success: "",
      error: ""
    };

    this.fetchData = this.fetchData.bind(this);
   this.approveFunds=this.approveFunds.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get("http://localhost:4000/funds/all")
      .then(({ res }) => {
              const  status  = res.status;
        const projects = res.data;
       
        console.log("p"+projects);
        if (status === "success") {
          this.setState({ data: projects });          
        }
      })
      .catch((error) => console.log(error));
  }
  approveFunds() {
    axios
      .put("http://localhost:4000/funds/update")
      .then(({ data }) => {
              const  status  = data.status;
        
        if (status === "success") {
          this.setState({ success: "Investment Approved" });          
        }else{
          this.setState({ error: "Error Approving Investment" }); 
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: "Error Approving Investment" });  
      });
  }

  render() {
    const data = this.state.data;
    
    return (
      <Card.Body>
     
        <div className="update" style={{textAlign:"center"}}>
          <h6> Available Investments</h6>
              </div>
        <table class="table table-striped">
                <thead>
            <tr>
            <th>Organization</th>
             <th>Project Name</th>              
              <th>Amount</th>
              <th>Fund Receipt Date</th>
              <th>View</th>
              <th>Approve</th>
            </tr>
          </thead>
          <tbody>
            {        
            data.map((item, index, arr) => {
            let count = arr.length;
            for(let i=0; i<count-1; i++){
              return (
                <tr>
                  <td key={index[i]}>{item[i].companyName}</td>
                  <td key={index[i]}>{item[i].projectName}</td>
                  <td key={index[i]}>{item[i].amount}</td>
                  <td key={index[i]}>{item[i].dateInitiated}</td>
                  <td key={count++}>
                      <Link to={`/view-project/${item.projectId}`}>View Details</Link>
                    </td>   
                    <td key={count++}>
                      <Link onClick={this.approveFunds} to="">Approve</Link>
                    </td>           
                </tr>
              );
            }
            })
            
            }
          </tbody>

        </table>
      </Card.Body>
    );
  }
}

/* eslint-disable no-console */
/* eslint no-console: "error" */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import axios from "axios";
let url="";

class TotalInvestments extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      investments: [],
      organization: " "
    };
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    const userObj = JSON.parse(localStorage.getItem("userObj"));
    console.log(userObj);
    console.log(userObj.organizationId);
    if (userObj) {
      this.setState({ organization: userObj.organizationId }); 
      url = `http://localhost:4000/funds/organizations/${userObj.organizationId}`;
      console.log(userObj.organizationId);  
    }
    this.fetchData();
  }
  async fetchData() {
     
    const data = await axios.get(url);
    const investments = data.data.data;
    this.setState({ investments: investments });
   
  }
  sumInvestments(arr){
    console.log(arr);
    if(arr)
    {
    return arr.reduce((acc, investment) => {
      const value = parseInt(investment.amount, 10) || 0;
      return acc + value;
    },0);
  }
  }
  render() {
    const data = this.state.investments;
    const Total = this.sumInvestments(data);
    return (
      <>
        <div className="invest-Title">
          See how much you've invested
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">S/N</th>
              <th scope="col">Status</th>
              <th scope="col">Date Initiated</th>
              <th scope="col">Amount(#)</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index, arr) => {
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  
                  <td>{item.status}</td>
                  <td>{item.dateInitiated}</td>
                  <td>{item.amount}</td>
                  <td>
                    <Link to={`FundDetails/${item.fundId}`}>update payment details</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <thead>
            <tr>
              <th scope="col">Total</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">{Total}</th>
              <th scope="col"></th>
            </tr>
          </thead>
        </table>
      </>
    );
  }
}
export default TotalInvestments;
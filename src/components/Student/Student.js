import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class Student extends Component {
  constructor() {
    super()
    this.state = {
      studentInfo: {}
    }

  }
  componentDidMount() {
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
    .then(res => {
      this.setState({studentInfo: res.data})
    })
  }

  render() {
    return (
      <div className="box">
        <h1>Student</h1>
        
        <h1>{this.state.studentInfo.first_name} {this.state.studentInfo.last_name}</h1>
        <h2>Email: {this.state.studentInfo.email} </h2> 
        <h2>Grade: {this.state.studentInfo.grade} </h2>
        
        <Link to='/classlist/:class'>
          Go To ClassList
        </Link>
        {/* {this.state.studentInfo} */}
      </div>
    )
  }
}
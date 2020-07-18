import React, { Component } from 'react';
import axios from 'axios';

export default class InsertPlace extends Component {
  constructor(props) {
    super(props);

    this.onChangePlacename = this.onChangePlacename.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      placename: ''
    }
  }

  onChangePlacename(e) {
    this.setState({
      placename: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const place = {
      name: this.state.placename
    }

    console.log(place);

    axios.post('/cases/insert', place)
      .then(res => console.log(res.data));

    this.setState({
      placename: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Insert new place</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Place name: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.placename}
                onChange={this.onChangePlacename}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Insert place" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
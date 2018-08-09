import React, { Component } from "react";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";

import axios from 'axios';





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors : [],
      loading: true
    }
  }

componentDidMount () {

  axios.get("https://the-index-api.herokuapp.com/api/authors/")
  .then(response => response.data)
  .then(authors => {
    this.setState({authors:authors, loading: false})
  })
  .then(loading => {this.state})



}

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">
            {this.state.loading ? <p>loading</p> : <AuthorsList authors={this.state.authors} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

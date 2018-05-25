import React, { Component } from 'react';
import ClienteService from "../services/clientes";
import {
  Paper,
  CircularProgress,
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn } from "material-ui";

class Top10 extends Component {

  state = {
    loading: false,
    data: null
  }

  componentWillMount() {
    this.setState({
      loading: true
    });
    const promise = ClienteService.getClientes();
    promise.then( (res) => {
      if (!res.ok) {
        Promise.reject(res);
      }
      return res.json();
    })
    .then( res => {
      console.log(res);
      this.setState({...this.state, loading: false, data: res})
    })
    .catch( err => {
      this.setState({...this.state, loading: false, data: []})
      console.error(err)
    })
  }

  getList() {
    return (
      <Table selectable={false}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {
              this.state.data.map( (cliente, index) => {
                return <TableRow key={index}>
                  <TableRowColumn>{cliente.id}</TableRowColumn>
                  <TableRowColumn>{cliente.name}</TableRowColumn>
                </TableRow>
              })
            }
        </TableBody>
      </Table>
    );
  }

  getContent() {
    let component;
    component = <CircularProgress size={60} thickness={7} style={{ margin: "auto"}} />;
    if (!this.state.loading && this.state.data) {
      component = this.getList();
    }
    return component;
  }

  render() {
    return (
      <div className="top-10">
        <Paper className="content">
          <h1>Top 10 clientes</h1>
          {this.getContent()}
        </Paper>
      </div>
    );
  }
}

export default Top10;
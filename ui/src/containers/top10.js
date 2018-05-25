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
  TableRowColumn,
  FlatButton,
  Dialog
} from "material-ui";

class Top10 extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  state = {
    loading: false,
    dialogOpen: false,
    dialogText: "",
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
      this.setState({...this.state, loading: false, data: res})
    })
    .catch( err => {
      this.setState({...this.state, loading: false, data: []})
      console.error(err)
    })
  }

  handleClose() {
    this.setState({
      ...this.state,
      dialogOpen: false
    });
  }

  handleClick(index) {
    let row = this.state.data[index];
    let notification = new Notification(`${row.name} has been clicked`, {
      body: 'Yey! Click me to warn the screen!'
    });

    notification.onclick = () => {
      this.setState({
        ...this.state,
        dialogOpen: true,
        dialogText: `I've come from ${row.name} notification!`
      });
    }
  }

  getList() {
    return (
      <Table selectable={false} onCellClick={this.handleClick}>
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

  getDialog() {

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <Dialog
        actions={actions}
        modal={false}
        open={this.state.dialogOpen}
        onRequestClose={this.handleClose}
      >
        {this.state.dialogText}
      </Dialog>
    );
  }

  render() {
    return (
      <div className="top-10">
        <Paper className="content">
          <h1>Top 10 clientes</h1>
          {this.getContent()}
          {this.getDialog()}
        </Paper>
      </div>
    );
  }
}

export default Top10;
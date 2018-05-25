import React, { Component } from 'react';
import {
  Paper,
  CircularProgress,
} from "material-ui";

class SystemInfo extends Component {

  state = {
    cpuUsage: 0,
    memory: 0,
  }

  componentWillMount() {
  	this.checkHardware = setInterval( () => {
  		this.setState({
  			...this.state,
  			cpuUsage: window.process.getCPUUsage().percentCPUUsage,
  			memory: window.process.getProcessMemoryInfo().workingSetSize,
  		});
  	}, 1000);
  }

  componentWillUnmount() {
  	clearInterval(this.checkHardware);
  }

  render() {
    return (
      <div className="system-info">
        <Paper className="content">
          <h1>System info</h1>
          CPU Usage: {this.state.cpuUsage.toFixed(2)}%
          Memory: {(this.state.memory / 1024).toFixed(2)}MB
        </Paper>
      </div>
    );
  }
}

export default SystemInfo;
import React, { Component } from "react";
import "./App.css";
import { Input, Button, message } from "antd";
// import { ipcRenderer } from "electron";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      open: true,
      loading: false,
      inputDisabled: false
    };
  }
  render() {
    return (
      <div className="App">
        <div className="line">
          <Input
            addonBefore="WIFI名字:"
            value={this.state.name}
            onChange={this.nameChange}
            disabled={this.state.inputDisabled}
          />
        </div>
        <div className="line">
          <Input
            addonBefore="密码:"
            value={this.state.password}
            onChange={this.pwdChange}
            disabled={this.state.inputDisabled}
          />
        </div>
        <div className="line">
          {this.state.open ? (
            <Button
              type="primary"
              loading={this.state.loading}
              onClick={this.startHandle}
            >
              {" "}
              启动WIFI{" "}
            </Button>
          ) : (
            <Button type="danger">断开</Button>
          )}
        </div>
      </div>
    );
  }

  startHandle = e => {
    if (this.state.name.length <= 6) {
      message.error("WIFI名字长度不能少于6位");
      return;
    } else if (this.state.name.length <= 6) {
      message.error("密码长度不能少于6位");
      return;
    }
    this.setState({
      loading: !this.state.loading,
      inputDisabled: !this.state.inputDisabled
    });
    this.timer=setTimeout(() => {
      this.setState({
        loading:!this.state.loading,
        open:!this.state.open
      })
      clearTimeout(this.timer);
    }, 5000);

    // this.setState({
    //   loading: !this.state.loading,
    //   open: !this.state.open
    // });
    // let obj={
    //   name:this.state.name,
    //   password:this.state.password
    // }
    // ipcRenderer.send("start",JSON.stringify(obj));
  };
  nameChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  pwdChange = e => {
    this.setState({
      password: e.target.value
    });
  };
}

export default App;

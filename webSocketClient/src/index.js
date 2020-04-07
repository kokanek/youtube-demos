import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { Card, Avatar, Input, Typography } from 'antd';
import 'antd/dist/antd.css';
import './index.css'
const { Text } = Typography;
const { Meta } = Card;
const { Search } = Input;

const client = new W3CWebSocket('ws://127.0.0.1:8000');

class App extends Component {
  /* When a user joins, I notify the
server that a new user has joined to edit the document. */

  state ={
    inputValue: '',
    messages: [],
    isLoggedIn: false,
    userName: ''
  }

  // not used yet
  logInUser = () => {
    const username = this.username.value;
    if (username.trim()) {
      const data = {
        username
      };
      this.setState({
        ...data
      }, () => {
        client.send(JSON.stringify({
          ...data,
          type: "userevent"
        }));
      });
    }
  }

  /* When content changes, we send the
  current content of the editor to the server. */
  onEditorStateChange = (text) => {
    client.send(JSON.stringify({
      type: "contentchange",
      username: this.state.username,
      content: text
    }));
  };

  onInputChange = (e) => {
    this.setState({ inputValue: e.target.value})
  };

  onButtonClicked = (value) => {
    client.send(JSON.stringify({
      type: "message",
      msg: value,
      user: this.state.userName
    }));
  }

  componentWillMount() {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log('got reply! ', dataFromServer);
      if (dataFromServer.type === "userevent") {
        //stateToChange.currentUsers = Object.values(dataFromServer.data.users);
      } else if (dataFromServer.type === "message") {
        this.setState((state) => ({ messages: [...state.messages, { msg: dataFromServer.msg, user: dataFromServer.user}] }));
      }
    };
  }

  render() {
    console.log('messages: ', this.state.messages);
    return (
      <div className="main">
        {this.state.isLoggedIn ? 
        <>
          <div className="title">
              <Text type="secondary" className={{ fontSize: '36px' }}>Websocket Chat</Text>
          </div>
          <Card style={{ width: 300, margin: '16px 0 0 4px' }} loading={false}>
            <Meta
              avatar={
                <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>S</Avatar>
              }
              title="Suraj"
              description="Hey buddies! party tonight?"
            />
          </Card>
          <div className="bottom">
            <Search
              placeholder="input message and send"
              enterButton="Send"
              size="large"
              onSearch={value => this.onButtonClicked(value)}
            />
          </div> 
        </>
        :
        <div style={{marginTop: 100, padding: 40}}>
          <Search
            placeholder="Enter Username"
            enterButton="Login"
            size="large"
            onSearch={value => this.setState({isLoggedIn: true, userName: value})}
          />
        </div>}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
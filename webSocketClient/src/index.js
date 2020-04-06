import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { w3cwebsocket as W3CWebSocket } from "websocket";
const contentDefaultMessage = 'DEFAULT_MESSAGE';

const client = new W3CWebSocket('ws://127.0.0.1:8000');

class App extends Component {
  /* When a user joins, I notify the
server that a new user has joined to edit the document. */

  state ={
    inputValue: '',
    messages: []
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

  onButtonClicked = () => {
    client.send(JSON.stringify({
      type: "message",
      msg: this.state.inputValue
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
        this.setState((state) => ({ messages: [...state.messages, dataFromServer.msg] }));
      }
    };
  }

  render() {
    console.log('messages: ', this.state.messages);
    return (
      <div>
        Practical Intro To WebSockets.
        <input type="text" onChange={this.onInputChange} value={this.inputValue}/>
        <button onClick={this.onButtonClicked}>Send message</button>
        <ul>
          {this.state.messages.map(msg => <li key={msg}>{msg}</li>)}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
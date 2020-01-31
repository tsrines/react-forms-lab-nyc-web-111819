import React from "react";

class TwitterMessage extends React.Component {

  state = {
    message: "",

    // characterCount: 280 - this.state.message.length
  }

  messageHandler = (event) => {
    this.setState({message: event.target.value}, console.log(this.state.message))
  }

  // characterCount = () => {
  //   return this.props.maxChars - this.state.message.length 
  // }

  render() {




    return (
      <div>
        <div>Characters Remaining:<span>{this.props.maxChars - this.state.message.length}</span></div>
        <strong>Your message:</strong>
        <input  onChange={this.messageHandler} value={this.state.message} type="text" name="message" id="message" />
      </div>
    );
  }
}

export default TwitterMessage;

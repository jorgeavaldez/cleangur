import React from 'react';
import ReactDOM from 'react-dom';

import Image from './Image';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: 'Imgur link or image ID...',
      inputEntered: false
    };
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  handleButton(event) {
    if (this.state.inputValue != 'Imgur link or image ID...') {
      this.setState({
        inputEntered: true
      });
    }
  }

  render() {
    if (this.state.inputEntered) {
      return (
        <Image 
          img_id={this.state.inputValue}
          api_url="https://api.imgur.com/3/image/" 
        />
      );
    }

    return (
      <div>
        <h1>Enter the Imgur image ID or the image link.</h1>
        <input 
          type="text" 
          value={this.state.inputValue} 
          onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleButton.bind(this)}>Clean this up!</button>
      </div>
    );
  }
}

export default Main;

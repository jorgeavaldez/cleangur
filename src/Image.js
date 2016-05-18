import React from 'react';
import request from 'Superagent';

import IMGUR_API_CREDENTIALS;

class Image extends React.Component {
  constructor(props) {
    super(props);

    // base_url: the url of the image off of imgur, the one that gets rendered
    this.state = {
      id: props.img_id,
      img_url: '',
      title: '',
      description: '',
      width: -1,
      height: -1
    };
  }

  fetchImage(id) {
    var base_url = this.props.api_url;

    request.get(base_url + id)
      .set('Authorization', IMGUR_API_CREDENTIALS.CLIENT_KEY);
      .end((error, response) => {
          if (!error && response) {
            console.dir(response.body);

            var newState = {
              img_url: response.body.data.link,
              title: response.body.data.title,
              description: response.body.data.description,
              width: response.body.data.width,
              height: response.body.data.height
            }

            this.setState(newState);
          }

          else {
            console.log("error grabbing image info: " + error);
          }
        }
      );
  }

  componentWillMount() {
    this.fetchImage(this.props.img_id);
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={this.state.img_url} />
        <p>{this.state.description}</p>
      </div>
    );
  }

}

export default Image;

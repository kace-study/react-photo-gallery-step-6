import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchBox from '../SearchBox/SearchBox';
import PhotoList from '../PhotoList/PhotoList';
import './Gallery.css';

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = { photos: [] }
  }

  componentWillMount() {
    this.search('');
  }

  search = (keyword) => {
    const param = { method: 'GET' };
    const url = 'https://pixabay.com/api/?key=' + process.env.REACT_APP_API_KEY 
      + '&q=' + keyword.toLowerCase() 
      + '&image_type=photo' 
      + '&min_width=200&min_height=200';
    fetch(url, param)
      .then(response => response.json())
      .then(data => {
        this.setState({ photos: data.hits });
      })
      .catch(console.log);
  }

  render() {
    return (
        <Container className="gallery-container">
          <Row className="mb-5">
            <Col md={{ size: 6, offset: 3 }}>
              <SearchBox search={this.search}/>  
            </Col>
          </Row>
          <PhotoList photos={this.state.photos} />
        </Container>
    );
  }
}

export default Gallery;
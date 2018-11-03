import React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import './Photo.css';

const Photo = ({ photo }) =>  {

  const onClick = (url) => {
    window.open(url, '_blank');
  }

  return (
    <Card className="mb-3 text-center">
      <CardImg 
        top 
        width="250px" 
        height="250px" 
        src={photo.webformatURL}
        onClick={() => onClick(photo.pageURL)} />
      <CardBody>
        <CardText>{photo.user}</CardText>
      </CardBody>
    </Card>
  );
}

export default Photo;
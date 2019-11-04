import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

const Example = (props) => {
  return (
    <CardDeck classsName="card" >
      <Card>
        <CardImg top width="50%"  src="https://cache1.pakwheels.com/system/car_generation_pictures/4664/medium/Toyota_Corolla.jpg?1503296685" alt="Card image cap" />
        <CardBody>
          <CardTitle><h3>Toyota Corolla 2019</h3></CardTitle>
          <CardSubtitle>PKR 37 lacs</CardSubtitle>
                  </CardBody>
      </Card>
      <Card>
        <CardImg top width="50%" src="https://cache2.pakwheels.com/system/car_generation_pictures/3186/medium/2016-Toyota-Prius.jpg?1449150826" alt="Card image cap" />
        <CardBody>
          <CardTitle><h3>Toyota Prius 2019</h3></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="50%"   src="https://cache4.pakwheels.com/system/car_generation_pictures/4866/medium/Toyota_Camry_(1).jpg?1540550625" alt="Card image cap" />
        <CardBody>
          <CardTitle><h3>Toyota Camry 2019</h3></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          
        </CardBody>
      </Card>
      
      
    </CardDeck>
    

    


  );
};

export default Example;
import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

const Card3 = (props) => {
  return (
    <CardDeck classsName="card" >
      <Card>
        <CardImg top width="50%"  src="https://cache3.pakwheels.com/system/car_generation_pictures/2945/medium/Toyota-Hiace-2004.jpg?1444115808" alt="Card image cap" />
        <CardBody>
          <CardTitle><h3>Toyota Hiace 2019</h3></CardTitle>
          <CardSubtitle>PKR 37 lacs</CardSubtitle>
                  </CardBody>
      </Card>
      <Card>
        <CardImg top width="50%" src="https://cache1.pakwheels.com/system/car_generation_pictures/2861/medium/Toyota_Corolla_Axio_11th.jpg?1444077893" alt="Card image cap" />
        <CardBody>
          <CardTitle><h3>Toyota Corolla Axio 2019</h3></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="50%" src="https://cache3.pakwheels.com/system/car_generation_pictures/4336/medium/Toyota_Hilux_Revo_2016-2017_(4).jpg?1481482790" alt="Card image cap" />
        <CardBody>
          <CardTitle><h3>Toyota Hilux 2019</h3></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          
        </CardBody>
      </Card>
      
      
      
    </CardDeck>
    

    


  );
};

export default Card3;
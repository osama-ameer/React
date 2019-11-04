import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

const Card2 = (props) => {
  return (
    <CardDeck classsName="card" >
      <Card>
        <CardImg top width="50%"  src="https://cache3.pakwheels.com/system/car_generation_pictures/4408/medium/Toyota_Fortuner_2017_(3).jpg?1484662468" alt="Card image cap" />
        <CardBody>
          <CardTitle><h3>Toyota Fortuner 2019</h3></CardTitle>
          <CardSubtitle>PKR 37 lacs</CardSubtitle>
                  </CardBody>
      </Card>
      <Card>
        <CardImg top width="50%" src="https://cache4.pakwheels.com/system/car_generation_pictures/3022/medium/Toyota-Land-Cruiser_2015.jpg?1444118953" alt="Card image cap" />
        <CardBody>
          <CardTitle><h3>Toyota Land Cruiser 2019</h3></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="50%"   src="https://cache2.pakwheels.com/system/car_generation_pictures/2976/medium/Toyota-Aqua_2012.jpg?1444116849" alt="Card image cap" />
        <CardBody>
          <CardTitle><h3>Toyota Aqua 2019</h3></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          
        </CardBody>
      </Card>
      
      
    </CardDeck>
    

    


  );
};

export default Card2;
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const CardStuffItem = (props) => {
  return (
    <div>
      <Card className="list-item">
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.stuff}</CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
          <CardText>{props.description}</CardText>
          <Button onClick={props.onRemoveStuff(props.id)}>-</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardStuffItem;
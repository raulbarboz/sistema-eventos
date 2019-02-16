import React from 'react';
import moment from 'moment';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const now = moment();
now.format('MMM Do, YYYY');

const CardOpenEventPage = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.event.url} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.event.event}</CardTitle>
          <CardSubtitle>{props.event.subtitle}</CardSubtitle>
          <CardText>{props.event.description}</CardText>
          <CardText>
              <small className="text-muted">{moment(props.event.startDate).format("MM/DD/YYYY")} / {moment(props.event.endDate).format("MM/DD/YYYY")}</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardOpenEventPage;
import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import textFilter from '../selectors/textFilter';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardFooter, Button } from 'reactstrap';

const EventListItem = (props) => {
  const deleteEvent = (e) => {
    e.preventDefault();
    props.onDelete(props.id, props.imageName)
  }
  return(
    <Link className={props.styleClass} to={`/event/${props.id}`}>
        <Card>
         <Button onClick={deleteEvent} close />
          <CardImg top width="100%" src={props.url} alt="Card image cap" />
          <CardBody>
            <CardTitle>{textFilter(props.event, 53)}</CardTitle>
            <CardSubtitle>{textFilter(props.subtitle, 30)}</CardSubtitle>
            <CardText>{textFilter(props.description, 400)}</CardText>
          </CardBody>
          <CardFooter>{moment(props.createdAt).format("MM/DD/YYYY")}</CardFooter>
        </Card>
    </Link>
  )
}

export default connect()(EventListItem);

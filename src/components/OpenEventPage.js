import React from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const OpenEventPage = (props) => {
  return(
    <div>
      <div className="page-header">
          <div className="content-container">
            <Card inverse>
              <CardImg width="100%" src={props.event.url} alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle>{props.event.event}</CardTitle>
                <CardText>{props.event.subtitle}</CardText>
                <CardText>{props.event.description}</CardText>
                <CardText>
                  <small className="text-muted">{props.event.createdAt}</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </div>
        </div>
      <div className="content-container">

      </div>
    </div>

  )
}

const mapStateToProps = (state, props) => {
  return {
    event: state.events.find((event) => event.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(OpenEventPage);

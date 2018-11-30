import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const EventListItem = ({ id, event, subtitle, description, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
      <div>
        <h3>{event}</h3>
        <h5>{subtitle}</h5>
        <p>{description}</p>
        <span>{moment(createdAt).format("MM/DD/YYYY")}</span>
      </div>
  </Link>
)

export default connect()(EventListItem);

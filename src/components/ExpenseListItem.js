import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
      <div>
        <h3>{description}</h3>
        <span>{moment(createdAt).format("MM/DD/YYYY")}</span>
      </div>
      <h3>{(amount/100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
  </Link>
)

export default connect()(ExpenseListItem);

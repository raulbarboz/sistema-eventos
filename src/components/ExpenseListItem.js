import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link
    to={`/edit/${id}`}
    >
      <h3>
        {description}
      </h3>
   </Link>
    <p>{(amount/100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
    <p>{moment(createdAt).format("MM/DD/YYYY")}</p>
  </div>
)

export default connect()(ExpenseListItem);

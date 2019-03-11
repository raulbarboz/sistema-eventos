import React from 'react';
import { Button } from 'reactstrap';

const CardStuffItem = (props) => {
  const deleteStuff = () => {
    props.onRemoveStuff(props.id, props.parent_id)
  }
  return (
          <tr>
            <td>{props.stuff}</td>
            <td>{props.subtitle}</td>
            <td>{props.description}</td>
            <td>{props.price}</td>
            <td onClick={deleteStuff}>Remover</td>
          </tr>
  );
};

export default CardStuffItem;
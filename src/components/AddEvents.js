import React from 'react';
import { Link } from 'react-router-dom';

const AddEvents = () => {
  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__actions">
          <Link className="button" to="/create">Evento +</Link>
        </div>
    </div>
    </div>
  )
}


export default AddEvents;
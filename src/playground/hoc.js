import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>Admin</p>}
      <WrappedComponent {...props} />
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {!props.isAuthenticated && <p>Please log </p>}
      <WrappedComponent {...props} />
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={false} info="informacao"/>, document.getElementById('app'))

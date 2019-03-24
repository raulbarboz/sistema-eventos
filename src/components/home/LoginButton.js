import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';

export const LoginButton = ({startLogin}) => (
        <button className="button" onClick={startLogin}>Login</button>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginButton);

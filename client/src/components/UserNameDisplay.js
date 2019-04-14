import React from 'react';
import withUserAuth from './UserAuthWrapper';

function UserNameDisplay(props) {
  if (!props.user)
    return null;

  return <div>Username: {props.user.username}</div>
}

// this will give us `props.user` if the user is logged in
export default withUserAuth(UserNameDisplay);
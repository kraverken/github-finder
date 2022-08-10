import React from "react";
import PropTypes from "prop-types";

function UserItem({ user: { login, avatar_url } }) {
  return <div cla>{login}</div>;
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
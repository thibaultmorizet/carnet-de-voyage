import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const User = ({
  last_name,
  first_name,
  password,
  email,
  role,
  fetchUser,
}) => {
  useEffect(() => {
    fetchUser();
  });

  return (
    <div className="urlInput">
      {last_name}
    </div>
  );
};

User.propTypes = {
  last_name: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  fetchUser: PropTypes.func.isRequired,
};
export default User;

import React, {useEffect} from 'react';

const User = ({last_name, first_name, password, email, role, fetchUser}) =>{ 
  useEffect(() => {
    fetchUser();
  });

  return (
  <div className="urlInput">
    {last_name}
  </div>
)};

export default User;

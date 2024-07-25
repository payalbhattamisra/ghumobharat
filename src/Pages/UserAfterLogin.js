import React from 'react';

import { useLocation } from 'react-router-dom';
import UserNavbar from '../Component/Navbar/usernavbar';

const UserAfterLogin = () => {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <>

    <UserNavbar usersname={username}/>

    
    </>
  );
};

export default UserAfterLogin;

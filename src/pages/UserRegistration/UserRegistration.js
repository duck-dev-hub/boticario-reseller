import React from 'react';
import Main from './styles';

import MainHeader from '../../containers/MainHeader';
import MainFooter from '../../containers/MainFooter';
import FormRegistration from '../../containers/FormRegistration';

const UserRegistration = () => {
  return (
    <>
      <MainHeader />
      <Main>
        <FormRegistration />
      </Main>
      <MainFooter />
    </>
  );
};

export default UserRegistration;

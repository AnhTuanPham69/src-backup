import React from 'react';
import i18n from 'i18next';
import PageTitle from 'components/common/PageTitle';
import CustomBreadcrumb from 'components/common/Breadcrumb';
import ProfileInfo from './components/ProfileInfo';
import ProfileStyles from './styles';

const Profile = () => {
  const BREADCRUMB = [
    {
      title: i18n.t('profile.header'),
      path: '/profile',
    },
  ];

  return (
    <ProfileStyles>
      <PageTitle>
        <CustomBreadcrumb data={BREADCRUMB} />
      </PageTitle>
      <ProfileInfo />
    </ProfileStyles>
  );
};

Profile.propTypes = {};

export default Profile;

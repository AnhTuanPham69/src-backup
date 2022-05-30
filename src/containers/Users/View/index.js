import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getByIdUsers } from '@redux/users/actions';
import { useHistory, useLocation } from 'react-router';
import { getIdByUrl } from 'utils/tools';
import { Button } from 'antd';
import moment from 'moment';
import InfoCard from 'containers/Customers/components/InfoCard';
import { FORMAT_DATE } from 'configs/localData';
import I18n from 'i18next';
import Edit from '../../rest/Edit';

import { UsersViewWrapper } from './styles';

const UsersShow = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector((state) => state.users.currentData);
  const location = useLocation();
  const id = getIdByUrl(
    {
      resource: 'users',
    },
    location,
  );

  useEffect(() => {
    if (id) {
      dispatch(
        getByIdUsers({
          data: {
            id,
          },
          options: {
            isRequestApi: true,
          },
        }),
      );
    }
  }, [id]);

  return (
    <UsersViewWrapper>
      <Edit
        {...props}
        resource="users"
        header={I18n.t('users.userDetail')}
        customSubmitButton={
          <div className="btn-row">
            <Button
              type="primary"
              onClick={() => {
                history.push(`#users/${currentUser?.id}/edit`);
              }}
            >
              {I18n.t('button.edit')}
            </Button>
            <Button
              onClick={() => {
                history.goBack();
              }}
            >
              {I18n.t('button.cancel')}
            </Button>
          </div>
        }
      >
        <InfoCard
          customerName={`${
            currentUser?.firstName || currentUser?.lastName
              ? `${currentUser?.firstName || ''} ${currentUser?.lastName || ''}`
              : currentUser?.email
          }`}
          image={currentUser?.avatar}
          generalPhoneNo={currentUser?.phone}
          generalMail={currentUser?.email}
          generalDate={moment(currentUser?.createdAt).format(FORMAT_DATE)}
          linkedinLink={currentUser?.linkedinLink}
          twitterLink={currentUser?.twitterLink}
          facebookLink={currentUser?.facebookLink}
          address={currentUser?.address}
          businessAddress={currentUser?.companyName}
          privateMail={currentUser?.privateEmail}
          privatePhone={currentUser?.privatePhone}
          sectorName={currentUser?.sector?.join()}
        />
      </Edit>
    </UsersViewWrapper>
  );
};

UsersShow.propTypes = {};

export default UsersShow;

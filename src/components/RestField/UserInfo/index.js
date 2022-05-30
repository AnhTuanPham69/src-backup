import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { ManOutlined, WomanOutlined, UserOutlined } from '@ant-design/icons';
import { getRecordData } from 'utils/tools';
import { UserInfoWrapper } from './styles';
import { MEMBER_ROLES } from '../../../configs/localData/index';

const UserInfo = (props) => {
  const {
    record,
    isShowName,
    size,
    isLink,
    prefixLink,
    nameProp,
    roleProp,
    avatarProp,
    showAvt,
    minWidth,
    extraContentProp,
    classNameLink,
  } = props;
  const content =
    record &&
    (isLink ? (
      <Link to={`${prefixLink}`} className={classNameLink}>
        {getRecordData(record, nameProp) || record.email}
        {record.gender === 'Male' && (
          <ManOutlined
            style={{
              marginLeft: 5,
              fontSize: 17,
              color: '#00a7f7',
            }}
          />
        )}
        {record.gender === 'Female' && (
          <WomanOutlined
            style={{
              marginLeft: 5,
              fontSize: 17,
              color: '#9b28b0',
            }}
          />
        )}
        <div style={{ lineHeight: '12px' }}>
          <small style={{ color: '#8d8a8a' }}>
            {getUserRole(getRecordData(record, roleProp))}
            {extraContentProp && getRecordData(record, extraContentProp)}
          </small>
        </div>
      </Link>
    ) : (
      // eslint-disable-next-line
      <a role="main">
        {getRecordData(record, nameProp) || record.email}
        <div style={{ lineHeight: '12px' }}>
          <small style={{ color: '#8d8a8a' }}>
            {getUserRole(getRecordData(record, roleProp))}
          </small>
        </div>
      </a>
    ));
      
  return (
    <UserInfoWrapper className="avatar-item">
      <div style={{ display: 'flex', alignItems: 'center', minWidth }}>
        {showAvt ? (
          <Avatar src={getRecordData(record, avatarProp)} size={size} icon={<UserOutlined />} style={{ minWidth: '32px', marginRight: 10 }} />
        ) : null}
        {(record && isShowName && content) || (
          <span>
            {i18next.t('error.waitingUpdate')}
          </span>
        )}
      </div>
    </UserInfoWrapper>
  );
};

const getUserRole = (id) => {
  const role = MEMBER_ROLES.find((data) => data.id === id);
  return role ? role.text[i18next.language] : id;
};

UserInfo.propTypes = {
  record: PropTypes.object,
  isShowName: PropTypes.bool,
  size: PropTypes.number,
  isLink: PropTypes.bool,
  nameProp: PropTypes.string,
  roleProp: PropTypes.string,
  avatarProp: PropTypes.string,
  prefixLink: PropTypes.string,
  showAvt: PropTypes.bool,
  minWidth: PropTypes.number,
  extraContentProp: PropTypes.string,
  classNameLink: PropTypes.string,
};

UserInfo.defaultProps = {
  nameProp: 'fullName',
  roleProp: 'businessRole',
  avatarProp: 'avatar',
  isShowName: true,
  isLink: true,
  prefixLink: '/users',
  showAvt: true,
  minWidth: 150,
};

export default UserInfo;

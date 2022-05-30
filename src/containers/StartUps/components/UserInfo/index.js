import React from 'react';
import SVGIcon from 'components/common/SVGIcon';
import { UserInfoWrapper } from './styles';

const UserInfo = () => {
  return (
    <UserInfoWrapper>
      <div>
        <SVGIcon type="ic-user" />
        <p>Devon Lane</p>
      </div>
      <div>
        <SVGIcon type="bookmark" />
        <p>Analysing Data</p>
      </div>
      <div>
        <SVGIcon type="mail" />
        <p>devon.lane@gmail.com</p>
      </div>
      <div>
        <SVGIcon type="phone" />
        <p>(+35) 437 8484</p>
      </div>
    </UserInfoWrapper>
  )
};

export default UserInfo;
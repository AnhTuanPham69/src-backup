import React from 'react';
import i18next from 'i18next';
import NotFoundPageWrapper from './styles';
import NotFoundIcon from '../../assets/icons/404-error.svg';

function NotFoundPage() {
  return (
    <NotFoundPageWrapper>
      <div className="main">
        <img src={NotFoundIcon} alt="Not Found" />
        <div className="text-div">
          <div>404</div>
          <div>{i18next.t('pageNotFound')}</div>
        </div>
      </div>
    </NotFoundPageWrapper>
  );
}

export default NotFoundPage;

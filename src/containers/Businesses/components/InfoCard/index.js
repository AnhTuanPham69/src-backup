import React from 'react';
import { Button, Avatar, Tooltip } from 'antd';
import {
  UserOutlined,
  ArrowLeftOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
  MailOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  EnvironmentOutlined,
  LinkOutlined,
  IdcardOutlined,
} from '@ant-design/icons';
import SVGIcon from 'components/common/SVGIcon';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { InfoCardWrapper } from './styles';

const InfoCard = ({
  name,
  image,
  generalPhoneNo,
  generalDate,
  generalMail,
  paypalEmailAccount,
  facebookLink,
  linkedinLink,
  twitterLink,
  handleClickBack,
  handleClickEdit,
  address,
  websiteLink,
  businessName,
}) => {
  return (
    <InfoCardWrapper>
      <div className="header-section">
        <Button
          onClick={handleClickBack}
          className={`back-btn ${handleClickBack ? '' : 'disable'}`}
        >
          <ArrowLeftOutlined />
        </Button>
        <div className="overview">
          {image ? (
            <img src={image} alt="" className="img" />
          ) : (
            <Avatar size={64} icon={<UserOutlined />} />
          )}
          <h3>{businessName || i18next.t('noData')}</h3>
        </div>
        <Button
          onClick={handleClickEdit}
          className={`edit-btn ${handleClickEdit ? '' : 'disable'}`}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/image-lauch-portal.appspot.com/o/my-program%2Fedit.svg?alt=media&token=94de0b07-2f17-444d-b35d-4fbcf7089408"
            alt=""
            className="img"
          />
        </Button>
      </div>
      <div className="contents-section">
        <h3>{i18next.t('businesses.generalInformation')}</h3>
        <div className="row">
          <IdcardOutlined />
          <Tooltip title={name}>
            <p>{name || i18next.t('noData')}</p>
          </Tooltip>
        </div>
        <div className="row">
          <MailOutlined />
          <Tooltip title={generalMail}>
            <p>{generalMail || i18next.t('noData')}</p>
          </Tooltip>
        </div>
        <div className="row">
          <SVGIcon type='paypal' />
          <Tooltip title={paypalEmailAccount}>
            <p>{paypalEmailAccount || i18next.t('noData')}</p>
          </Tooltip>
        </div>
        <div className="row">
          <PhoneOutlined rotate={90} />
          <p>{generalPhoneNo || i18next.t('noData')}</p>
        </div>
        <div className="row">
          <EnvironmentOutlined />
          <p>{address || i18next.t('noData')}</p>
        </div>
        <div className="row">
          <ClockCircleOutlined />
          <p>{generalDate || i18next.t('noData')}</p>
        </div>
        <h3>{i18next.t('businesses.socialChannel')}</h3>
        <div className="row">
          <LinkOutlined />
          {websiteLink ? (
            <a href={websiteLink} target="_blank" rel="noreferrer">
              {websiteLink}
            </a>
          ) : (
            <p>{i18next.t('noData')}</p>
          )}
        </div>
        <div className="row">
          <FacebookOutlined />
          {facebookLink ? (
            <a href={facebookLink} target="_blank" rel="noreferrer">
              {facebookLink}
            </a>
          ) : (
            <p>{i18next.t('noData')}</p>
          )}
        </div>
        <div className="row">
          <LinkedinOutlined />
          {linkedinLink ? (
            <a href={linkedinLink} target="_blank" rel="noreferrer">
              {linkedinLink}
            </a>
          ) : (
            <p>{i18next.t('noData')}</p>
          )}
        </div>
        <div className="row">
          <TwitterOutlined />
          {twitterLink ? (
            <a href={twitterLink} target="_blank" rel="noreferrer">
              {twitterLink}
            </a>
          ) : (
            <p>{i18next.t('noData')}</p>
          )}
        </div>
      </div>
    </InfoCardWrapper>
  );
};

InfoCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  generalPhoneNo: PropTypes.string,
  generalDate: PropTypes.string,
  generalMail: PropTypes.string,
  paypalEmailAccount: PropTypes.string,
  facebookLink: PropTypes.string,
  linkedinLink: PropTypes.string,
  twitterLink: PropTypes.string,
  handleClickBack: PropTypes.func,
  handleClickEdit: PropTypes.func,
  address: PropTypes.string,
  websiteLink: PropTypes.string,
  businessName: PropTypes.string,
};

export default InfoCard;

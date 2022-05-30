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
  IdcardOutlined,
  ToolOutlined,
} from '@ant-design/icons';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { InfoCardWrapper } from './styles';

const InfoCard = ({
  image,
  generalPhoneNo,
  generalDate,
  generalMail,
  facebookLink,
  linkedinLink,
  twitterLink,
  handleClickBack,
  address,
  customerName,
  businessAddress,
  privatePhone,
  privateMail,
  sectorName,
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
          <h3>{customerName || i18next.t('noData')}</h3>
        </div>
      </div>
      <div className="contents-section">
        <h3>{i18next.t('customers.generalInformation')}</h3>
        
        <div className="row">
          <MailOutlined />
          <Tooltip title={generalMail}>
            <p>{generalMail || i18next.t('noData')}</p>
          </Tooltip>
        </div>
        <div className="row">
          <PhoneOutlined rotate={90} />
          <p>{generalPhoneNo || i18next.t('noData')}</p>
        </div>
        <div className="row">
          <IdcardOutlined />
          <Tooltip title={businessAddress}>
            <p>{businessAddress || i18next.t('noData')}</p>
          </Tooltip>
        </div>
        <div className="row">
          <EnvironmentOutlined />
          <p>{address || i18next.t('noData')}</p>
        </div>
        <div className="row">
          <ClockCircleOutlined />
          <p>{generalDate || i18next.t('noData')}</p>
        </div>
        <h3>{i18next.t('customers.privateContact')}</h3>
        <div className="row">
          <MailOutlined />
          <Tooltip title={privateMail}>
            <p>{privateMail || i18next.t('noData')}</p>
          </Tooltip>
        </div>
        <div className="row">
          <PhoneOutlined rotate={90} />
          <p>{privatePhone || i18next.t('noData')}</p>
        </div>
        <h3>{i18next.t('customers.sectors')}</h3>
        <div className="row">
          <ToolOutlined />
          <p>{sectorName || i18next.t('noData')}</p>
        </div>

        <h3>{i18next.t('customers.socialChannel')}</h3>
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
  image: PropTypes.string,
  generalPhoneNo: PropTypes.string,
  generalDate: PropTypes.string,
  generalMail: PropTypes.string,
  facebookLink: PropTypes.string,
  linkedinLink: PropTypes.string,
  twitterLink: PropTypes.string,
  handleClickBack: PropTypes.func,
  address: PropTypes.string,
  customerName: PropTypes.string,
  businessAddress: PropTypes.string,
  privateMail: PropTypes.string,
  privatePhone: PropTypes.string,
  sectorName: PropTypes.string,
};

export default InfoCard;

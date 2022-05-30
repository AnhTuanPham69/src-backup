import React from 'react';
import { ConfigProvider, Empty } from 'antd';
import i18next from 'i18next';
import moment from 'moment';
import { USER_PROGRAM_STATUS } from 'configs/localData';
import { formatMoney } from 'utils/textUtils';
import UserInfo from 'components/RestField/UserInfo';
import PropTypes from 'prop-types';
import TagCustom from 'components/common/TagCustom';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import List from '../../rest/List';
import { CoachSummaryWrapper } from './styles';

const CoachSummary = ({ description }) => {
  return (
    <CoachSummaryWrapper>
      <div className="user-section">
        <h3>{i18next.t('coach.startupMentoring')}</h3>
        <ConfigProvider
          renderEmpty={() => (
            <Empty
              description={
                <div
                  style={{
                    fontSize: '24px',
                  }}
                >
                  <div>{i18next.t('noData')}</div>
                </div>
              }
            />
          )}
        >
          <List
            resource="startUps"
            initialFilter={{
              orderBy: 'createdAt:DESC',
            }}
            hasCreate={false}
            defaultOptions={{
              customApiResource: 'startup-progresses',
            }}
            noCardWrapper
          >
            <RestFieldItem
              width={120}
              source="user.firstName"
              header="coach.name"
              format={(firstName, row) => (
                <UserInfo
                  record={{
                    ...row?.user,
                    fullName: `${firstName || ''} ${row?.user?.lastName || ''}`,
                  }}
                  nameProp="fullName"
                  avatarProp="avatar"
                  isLink={false}
                />
              )}
            />
            <RestFieldItem source="user.email" header="coach.contact" />
            <RestFieldItem
              source="dateAccept"
              header="coach.acceptDate"
              sorter
              format={(createdAt) =>
                createdAt && moment(createdAt).format('DD MMM, YYYY')}
            />
            <RestFieldItem
              sorter
              source="programProgress"
              header="coach.progress"
              format={(data) => (
                <p style={{ textAlign: 'center' }}>
                  {formatMoney(data) || 0}
                  %
                </p>
              )}
            />
            <RestFieldItem
              width={110}
              source="status"
              header="coach.status"
              format={(data) => (
                <TagCustom
                  color={
                    USER_PROGRAM_STATUS.find((status) => status.value === data)
                      ?.textColor
                  }
                  backgroundColor={
                    USER_PROGRAM_STATUS.find((status) => status.value === data)
                      ?.color
                  }
                  name={i18next.t(
                    USER_PROGRAM_STATUS.find((status) => status.value === data)
                      ?.text,
                  )}
                />
              )}
            />
          </List>
        </ConfigProvider>
      </div>
      <div className="description-section">
        <h3>{i18next.t('coach.currentClass')}</h3>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </CoachSummaryWrapper>
  );
};

CoachSummary.propTypes = {
  description: PropTypes.any,
};

CoachSummary.defaultProps = {
  description:
    'With over 20 years experience as a 3-time serial SaaS/Big Data entrepreneur, CEO, Board Director and tech executive, Alex advises CEOs, Boards of Directors, and venture capital and private equity firms on generating growth and successful outcomes for their businesses. Previously, he was the CEO of 360pi, and Chief Growth Officer and head of M&A and merger integration for Numerator, a Vista Equity Partners portfolio company. Prior to starting his entrepreneurial career during the dot com era, Alex was a consultant at Bain & Company and led production material control for a Ford/VW joint venture in Europe. Cooper has an MBA from INSEAD, a B.A.Sc. Electrical Engineering from the University of Waterloo, and speaks four languages. When he’s not strategizing growth opportunities or sitting in on web calls, Alex will most likely be found cycling, hiking, reading or spending time with his family.',
};

export default CoachSummary;

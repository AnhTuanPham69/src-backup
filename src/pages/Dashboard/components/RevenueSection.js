import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Card } from 'antd';
import i18next from 'i18next';
import styled from 'styled-components';
import { formatMoney } from 'utils/textUtils';

const RevenueSection = ({ value }) => {

  return (
    <RevenueSectionWrapper bordered={false} title={i18next.t('home.title.revenue')}>
      <Typography.Title>
        {`$${formatMoney(value)}`}
      </Typography.Title>
      <div className="sub-text">
        {i18next.t('home.revenue.desc')}
      </div>
    </RevenueSectionWrapper>
  )
}

const RevenueSectionWrapper = styled(Card)`
  box-shadow: 0px 2px 12px rgba(0,0,0,0.06);

  .ant-card-head {
    border: none;

    .ant-card-head-title {
      font-weight: 600;
    }
  }

  .ant-typography {
    color: ${({ theme }) => theme.palette.primary};
  }

  .sub-text {
    color: #999;
  }
`;

RevenueSection.propTypes = {
  value: PropTypes.number,
}

export default RevenueSection;

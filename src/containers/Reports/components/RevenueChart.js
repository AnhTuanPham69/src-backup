import React from 'react';
import { Area } from '@ant-design/charts';
import styled from 'styled-components';
import { Card, Select, DatePicker } from 'antd';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import moment from 'moment';

const { RangePicker } = DatePicker;

const { Option } = Select;
const RevenuesChart = ({
  data,
  handleChange,
  onCalendarChange,
  totalRevenue,
  revenueTime,
  loading,
}) => {
  const config = {
    data,
    xField: 'Date',
    yField: i18next.t('home.chart.title'),
    xAxis: {
      range: [0, 1],
      tickCount: 5,
    },
    line: {
      color: '#FFA901',
    },
    padding: 40,
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#ffffff 0.5:#FFC437 1:#FFA901',
      };
    },
  };

  const disabledDate = (current) => {
    return current && current > moment().endOf('day');
  }

  return (
    <CardWrapper
      bordered={false}
      title={i18next.t('home.title.revenue')}
      extra={
        <>
          <Select
            defaultValue="day"
            style={{ width: 90 }}
            onChange={handleChange}
          >
            <Option value="day">{i18next.t('home.chart.day')}</Option>
            <Option value="month">{i18next.t('home.chart.month')}</Option>
            <Option value="year">{i18next.t('home.chart.year')}</Option>
          </Select>
          <RangePicker
            {...(revenueTime?.type !== 'day' && {
              picker: revenueTime?.type,
            })}
            value={revenueTime?.value}
            disabledDate={disabledDate}
            onCalendarChange={onCalendarChange}
            placeholder={['From', 'To']}
            allowClear={false}
          />
        </>
      }
    >
      {!loading && (
        <>
          <div className="revenue-number">
            <p>{i18next.t('home.chart.totalRevenue')}</p>
            <h1>
              $
              {totalRevenue}
            </h1>
          </div>
          <Area {...config} />
        </>
      )}
    </CardWrapper>
  );
};

RevenuesChart.propTypes = {
  data: PropTypes.array,
  handleChange: PropTypes.func,
  onCalendarChange: PropTypes.func,
  totalRevenue: PropTypes.number,
  revenueTime: PropTypes.object,
  loading: PropTypes.bool,
};

const CardWrapper = styled(Card)`
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.06);
  padding: 10px 20px;

  .ant-card-head {
    border: none;

    .ant-card-head-title {
      font-weight: 600;
      font-size: 20px;
    }
  }

  .ant-card-extra {
    display: flex;
    .ant-picker {
      margin-left: 13px;
      width: 254px;
    }
  }

  .revenue-number {
    margin-top: 20px;
    p {
      font-weight: 700;
      color: #9c9c9c;
    }

    h1 {
      font-size: 24px;
    }

    .rate {
      color: #4aaf05;
    }
  }
`;

export default RevenuesChart;

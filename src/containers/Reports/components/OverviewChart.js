import React from 'react';
import { Card, Select, DatePicker } from 'antd';
import { Column, G2 } from '@ant-design/charts';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import styled from 'styled-components';
import moment from 'moment';

const { RangePicker } = DatePicker;

const { Option } = Select;
const OverviewChart = ({
  data,
  handleChange,
  onCalendarChange,
  overviewTime,
  loading,
  totalOrder,
}) => {
  const { registerTheme } = G2;
  registerTheme('custom-theme', {
    colors10: ['#4c6fff', '#ffb21d'],
    colors20: ['#4c6fff', '#ffb21d'],
  });
  const columnConfig = {
    data,
    xField: 'date',
    yField: 'value',
    seriesField: 'type',
    isGroup: 'true',
    dodgePadding: 6,
    maxColumnWidth: 10,
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
    meta: {
      type: {
        formatter: (text) => i18next.t(`home.chart.${text}`),
      },
    },
    legend: {
      layout: 'horizontal',
      position: 'top-left',
    },
    theme: 'custom-theme',
  };
  const disabledDate = (current) => {
    return current && current > moment().endOf('day');
  }
  return (
    <CardWrapper
      bordered={false}
      title={i18next.t('home.title.orders')}
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
            {...(overviewTime?.type !== 'day' && {
              picker: overviewTime?.type,
            })}
            value={overviewTime?.value}
            onCalendarChange={onCalendarChange}
            placeholder={['From', 'To']}
            disabledDate={disabledDate}
            allowClear={false}
          />
        </>
      }
    >
      {!loading && (
        <>
          <div className="order-number">
            <p>{i18next.t('home.chart.totalOrder')}</p>
            <h1>{totalOrder}</h1>
          </div>
          <Column {...columnConfig} />
        </>
      )}
    </CardWrapper>
  );
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

  .order-number {
    margin-top: 20px;
    p {
      font-weight: 700;
      color: #9c9c9c;
    }

    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }
  }

  .ant-card-extra {
    display: flex;
    .ant-picker {
      margin-left: 13px;
      width: 254px;
    }
  }
`;

OverviewChart.propTypes = {
  data: PropTypes.array,
  handleChange: PropTypes.func,
  onCalendarChange: PropTypes.func,
  overviewTime: PropTypes.object,
  loading: PropTypes.bool,
  totalOrder: PropTypes.number,
};

export default OverviewChart;

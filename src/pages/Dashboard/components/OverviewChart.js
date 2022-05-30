
import React from 'react';
import { Card, Radio } from 'antd';
import { Column, G2 } from '@ant-design/charts';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import styled from 'styled-components';

const OverviewChart = ({ data }) => {
  const { registerTheme } = G2;
  registerTheme('custom-theme', {
    colors10: [
      '#4c6fff',
      // '#bf6b82',
      '#ffb21d',
    ],
    colors20: [
      '#4c6fff',
      // '#bf6b82',
      '#ffb21d',
    ],
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
      radius: [2, 2, 0, 0],
    },
    meta: {
      type: {
        formatter: text => i18next.t(`home.chart.${text}`),
      },
    },
    legend: {
      layout: 'horizontal',
      position: 'top-left',
    },
    theme: 'custom-theme',
  };
  return (
    <CardWrapper
      bordered={false}
      title={i18next.t('home.title.overview')}
      extra={(
        <Radio.Group
          options={[
            { label: 'Week', value: 'week' },
            { label: 'Month', value: 'month' },
            { label: 'Year', value: 'year' },
          ]}
          onChange={() => {}}
          defaultValue="month"
          optionType="button"
          buttonStyle="solid"
        />
      )}
    >
      <Column {...columnConfig} />
    </CardWrapper>
  )
}

const CardWrapper = styled(Card)`
  box-shadow: 0px 2px 12px rgba(0,0,0,0.06);

  .ant-card-head {
    border: none;

    .ant-card-head-title {
      font-weight: 600;
    }
  }
`

OverviewChart.propTypes = {
  data: PropTypes.array,
}

export default OverviewChart;

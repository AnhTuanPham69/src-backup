import React from 'react';
import { Pie, G2 } from '@ant-design/charts';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import i18next from 'i18next';

const UserChart = ({ data }) => {
  const { registerTheme } = G2;
  registerTheme('custom-pie-theme', {
    colors10: ['#f7b295', '#345d7d', '#bf6b82', '#f5737f'],
    colors20: ['#f7b295', '#345d7d', '#bf6b82', '#f5737f'],
  });

  const pieConfig = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.87,
    innerRadius: 0.6,
    autoFit: false,
    height: 200,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '',
      autoRotate: false,
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    meta: {
      type: {
        formatter: text => i18next.t(`home.chart.${text}`),
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '14',
      },
    },
    legend: {
      position: 'left',
      layout: 'horizontal',
      flipPage: false,
    },
    theme: 'custom-pie-theme',
  };

  return (
    <CardWrapper bordered={false} title={i18next.t('home.title.users')}>
      <Pie {...pieConfig} />
    </CardWrapper>
  )
}

UserChart.propTypes = {
  data: PropTypes.array,
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


export default UserChart;

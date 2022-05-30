import React from 'react';
import { Pie, G2 } from '@ant-design/charts';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import i18next from 'i18next';

const UserChart = ({ data, total }) => {
  const { registerTheme } = G2;
  registerTheme('custom-pie-theme', {
    colors10: ['#5487F5', '#00C48C', '#FF8238', '#FFC437'],
    colors20: ['#5487F5', '#00C48C', '#FF8238', '#FFC437'],
  });

  const pieConfig = {
    data,
    angleField: 'count',
    colorField: 'name',
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
      name: {
        formatter: text => i18next.t(text),
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
        content: `${total || 0}`,
      },
    },
    legend: {
      position: 'bottom',
      layout: 'vertical',
      flipPage: false,
      itemWidth: 200,
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
  total: PropTypes.number,
}

const CardWrapper = styled(Card)`
  box-shadow: 0px 2px 12px rgba(0,0,0,0.06);

  .ant-card-head {
    border: none;

    .ant-card-head-title {
      font-weight: 600;
      padding-bottom: 0px;
      font-size: 20px;
    }

  }

  &>.ant-card-body {
      padding: 0px 0px 10px !important;
    }
`



export default UserChart;

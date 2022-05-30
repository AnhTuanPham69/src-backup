import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import Text from '../Text';
import { BreadcrumbWrapper } from './styles';

const CustomBreadcrumb = (props) => (
  <BreadcrumbWrapper separator=">">
    {props.data.map((data, index) => (
      <Breadcrumb.Item key={String(index)}>
        {data.path ? (
          <Link href={data.path} to={data.path}>
            <Text
              className="breadcrumb-item"
              style={{
                ...(props.size && {
                  fontSize: props.size,
                }),
              }}
              inline
            >
              {i18next.t(data.title)}
            </Text>
          </Link>
        ) : (
          <Text
            className="breadcrumb-item"
            style={{
              ...(props.size && {
                fontSize: props.size,
              }),
            }}
            inline
          >
            {i18next.t(data.title)}
          </Text>
        )}
      </Breadcrumb.Item>
    ))}
  </BreadcrumbWrapper>
);

export const makeBreacrumbFromPath = (path, title) => {
  const BREADCRUMB_LIST = [];
  const paths = path.split('/');
  paths.forEach((data, index) => {
    if (data === '') return;
    BREADCRUMB_LIST.push({
      title: data,
      path: `${
        BREADCRUMB_LIST[index - 1] ? BREADCRUMB_LIST[index - 1].path : ''
      }/${data}`,
    });
  });
  if (title) {
    BREADCRUMB_LIST[paths.length].title =
      title || BREADCRUMB_LIST[paths.length].title;
  }
  return BREADCRUMB_LIST;
};

CustomBreadcrumb.propTypes = {
  data: PropTypes.array,
  size: PropTypes.number,
};
export default CustomBreadcrumb;

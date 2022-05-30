import React from 'react';
import i18next from 'i18next';
import { Empty } from 'antd';

const EmptyPage = () => {
  return (
    <Empty
      description={
        <p>{i18next.t('programs.noPrograms')}</p>
      }
    />
  );
};

export default EmptyPage;

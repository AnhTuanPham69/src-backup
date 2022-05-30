import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { Tag, Tabs } from 'antd';
import { Link, useHistory, useLocation } from 'react-router-dom';
import RestFieldItem from 'components/RestField/RestFieldItem';
import ActionGroup from 'components/RestActions/ActionGroup';
import EditButton from 'components/RestActions/EditButton';
import DeleteButton from 'components/RestActions/DeleteButton';
import DuplicateButton from 'components/RestActions/DuplicateButton';
import { CMS_CONTENT_TYPES, CMS_STATUS } from 'configs/localData';

import { getFilterFromUrl, getSearch } from 'utils/tools';
import CustomBreadcrumb from 'components/common/Breadcrumb';
import { useDispatch } from 'react-redux';
import { getAllCms } from '@redux/cms/actions';
import { formatDateTime } from 'utils/textUtils';
// import { LOCALES } from '../../../configs/localData';
import List from '../../rest/List';
import { DescView } from './styles';

const CmsList = (props) => {
  const { push } = useHistory();
  const location = useLocation();
  const filter = getFilterFromUrl(location?.search);
  const dispatch = useDispatch();
  const onChangeTab = (value) => {
    const tab = CMS_CONTENT_TYPES.find((e) => e.value === value);
    push(`/cms?${getSearch(tab.initialFilter)}`);
    dispatch(
      getAllCms({
        data: { limit: 20, offset: 0, ...tab.initialFilter },
        options: { isRefresh: true },
      }),
    );
  };

  return (
    <>
      <CustomBreadcrumb
        data={[
          {
            title: 'CMS',
            path: `/cms`,
          },
        ]}
      />
      <Tabs onChange={onChangeTab} activeKey={filter?.filter?.type || 'page'}>
        {[CMS_CONTENT_TYPES[0]].map((e) => (
          <Tabs.TabPane tabKey={e.value} key={e.value} tab={i18next.t(e.text)}>
            <DescView className="shadow-card">
              <h1>
                <b>NOTE</b>
              </h1>
              {i18next.t(e.desc)}
            </DescView>
          </Tabs.TabPane>
        ))}
      </Tabs>
      <List
        {...props}
        initialFilter={
          filter?.filter?.type ? {} : CMS_CONTENT_TYPES[0]?.initialFilter
        }
        noCardWrapper
        isScroll={false}
        redirects={{ edit: 'screen', create: 'screen' }}
        resource="cms"
        hasActions
        defaultOptions={{
          customApiResource: 'cms-pages',
        }}
      >
        <RestFieldItem
          format={(data, record) => (
            <div style={{ width: 150 }}>
              <Link to={`cms/${record.id}/edit`}>{data}</Link>
            </div>
          )}
          hasSearch
          sorter
          source="title"
          header="cms.cmsTitle"
          width={200}
        />
        <RestFieldItem
          format={(data) => <div style={{ width: 150 }}>{data}</div>}
          hasSearch
          source="path"
          header="cms.url"
        />
        <RestFieldItem
          width={150}
          format={(data) => `${data?.firstName || ''} ${data?.lastName || ''}`}
          source="user"
          header="cms.updateBy"
        />
        <RestFieldItem
          format={(data) => (
            <div style={{ width: 150 }}>{formatDateTime(data)}</div>
          )}
          sorter
          source="updatedAt"
          header="cms.updatedAt"
        />
        <RestFieldItem
          // filters={LOCALES}
          source="locale"
          header="cms.locale"
          width={200}
        />
        <RestFieldItem
          format={(data) => {
            const status = CMS_STATUS.find((e) => e.value === data);
            return status ? (
              <Tag color={status?.color}>{i18next.t(status?.text)}</Tag>
            ) : (
              ''
            );
          }}
          filters={CMS_STATUS}
          source="status"
          header="cms.status"
        />
        <ActionGroup>
          <DuplicateButton />
          <EditButton isShowText={false} />
          <DeleteButton deleteKey="title" />
        </ActionGroup>
      </List>
    </>
  );
};

CmsList.propTypes = {
  location: PropTypes.object,
};

export default CmsList;

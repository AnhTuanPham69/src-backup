import React from 'react';
import { useDispatch } from 'react-redux';
import { ConfigProvider, Empty, Switch } from 'antd';
import i18next from 'i18next';
import moment from 'moment';
import UserInfo from 'components/RestField/UserInfo';
import ShowButton from 'components/RestActions/ShowButton';
import { editUsers } from '@redux/users/actions';
import { USER_ROLE } from 'configs/localData';
import { useHistory } from 'react-router';
import TagCustom from 'components/common/TagCustom';
import Reference from 'containers/rest/Reference';
import EditButton from 'components/RestActions/EditButton';
import Filter from '../components/Filter';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import List from '../../rest/List';
import ActionGroup from '../../../components/RestActions/ActionGroup';
// import { SwitchWrapper } from './styles';

const UsersList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
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
        filter={<Filter />}
        resource="users"
        initialFilter={{
          orderBy: 'createdAt:DESC',
        }}
        createHeader="users.createPage"
        hasCreateHeaderButton
        header="users.usersManagement"
        headerDesc="pageHeader.descUsers"
        hasCreate={false}
      >
        <Reference
          resource="businesses"
          source="businessId"
          header="users.username"
          width={200}
        >
          <RestFieldItem
            source="businessName"
            format={(businessName, row) => (
              <UserInfo
                record={{
                  ...row?.parentRecord,
                  businessName,
                  fullName:
                    row?.parentRecord?.firstName && row?.parentRecord?.lastName
                      ? `${row?.parentRecord?.firstName || ''} ${
                          row?.parentRecord?.lastName || ''
                        }`
                      : `${row?.parentRecord?.email}`,
                }}
                nameProp="fullName"
                avatarProp="avatar"
                prefixLink={`#users/${row?.parentRecord?.id}/show`}
                extraContentProp="businessName"
              />
            )}
          />
        </Reference>
        <RestFieldItem width={220} source="email" header="users.email" />
        <RestFieldItem
          source="role.name"
          header="users.role"
          width={150}
          format={(data) => (
            <TagCustom
              color={USER_ROLE.find((role) => role.value === data)?.textColor}
              backgroundColor={
                USER_ROLE.find((role) => role.value === data)?.color
              }
              name={i18next.t(
                USER_ROLE.find((role) => role.value === data)?.text,
              )}
            />
          )}
        />
        <RestFieldItem
          width={120}
          source="createdAt"
          header="users.createdAt"
          sorter
          format={(createdAt) =>
            createdAt && moment(createdAt).format('DD MMM, YYYY')}
        />
        <RestFieldItem
          source="isEnabled"
          width={88}
          header="users.status"
          format={(data, record) => (
            <Switch
              // checkedChildren="Active"
              // unCheckedChildren="DeActive"
              checked={data}
              onClick={(e) => {
                dispatch(
                  editUsers({
                    data: {
                      id: record?.id,
                      isEnabled: e,
                    },
                    options: {
                      isRequestApi: true,
                    },
                  }),
                );
              }}
            />
          )}
        />
        <ActionGroup icon="ic-more">
          {/* <ShowButton
            gotoShowPage={(id, source, record) => {
              if (record?.userPrograms?.[0]?.id) {
                history.push(
                  `/startUps?outerFilter={"q"${encodeURIComponent(
                    `:"${record?.email}"`,
                  )}}`,
                );
              } else history.push(`/users/${id}/details`);}}
          /> */}
          <ShowButton
            gotoShowPage={(id) => {
              history.push(`#users/${id}/show`);
            }}
          />
          <EditButton
            gotoEditPage={(id) => {
              history.push(`#users/${id}/edit`);
            }}
          />
        </ActionGroup>
      </List>
    </ConfigProvider>
  );
};

export default UsersList;

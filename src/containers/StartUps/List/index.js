import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ConfigProvider, Empty } from 'antd';
import i18next from 'i18next';
import moment from 'moment';
import { getStartUpSummarySelector } from '@redux/config/selectors';
import { USER_PROGRAM_STATUS } from 'configs/localData';
import { formatMoney } from 'utils/textUtils';
import UserInfo from 'components/RestField/UserInfo';
import ShowButton from 'components/RestActions/ShowButton';
import TagCustom from 'components/common/TagCustom';
import Reference from 'containers/rest/Reference';
import Filter from '../components/Filter';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import List from '../../rest/List';
import { ListWrapper } from './styles';
import SummaryRow from '../components/SummaryRow';
import ActionGroup from '../../../components/RestActions/ActionGroup';

const StartUpsList = () => {
  const summaries = useSelector(getStartUpSummarySelector);
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
      <ListWrapper>
        <List
          filter={
            <Filter
              format={(values) => {
                return {
                  ...values,
                  programProgress: {
                    $gte: values?.programProgress?.[0],
                    $lte: values?.programProgress?.[1],
                  },
                };
              }}
            />
          }
          resource="startUps"
          initialFilter={{
            orderBy: 'createdAt:DESC',
          }}
          hasCreate={false}
          summaryRow={<SummaryRow summaries={summaries} />}
          defaultOptions={{
            customApiResource: 'startup-progresses',
          }}
          headerDesc="pageHeader.descStartupDetail"
        >
          <RestFieldItem
            source="user.firstName"
            header="startUps.name"
            format={(firstName, row) => (
              <UserInfo
                prefixLink={`/startUps/${row?.id}/details/programPhase`}
                record={{
                  ...row?.user,
                  fullName:
                    firstName && row?.user?.lastName
                      ? `${firstName || ''} ${row?.user?.lastName || ''}`
                      : `${row?.user?.email}`,
                }}
                nameProp="fullName"
                avatarProp="avatar"
              />
            )}
          />
          <RestFieldItem source="user.email" header="startUps.contact" />
          <Reference
            resource="programs"
            source="programId"
            header="startUps.program"
          >
            <RestFieldItem source="name" />
          </Reference>
          <RestFieldItem
            source="createdAt"
            header="startUps.registrationDate"
            sorter
            format={(createdAt) =>
              createdAt && moment(createdAt).format('DD MMM, YYYY')}
          />
          <RestFieldItem
            sorter
            source="programProgress"
            header="startUps.progress"
            format={(data) => (
              <p>
                {formatMoney(data) || 0}
                %
              </p>)}
          />
          <RestFieldItem
            width={130}
            sorters
            source="status"
            header="startUps.status"
            format={(data) => (
              <TagCustom
                color={
                  USER_PROGRAM_STATUS.find((status) => status.value === data)
                    ?.textColor
                }
                backgroundColor={
                  USER_PROGRAM_STATUS.find((status) => status.value === data)
                    ?.color
                }
                name={i18next.t(
                  USER_PROGRAM_STATUS.find((status) => status.value === data)
                    ?.text,
                )}
              />
            )}
          />
          <ActionGroup icon="ic-more">
            <ShowButton
              gotoShowPage={(id) =>
                history.push(`/startUps/${id}/details/programPhase`)}
            />
          </ActionGroup>
        </List>
      </ListWrapper>
    </ConfigProvider>
  );
};

export default StartUpsList;

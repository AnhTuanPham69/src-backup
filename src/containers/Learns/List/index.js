import React from 'react';
import { ConfigProvider, Empty } from 'antd';
import { useParams, useHistory } from 'react-router';
import i18next from 'i18next';
import EditButton from 'components/RestActions/EditButton';
import ShowButton from 'components/RestActions/ShowButton';
import ListLayout from 'components/common/ListLayout';
import PropTypes from 'prop-types';
import UserInfo from 'components/RestField/UserInfo';
import { useDispatch } from 'react-redux';
import { editLearns } from '@redux/learns/actions';
import List from '../../rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import DeleteButton from '../../../components/RestActions/DeleteButton';
import { SwitchWrapper } from './styles';

const LearnsList = ({ showUrl, hidingDelete, hidingEdit, ...props }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { programId, phaseId, periodId } = useParams();
  const getLink = (rowId) => {
    if (showUrl) return `${showUrl}${rowId}/details`;
    return `/programs/${programId}/phases/${phaseId}/weeks/${periodId}/learns/${rowId}/details`;
  };
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
      <ListLayout>
        <List
          isUpdateRoute={false}
          resource="learns"
          hasCreate
          noCardWrapper
          defaultOptions={{
            customApiResource: 'concepts',
          }}
          initCreateData={{
            periodId,
          }}
          initialFilter={{
            limit: 100,
            filter: {
              programPhasePeriodId: {
                $eq: periodId,
              },
            },
            orderBy: 'rankNumber:ASC',
          }}
          createHeader={i18next.t('weeks.learns.addLearningConcept')}
          hasActions
          isShowPagination={false}
          {...props}
        >
          <RestFieldItem
            width={80}
            source="rankNumber"
            header="weeks.learns.rankNumber"
          />
          <RestFieldItem
            width={200}
            source="name"
            header="weeks.learns.title"
            format={(data, row) => (
              <UserInfo
                record={{
                  ...row?.name,
                  name: data,
                }}
                nameProp="name"
                showAvt={false}
                prefixLink={getLink(row?.id)}
              />
            )}
          />
          <RestFieldItem
            width={250}
            source="description"
            header="weeks.learns.description"
            format={(data) => (
              <ul style={{ listStyleType: 'disc' }}>
                {data?.split('__')?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          />
          <RestFieldItem
            source="isActive"
            width={88}
            header="users.status"
            format={(data, record) => (
              <SwitchWrapper
                checkedChildren="Public"
                unCheckedChildren="Draft"
                checked={data}
                onClick={(e) => {
                  dispatch(
                    editLearns({
                      data: {
                        id: record?.id,
                        isActive: e,
                        programPhasePeriodId: record?.programPhasePeriodId,
                        name: record?.name,
                      },
                      options: {
                        isRequestApi: true,
                        customApiResource: 'concepts',
                      },
                    }),
                  );
                }}
              />
            )}
          />
          <ActionGroup icon="ic-more">
            <ShowButton
              gotoShowPage={(id) =>
                history.push(
                  showUrl
                    ? `${showUrl}${id}/details`
                    : `/programs/${programId}/phases/${phaseId}/weeks/${periodId}/learns/${id}/details`,
                )}
            />
            {!hidingEdit ? <EditButton /> : null}

            {!hidingDelete ? (
              <DeleteButton title="weeks.learns.header" deleteKey="name" />
            ) : null}
          </ActionGroup>
        </List>
      </ListLayout>
    </ConfigProvider>
  );
};

LearnsList.propTypes = {
  hidingDelete: PropTypes.bool,
  hidingEdit: PropTypes.bool,
  hasCreate: PropTypes.bool,
  showUrl: PropTypes.string,
};

LearnsList.defaultProps = {
  hidingDelete: false,
  hidingEdit: false,
};

export default LearnsList;

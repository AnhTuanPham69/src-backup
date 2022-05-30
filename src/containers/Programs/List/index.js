import React from 'react';
import { Link } from 'react-router-dom';
import { ConfigProvider, Empty, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { ACTIVE_TYPES } from 'configs/localData';
import i18next from 'i18next';
import EditButton from 'components/RestActions/EditButton';
import ShowButton from 'components/RestActions/ShowButton';
import GridPhotos from 'components/common/GridPhotos';
import UserInfo from 'components/RestField/UserInfo';
import styled from 'styled-components';
import TagCustom from 'components/common/TagCustom';
import { updateProgramCount } from '@redux/config/slice';
import { deletePrograms } from '@redux/programs/actions';
import Reference from 'containers/rest/Reference';
import PropTypes from 'prop-types';
import moment from 'moment';
import List from '../../rest/List';
import Filter from '../components/Filter';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import DeleteButton from '../../../components/RestActions/DeleteButton';

const DescriptionWrap = styled.div`
  p {
    display: -webkit-box;
    max-width: 250px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const ProgramsList = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch(
      deletePrograms({
        data: {
          id,
        },
        options: {
          isBack: false,
        },
      }),
    ).then(({ payload: { data } }) => {
      if (data) {
        dispatch(updateProgramCount(-1));
      }
    });
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
              <Link to="#programs/create">
                {i18next.t('programs.createFirst')}
              </Link>
            </div>
          }
        />
      )}
    >
      <List
        filter={
          <Filter
            format={(values) => {
              return {
                ...values,
                createdAt: {
                  $gte: values?.createdAt?.[0]?.startOf('day').toISOString(),
                  $lte: values?.createdAt?.[1]?.endOf('day').toISOString(),
                },
              };
            }}
          />
        }
        resource="programs"
        redirects={{
          edit: 'modal',
          create: 'screen',
        }}
        createHeader="programs.create"
        initialFilter={{
          orderBy: 'createdAt:DESC',
          ...(props?.businessId && {
            limit: 100,
            filter: {
              businessId: {
                $eq: props?.businessId,
              },
            },
          }),
        }}
        hasCreateHeaderButton
        hasCreate={false}
        ExtraHeaderActions={
          <Button
            onClick={() => {
              history.push('/programs/generateCMS');
            }}
          >
            {i18next.t('button.genCMS')}
          </Button>
        }
        headerDesc="pageHeader.descProgramDetail"
        {...props}
      >
        <RestFieldItem
          sorter
          source="programCode"
          header="programs.id"
          width={150}
          format={(id, row) => (
            <UserInfo
              record={{
                ...row?.id,
                id,
              }}
              nameProp="id"
              showAvt={false}
              prefixLink={`/programs/${row?.id}/phases`}
            />
          )}
        />
        {!props?.businessId && (
          <Reference
            resource="businesses"
            source="businessId"
            header="programs.businessName"
            width={200}
          >
            <RestFieldItem source="businessName" />
          </Reference>
        )}

        <RestFieldItem
          source="name"
          header="programs.name"
          format={(data) => (
            <b className="text-primary table-title-content t-14-1.57">{data}</b>
          )}
        />
        <RestFieldItem
          sorter
          width={150}
          source="totalPhase"
          header="programs.phaseNo"
          format={(data) => (
            <p style={{ textAlign: 'center', margin: 0 }}>{data}</p>
          )}
        />
        <RestFieldItem
          source="description"
          header="programs.description"
          format={(data) => (
            <DescriptionWrap>
              <p className="block-with-text">{data}</p>
            </DescriptionWrap>
          )}
        />
        <RestFieldItem
          source="content"
          header="programs.content2"
          format={(data) => (
            <DescriptionWrap>
              <p className="block-with-text">{data}</p>
            </DescriptionWrap>
          )}
        />
        <RestFieldItem
          source="createdAt"
          header="programs.createdAt"
          sorter
          width={200}
          format={(createdAt) => (
            <p style={{ width: 200 }}>
              {createdAt && moment(createdAt).format('DD MMM, YYYY, h:mm:ss a')}
            </p>
          )}
        />
        <RestFieldItem
          source="images"
          header="programs.images"
          width={100}
          format={(data) =>
            data && (
              <GridPhotos
                images={data.map(({ url }) => url)}
                width={100}
                height={100}
              />
            )}
        />
        <RestFieldItem
          source="isActive"
          width={100}
          header="programs.isActive"
          format={(data) => (
            <TagCustom
              color={
                ACTIVE_TYPES.find((status) => status.value === data)?.textColor
              }
              backgroundColor={
                ACTIVE_TYPES.find((status) => status.value === data)?.color
              }
              name={i18next.t(
                ACTIVE_TYPES.find((status) => status.value === data)?.text,
              )}
            />
          )}
        />
        <ActionGroup icon="ic-more">
          <ShowButton
            gotoShowPage={(id) => history.push(`/programs/${id}/phases`)}
          />
          {/* <ShowButton
            icon={<FolderOpenOutlined />}
            gotoShowPage={(id) => history.push(`#programs/${id}`)}
          /> */}
          <EditButton />
          <DeleteButton deleteItem={deleteItem} deleteKey="name" />
        </ActionGroup>
      </List>
    </ConfigProvider>
  );
};

ProgramsList.propTypes = {
  businessId: PropTypes.string,
};

ProgramsList.defaultProps = {};
export default ProgramsList;

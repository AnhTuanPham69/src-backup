import React, { useEffect, useState } from 'react';
import { Col, Empty } from 'antd';
import { Link } from 'react-router-dom';
import i18next from 'i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import crudSelectors from '@redux/crudSelectors';
import { convertObjToSearchStr } from 'utils/tools';
import PageTitle from 'components/common/PageTitle';
import CustomBreadcrumb from 'components/common/Breadcrumb';
import { clearData } from '@redux/periods/actions';
import { getByIdPrograms } from '@redux/programs/actions';
import { getByIdProgramPhases } from '@redux/programPhases/actions';
import List from '../../rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import WeeksColumn from '../components/WeeksColumn';
import WeeksDetail from '../components/WeeksDetail';
import ListStyles from './styles';

const WeeksList = () => {
  const [detailLoading, setDetailLoading] = useState(false);
  const dispatch = useDispatch();
  const { programId, phaseId, periodId } = useParams();
  const history = useHistory();
  const isValidId = periodId !== 'loading';
  const weeks = useSelector(crudSelectors.periods.getDataArr);
  // const loading = useSelector(crudSelectors.periods.getLoading);
  const gotoCreatePage = () => {
    history.push(
      `#periods/create?${convertObjToSearchStr({
        programPhaseId: phaseId,
      })}`,
    );
  };
  const gotoEditPage = (id) => {
    history.push(`#periods/${id}/edit`);
  };
  const currentProgram = useSelector((state) => state.programs.currentData);
  const currentPhase = useSelector((state) => state.programPhases.currentData);

  const breadCrumbs = [
    {
      title: 'programs.header',
      path: '/programs',
    },
    {
      title: currentProgram?.name,
      path: `/programs/${programId}/phases`,
    },
  ];
  useEffect(() => {
    return () => {
      dispatch(clearData());
    };
  }, []);
  useEffect(() => {
    dispatch(
      getByIdPrograms({
        data: {
          id: programId,
        },
        options: {
          isRequestApi: true,
        },
      }),
    );
  }, [programId]);

  useEffect(() => {
    dispatch(
      getByIdProgramPhases({
        data: {
          id: phaseId,
        },
        options: {
          isRequestApi: true,
          customApiResource: 'program-phases',
        },
      }),
    );
  }, [phaseId]);

  useEffect(() => {
    if (!isValidId && weeks[0]?.id) {
      history.push(
        `/programs/${programId}/phases/${phaseId}/weeks/${weeks[0]?.id}/learns`,
      );
    }
  }, [isValidId, programId, phaseId, weeks]);
  return (
    <>
      <PageTitle>
        <CustomBreadcrumb data={breadCrumbs} />
        <Link
          to={`/programs/${programId}/phases/${phaseId}`}
          style={{ color: '#000' }}
        >
          <p style={{ margin: 0, padding: 0 }}>
            {i18next.t('weeks.program', {
              programName: currentPhase?.name,
            })}
          </p>
        </Link>
        <div className="desc-header">
          {i18next.t('pageHeader.descProgramDetail')}
        </div>
      </PageTitle>
      <ListStyles gutter={16} align="stretch">
        <Col className="week-column first-column" span={3}>
          <List
            resource="periods"
            hasCreate={false}
            noCardWrapper
            defaultOptions={{
              customApiResource: 'program-phase-periods',
            }}
            initialFilter={{
              filter: {
                programPhaseId: {
                  $eq: phaseId,
                },
              },
              orderBy: 'periodNumber:ASC',
            }}
            isUpdateRoute={false}
            customLayout={
              <WeeksColumn
                setDetailLoading={setDetailLoading}
                gotoCreatePage={gotoCreatePage}
                gotoEditPage={gotoEditPage}
              />
            }
            isShowPagination={false}
          >
            <RestFieldItem sorter source="id" header="periods.id" />
            <RestFieldItem
              source="name"
              header="periods.title"
              format={(data) => (
                <b className="text-primary t-14-1.57">{data}</b>
              )}
            />
            <RestFieldItem source="description" header="periods.description" />
          </List>
        </Col>
        <Col className="week-column second-column" span={21}>
          {weeks?.length !== 0 &&
            !detailLoading &&
            isValidId && (
              <div className="week-column-detail">
                <WeeksDetail />
              </div>
            )}
          {/* {(detailLoading || loading) && (
            <div className="empty-section">
              <Spin />
            </div>
          )} */}
          {weeks?.length === 0 && <Empty />}
        </Col>
      </ListStyles>
    </>
  );
};

WeeksList.propTypes = {};

export default WeeksList;

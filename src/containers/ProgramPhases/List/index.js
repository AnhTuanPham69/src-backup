import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { ConfigProvider, Empty, Spin } from 'antd';
import i18next from 'i18next';
import PageTitle from 'components/common/PageTitle';
import CustomBreadcrumb from 'components/common/Breadcrumb';
import crudSelectors from '@redux/crudSelectors';
import List from '../../rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import { getByIdPrograms } from '../../../@redux/programs/actions';
import NoteRow from '../components/NoteRow';
import PhaseRow from '../PhaseRow';

const ProgramPhasesList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { programId } = useParams();

  const currentProgram = useSelector((state) => state.programs.currentData);
  const loadingPrograms = useSelector(crudSelectors.programs.getLoading);

  const BREADCRUMB = [
    {
      title: 'programs.header',
      path: '/programs',
    },
    {
      title: `${currentProgram?.name || ''}`,
    },
  ];

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

  const handleClickAddPhase = () => {
    history.push(`#programPhases/create?programId="${programId}"`);
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
              <Link to="#programPhases/create">
                {i18next.t('programPhases.createFirst')}
              </Link>
            </div>
          }
        />
      )}
    >
      <CustomBreadcrumb data={BREADCRUMB} />
      <PageTitle>
        <div className="desc-header">
          {i18next.t('pageHeader.descProgramDetail')}
        </div>
      </PageTitle>

      
      {loadingPrograms ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Spin />
        </div>
      ): (
        <NoteRow
          url={currentProgram?.images?.[0]?.url}
          programName={currentProgram?.name}
          description={currentProgram?.description}
          handleClickAddPhase={handleClickAddPhase}
        />
      )}
      <List
        resource="programPhases"
        isShowPagination={false}
        initCreateData={{
          programId,
        }}
        initialFilter={{
          filter: {
            limit: 100,
            programId: {
              $eq: programId,
            },
          },
          orderBy: 'createdAt:DESC',
        }}
        defaultOptions={{
          customApiResource: 'program-phases',
        }}
        createHeader="programPhases.create"
        noCardWrapper
        customLayout={<PhaseRow resourceData={currentProgram?.programPhases} />}
      >
        <RestFieldItem
          width={80}
          sorter
          source="phaseNumber"
          header="programPhases.phaseNumber"
        />
      </List>
    </ConfigProvider>
  );
};

ProgramPhasesList.propTypes = {};

export default ProgramPhasesList;

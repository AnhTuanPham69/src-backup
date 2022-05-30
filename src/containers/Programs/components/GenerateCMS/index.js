import React, { useState, useEffect } from 'react';
import { Button, ConfigProvider, Empty } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import xor from 'lodash/xor';
import i18next from 'i18next';
import List from 'containers/rest/List';
import RestFieldItem from 'components/RestField/RestFieldItem';
import ActionGroup from 'components/RestActions/ActionGroup';
import {
  generateCMS,
  getSelectedPhases,
} from '@redux/programPhases/actions';
import Filter from 'containers/ProgramPhases/components/Filter';
import CustomBreadcrumb from 'components/common/Breadcrumb';
import PageTitle from 'components/common/PageTitle';
import SelectPhase from './SelectPhase';

const GenerateCMS = () => {
  const dispatch = useDispatch();
  const [selectedPhases, setSelectedPhases] = useState([]);
  const loading = useSelector((state) => state.programPhases.cmsLoading);

  const handleSelectPhase = (id) => () => {
    setSelectedPhases((selectedPhases) => xor(selectedPhases, [id]));
  };

  const handleGenerate = () => {
    dispatch(
      generateCMS({
        programPhaseIds: selectedPhases,
      }),
    );
  };

  useEffect(() => {
    dispatch(getSelectedPhases()).then(({ payload }) => {
      setSelectedPhases(payload);
    });
  }, []);

  const BREADCRUMB = [
    {
      title: 'programs.header',
      path: '/programs',
    },
    {
      title: 'generateCMS.header',
    },
  ];

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
      <PageTitle
        extraAction={
          <Button type="primary" onClick={handleGenerate} loading={loading}>
            {i18next.t('generateCMS.btnGenerateCMS', {
              count: selectedPhases?.length,
            })}
          </Button>
        }
      >
        <CustomBreadcrumb data={BREADCRUMB} />
        <div className="desc-header">
          {i18next.t('pageHeader.descGenerateCMS')}
        </div>
      </PageTitle>

      <List
        filter={<Filter />}
        resource="programPhases"
        initialFilter={{
          limit: 10,
          page: 1,
          offset: 0,
          orderBy: 'createdAt:DESC',
        }}
        defaultOptions={{
          customApiResource: 'program-phases',
        }}
        hasCreateHeaderButton={false}
        getFromUrl={false}
        createHeader="programPhases.create"
        noCardWrapper
      >
        <ActionGroup fixed="left">
          <SelectPhase
            selectedPhases={selectedPhases}
            handleCheck={handleSelectPhase}
          />
        </ActionGroup>
        <RestFieldItem
          width={100}
          sorter
          source="phaseNumber"
          header="programPhases.phaseNumber"
          format={(item) => <p style={{ marginLeft: 20 }}>{item}</p>}
        />
        <RestFieldItem
          width={150}
          sorter
          source="name"
          header="programPhases.name"
        />
        <RestFieldItem
          sorter
          source="program.name"
          header="programPhases.program"
          width={150}
        />
        <RestFieldItem
          sorter
          source="programPlanSubscription.price"
          header="programPhases.subscriptionPlan"
          format={(price, row) => (
            <div>
              {`$${price || 0}/${
                row?.programPlanSubscription?.unit?.toLowerCase() || 'month'
              }`}
            </div>
          )}
          width={150}
        />
        <RestFieldItem
          sorter
          source="programPlanSubscription.features"
          header="programPhases.features"
          format={(features) => (
            <div>
              {features?.map((feature) => ` ${feature?.trim()}`)?.toString()}
            </div>
          )}
        />
      </List>
    </ConfigProvider>
  );
};

export default GenerateCMS;

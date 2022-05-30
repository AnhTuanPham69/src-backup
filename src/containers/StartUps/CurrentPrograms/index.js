import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { ConfigProvider, Empty, Select, Spin } from 'antd';
import { PROGRAM_PHASES_STATUS } from 'configs/localData';
import { PERIOD_TYPES } from '@enouvo/uikit/src/configs/localData';
import i18next from 'i18next';
import { formatMoney } from 'utils/textUtils';
import { getProgramPhases, clearProgramPhases } from '@redux/startUps/actions';
import ShowButton from 'components/RestActions/ShowButton';
import UserInfo from 'components/RestField/UserInfo';
import TagCustom from 'components/common/TagCustom';
import { CurrentProgramsWrapper } from './styles';
import List from '../../rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';

const { Option } = Select;

const CurrentPrograms = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const programPhases = useSelector((state) => state.startUps.programPhases);
  const [detailLoading, setDetailLoading] = useState(false);
  const [phaseId, setPhaseId] = useState('');

  const handleChange = (phaseId) => {
    setPhaseId(phaseId);
    setDetailLoading(true);
    const timeout = setTimeout(() => {
      setDetailLoading(false);
      clearTimeout(timeout);
    }, 500);
  };

  const getStatus = (progress) => {
    if (progress === 100) return 'done';
    return 'onGoing';
  };

  useEffect(() => {
    setDetailLoading(true);
    dispatch(
      getProgramPhases({
        id,
        limit: 100,
      }),
    ).then((response) => {
      setDetailLoading(false);
      if (response?.payload?.items[0]?.id)
        setPhaseId(response?.payload?.items[0]?.id);
    });
  }, [id]);

  useEffect(() => {
    return () => {
      setPhaseId('');
      dispatch(clearProgramPhases());
    };
  }, []);

  return (
    <CurrentProgramsWrapper>
      <div className="header-section">
        {(phaseId || programPhases?.length > 0) && (
          <Select
            defaultValue={phaseId || programPhases[0]?.id}
            className="phase-selector"
            onChange={handleChange}
          >
            {programPhases?.map((data) => (
              <Option value={data.id}>
                {data.name}
              </Option>
            ))}
          </Select>
        )}
      </div>
      <div className="content-section">
        {detailLoading ? (
          <Spin />
        ) : (
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
            {phaseId && (
              <List
                resource="periods"
                initialFilter={{
                  orderBy: 'periodNumber:ASC',
                  filter: {
                    programPhaseId: {
                      $eq: phaseId,
                    },
                  },
                }}
                defaultOptions={{
                  customApiResource: `startup-progresses/${id}/current-programs`,
                }}
                hasCreate={false}
                noCardWrapper
              >
                <RestFieldItem
                  source="programPhase.periodType"
                  width={60}
                  header="startUps.currentPrograms.week"
                  // format={(data, row) => (
                  //   <p>
                  //     {i18next.t(PERIOD_TYPES?.[data]?.text)}
                  //     {' '}
                  //     {row.periodNumber}
                  //   </p>
                  //     )}
                  format={(data, row) => (
                    <UserInfo
                      showAvt={false}
                      record={{
                        ...row?.periodNumber,
                        name: `${i18next.t(PERIOD_TYPES?.[data]?.text)} ${
                          row.periodNumber
                        }`,
                      }}
                      nameProp="name"
                      prefixLink={`/startUps/${id}/progress/${row?.id}/concepts`}
                    />
                  )}
                />
                <RestFieldItem
                  source="description"
                  header="startUps.currentPrograms.description"
                />
                <RestFieldItem
                  // sorter
                  width={80}
                  source="userProgramPhasePeriod.programPhasePeriodProgress"
                  header="startUps.currentPrograms.progress"
                  format={(data) => (
                    <p style={{ textAlign: 'center' }}>
                      {i18next.t('startUps.currentPrograms.progressNumber', {
                        progress: formatMoney(data) || 0,
                      })}
                    </p>
                  )}
                />
                <RestFieldItem
                  width={120}
                  source="userProgramPhasePeriod.programPhasePeriodProgress"
                  header="programs.isActive"
                  format={(data) => (
                    <TagCustom
                      color={
                        PROGRAM_PHASES_STATUS.find(
                          (status) => status.value === getStatus(data),
                        )?.textColor
                      }
                      backgroundColor={
                        PROGRAM_PHASES_STATUS.find(
                          (status) => status.value === getStatus(data),
                        )?.color
                      }
                      name={i18next.t(
                        PROGRAM_PHASES_STATUS.find(
                          (status) => status.value === getStatus(data),
                        )?.text,
                      )}
                    />
                  )}
                />
                <ActionGroup icon="ic-more">
                  <ShowButton
                    gotoShowPage={(idPeriod) =>
                      history.push(
                        `/startUps/${id}/progress/${idPeriod}/concepts`,
                      )}
                  />
                </ActionGroup>
              </List>
            )}
          </ConfigProvider>
        )}
      </div>
    </CurrentProgramsWrapper>
  );
};

export default CurrentPrograms;

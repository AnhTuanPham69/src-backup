import PropTypes from 'prop-types';
import { Button, Dropdown, Modal, Affix } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react';
import i18next from 'i18next';
import { useParams, useHistory } from 'react-router';
import { Waypoint } from 'react-waypoint';
import crudSelectors from '@redux/crudSelectors';
import crudActions from '@redux/crudActions';
import { PERIOD_TYPES } from '@enouvo/uikit/src/configs/localData';
import SVGIcon, { EditIcon, TrashIcon } from 'components/common/SVGIcon';
import { WeeksColumnWrapper, MenuWrapper } from './styles';

const { confirm } = Modal;

const WeeksColumn = ({
  setDetailLoading,
  resourceData,
  retrieveList,
  gotoCreatePage,
  gotoEditPage,
}) => {
  const { programId, phaseId, periodId, periodType } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const loading = useSelector(crudSelectors.periods.getLoading);
  const enabledLoadMore = useSelector(crudSelectors.periods.enabledLoadMore);

  const handleEnterWaypoint = useCallback(() => {
    if (enabledLoadMore && !loading) {
      retrieveList({}, false);
    }
  }, [loading, enabledLoadMore, retrieveList]);
  const listButton = [
    {
      title: 'Edit',
      icon: EditIcon,
      onClick: (id) => (e) => {
        e.stopPropagation();
        gotoEditPage(id);
      },
    },
    {
      title: 'Delete',
      icon: TrashIcon,
      onClick: (id, data) => (e) => {
        e.stopPropagation();
        confirm({
          title: `${i18next.t('popup.alertDelete')} ${i18next.t(
            'weeks.header',
          )}`,
          content: i18next.t('popup.alertDeleteDes', {
            customMessage: `${i18next.t(
              PERIOD_TYPES?.[data?.programPhase?.periodType]?.text,
            )} ${data?.periodNumber || ''}`,
          }),
          okText: i18next.t('button.ok'),
          cancelText: i18next.t('button.cancel'),
          onOk: () =>
            dispatch(
              crudActions.periods.del({
                data: {
                  id,
                },
                options: {
                  isBack: false,
                  customApiResource: 'program-phase-periods',
                },
              }),
            ).then(() => {
              history.push(
                `/programs/${programId}/phases/${phaseId}/weeks/loading`,
              );
            }),
          onCancel: () => {},
        });
      },
    },
  ];
  const menu = (id, record) => (
    <MenuWrapper image={record?.logo}>
      <div className="header-dropdown">
        <h3 className="title">
          {i18next.t('programs.week')} 
          {' '}
          {record?.periodNumber}
        </h3>
        <div className="header-btn">
          {listButton.map((data, index) => (
            <Button
              onClick={data.onClick(id, record)}
              key={`btn-${String(index)}`}
            >
              <data.icon />
            </Button>
          ))}
        </div>
      </div>
      <p className="name">{record?.name}</p>
      <p className="desc">{record?.description}</p>
    </MenuWrapper>
  );
  const handleClick = () => {
    gotoCreatePage();
  };
  const handleClickWeekLine = (id) => () => {
    setDetailLoading(true);
    history.push(
      `/programs/${programId}/phases/${phaseId}/weeks/${id}${
        periodType ? `/${periodType}` : ''
      }`,
    );
    const timeout = setTimeout(() => {
      setDetailLoading(false);
      clearTimeout(timeout);
    }, 500);
  };

  return (
    <WeeksColumnWrapper>
      <h3>{i18next.t('weeks.header')}</h3>
      <div className="content-section">
        {resourceData.map((data, index) => (
          <div key={data?.id} className="wrap">
            <div
              role="presentation"
              className={`${periodId === data.id && 'active-line'} week-line`}
              key={`week-${String(index)}`}
              onClick={handleClickWeekLine(data.id)}
            >
              <p>
                {`${i18next.t(
                  PERIOD_TYPES?.[data.programPhase?.periodType]?.text,
                )} ${data.periodNumber || 0}`}
              </p>
              <Dropdown overlay={menu(data.id, data)}>
                <SVGIcon type="more" />
              </Dropdown>
            </div>
          </div>
        ))}
        {/* {loading && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Spin />
          </div>
        )} */}
        <Waypoint onEnter={handleEnterWaypoint} />
      </div>
      <div className="btn-wrap">
        <Affix offsetBottom={20}>
          <Button
            type="primary"
            icon={<SVGIcon type="plus" />}
            onClick={handleClick}
          >
            {i18next.t('button.add')}
          </Button>
        </Affix>
      </div>
    </WeeksColumnWrapper>
  );
};

WeeksColumn.propTypes = {
  resourceData: PropTypes.array,
  retrieveList: PropTypes.func,
  gotoCreatePage: PropTypes.func,
  gotoEditPage: PropTypes.func,
  setDetailLoading: PropTypes.func,
};

export default WeeksColumn;

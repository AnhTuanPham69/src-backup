import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import i18next from 'i18next';
import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import crudActions from '@redux/crudActions';
import { PhaseRowWrapper } from './styles';

const { confirm } = Modal;

const PhaseRow = ({ resourceData }) => {
  const { programId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const gotoEditPage = (id) => () => {
    history.push(`#programPhases/${id}/edit`);
  };

  const gotoShowPage = (id) => () => {
    history.push(`/programs/${programId}/phases/${id}/weeks/loading`);
  };

  const handleClickDelete = (id, data) => (e) => {
    e.stopPropagation();
    confirm({
      title: `${i18next.t('popup.alertDelete')} ${i18next.t('programPhases.header')}`,
      content: i18next.t('popup.alertDeleteDes', {
        customMessage: data?.name,
      }),
      okText: i18next.t('button.ok'),
      cancelText: i18next.t('button.cancel'),
      onOk: () =>
        dispatch(
          crudActions.programPhases.del({
            data: {
              id,
            },
            options: {
              isBack: false,
              customApiResource: 'program-phases',
            },
          }),
        ),
      onCancel: () => {},
    });
  };
  return (
    <PhaseRowWrapper>
      {resourceData?.map((item) => (
        <div className="phase-card">
          <div className="header-section">
            <div className="phase-title">
              <h3>
                {i18next.t('programPhases.phasesTitle', {
                  phaseNumber: item.phaseNumber,
                  phaseName: item.name,
                })}
              </h3>
              <p>
                &nbsp; &#183; &nbsp;
                {item.totalPeriod} 
                {' '}
                {i18next.t('programPhases.week')}
              </p>
            </div>
          </div>
          <div className="desc-row">
            <p>{item.description}</p>
          </div>
          <div className="footer-section">
            <div className="price-section">
              <span className="price">
                {`$${item?.programPlanSubscription?.price || 0}`}
              </span>
              /
              {i18next.t('programPhases.month')}
              {/* {`/${item?.programPlanSubscription?.unit?.toLowerCase() || 'month'}`} */}
            </div>
            <div className="btn-row">
              <Button onClick={gotoShowPage(item.id)}>
                <EyeOutlined />
              </Button>
              <Button onClick={gotoEditPage(item.id)}>
                <EditOutlined />
              </Button>
              <Button onClick={handleClickDelete(item.id, item)}>
                <DeleteOutlined />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </PhaseRowWrapper>
  );
};

PhaseRow.propTypes = {
  resourceData: PropTypes.array,
};

export default PhaseRow;

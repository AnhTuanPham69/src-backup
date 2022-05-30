import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import i18next from 'i18next';
import crudActions from '@redux/crudActions';
import { Button, Modal } from 'antd';
import { EditIcon, TrashIcon } from 'components/common/SVGIcon';
import { StepItemWrapper } from './styles';

const { confirm } = Modal;

const StepItem = ({ step, gotoEditPage }) => {
  const dispatch = useDispatch();
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
            'weeks.todoSteps.header',
          )}`,
          content: i18next.t('popup.alertDeleteDes', {
            customMessage: `${data?.title}`,
          }),
          okText: i18next.t('button.ok'),
          cancelText: i18next.t('button.cancel'),
          onOk: () => {
            dispatch(
              crudActions.todoSteps.del({
                data: {
                  id,
                },
                options: {
                  isBack: false,
                  customApiResource: 'todo-steps',
                },
              }),
            )
          },
          onCancel: () => {},
        });
      },
    },
  ];
  
  return (
    <StepItemWrapper>
      <div className="header-section">
        <h3>{step.title}</h3>
        <div className="actions-section">
          {listButton.map((data, index) => (
            <Button onClick={data.onClick(step.id, step)} key={`btn-${String(index)}`}>
              <data.icon />
            </Button>
          ))}
        </div>
      </div>
      {step?.options?.map((item) => (
        <div className="step-row">
          <p>{item.name || item}</p>
        </div>
      ))}
    </StepItemWrapper>
  );
};

StepItem.propTypes = {
  step: PropTypes.object,
  gotoEditPage: PropTypes.func,
};

export default StepItem;

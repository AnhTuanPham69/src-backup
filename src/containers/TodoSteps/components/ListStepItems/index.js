import React, { useMemo, useState } from 'react';
import { Button, Empty, Spin, Divider } from 'antd';
import { useSelector } from 'react-redux';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import SVGIcon from 'components/common/SVGIcon';
import orderBy from 'lodash/orderBy';
import InlineCreate from '../../Create/InlineCreate';
import InlineEdit from '../../Edit/InlineEdit';
import StepItem from '../StepItem';
import { ListStepItemsWrapper } from './styles';

const ListStepItems = ({ todoId, resourceData }) => {
  const loading = useSelector(state => state.todoSteps.loading);
  const steps = useMemo(() => orderBy(resourceData, ['createdAt'], ['asc']), [resourceData]);
  const [isShowCreate, setIsShowCreate] = useState(false);
  const [stepId, setStepId] = useState(false);
  const createLoading = useSelector(state => state.todoSteps.createLoading);

  const handleClickCreate = () => {
    setIsShowCreate(true);
    setStepId(false);
  }

  const handleClickEdit = id => {
    window.scrollTo(0, 0)
    setIsShowCreate(false);
    setStepId(id);
  }

  return (
    <ListStepItemsWrapper>
      <div className="header-section">
        <h2 className="header">{`${i18next.t('weeks.todos.todoSteps')} |`}</h2>
        <Button type="primary" onClick={handleClickCreate}>
          <SVGIcon type="plus" />
          {i18next.t('weeks.todoSteps.add')}
        </Button>
      </div>
      {isShowCreate && (
        <>
          <InlineCreate loading={createLoading} toDoId={todoId} onCancel={() => setIsShowCreate(false)} />
          <Divider />
        </>
      )}
      {!!stepId && (
        <>
          <InlineEdit stepId={stepId} toDoId={todoId} onCancel={() => setStepId(false)} />
          <Divider />
        </>
      )}
      {steps?.map((data, index) => (
        <div key={`todos-${String(index)}`}>
          <StepItem step={data} gotoEditPage={handleClickEdit} />
        </div>
      ))}
      {loading && (<Spin style={{paddingTop: 100, width: '100%', textAlign: 'center'}} />)}
      {!resourceData?.length && !loading && (<Empty style={{paddingTop: 100}} description={false} />)}
    </ListStepItemsWrapper>
  );
};

ListStepItems.propTypes = {
  resourceData: PropTypes.array,
  todoId: PropTypes.string,
};

ListStepItems.defaultProps = {
};

export default ListStepItems;

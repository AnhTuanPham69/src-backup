import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Col, Button } from 'antd';
import { RestInputContext } from 'components/RestInput/RestInputContext';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import { todoStepsSelectors } from '@redux/todoSteps/selectors';
import { editTodoSteps, getByIdTodoSteps, clearCurrentTodoSteps } from '@redux/todoSteps/actions';
import StepForm from '../components/Form';

const InlineEdit = ({ stepId, toDoId, onCancel }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const currentStep = useSelector(todoStepsSelectors.getCurrentData);
  const record = useMemo(() => ({
    ...currentStep,
    options: currentStep.options?.map(option => option.name),
  }), [currentStep])

  const handleSubmit = values => {
    dispatch(editTodoSteps({
      data: {
        ...values,
        options: values.options?.map(option => ({
          name: option,
        })),
        toDoId,
        id: stepId,
      },
      options: {
        customApiResource: 'todo-steps',
      },
    })).then(() => onCancel());
  }

  useEffect(() => {
    if (stepId) {
      dispatch(getByIdTodoSteps({
        data: {
          id: stepId,
        },
        options: {
          isRequestApi: true,
          customApiResource: 'todo-steps',
        },
      })).then(({ payload }) => {
        const { data } = payload || {};
        form.setFieldsValue({
          title: data.title,
          options: data.options?.map(option => option.name),
        })
      })
    }
    return () => {
      dispatch(clearCurrentTodoSteps());
    }
  }, [stepId])

  return (
    <RestInputContext.Provider value={{ form, record }}>
      <FormStyles layout="vertical" form={form} onFinish={handleSubmit}>
        <StepForm />
        <Row gutter={20} className="actions-section">
          <Col span={12}>
            <Button onClick={onCancel}>
              {i18n.t('button.cancel')}
            </Button>
          </Col>
          <Col span={12}>
            <Button type="primary" htmlType="submit">
              {i18n.t('button.save')}
            </Button>
          </Col>
        </Row>
      </FormStyles>
    </RestInputContext.Provider>
  )
}

const FormStyles = styled(Form)`
  .actions-section {
    margin-top: 24px;

    .ant-btn {
      width: 100%;
      display: flex;
      justify-content: center;  
    }
  }
`;

InlineEdit.propTypes = {
  onCancel: PropTypes.func,
  toDoId: PropTypes.string,
  stepId: PropTypes.string,
}

export default InlineEdit;

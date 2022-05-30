import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Row, Col, Button } from 'antd';
import { RestInputContext } from 'components/RestInput/RestInputContext';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import { createTodoSteps } from '@redux/todoSteps/actions';
import StepForm from '../components/Form';

const InlineCreate = ({ toDoId, onCancel, loading }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSubmit = values => {
    dispatch(createTodoSteps({
      data: {
        ...values,
        options: values.options.map(option => ({
          name: option,
        })),
        toDoId,
      },
      options: {
        customApiResource: 'todo-steps',
      },
    })).then(() => onCancel());
  }
  return (
    <RestInputContext.Provider value={{ form }}>
      <FormStyles layout="vertical" form={form} onFinish={handleSubmit}>
        <StepForm />
        <Row gutter={20} className="actions-section">
          <Col span={12}>
            <Button onClick={onCancel}>
              {i18n.t('button.cancel')}
            </Button>
          </Col>
          <Col span={12}>
            <Button loading={loading} type="primary" htmlType="submit">
              {i18n.t('button.add')}
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

InlineCreate.propTypes = {
  onCancel: PropTypes.func,
  toDoId: PropTypes.string,
  loading: PropTypes.bool,
}

export default InlineCreate;

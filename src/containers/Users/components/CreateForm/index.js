import React from 'react';
import { Row, Col } from 'antd';
import RestInputItem from 'components/RestInput/RestInputItem';
import RestSelect from 'components/RestInput/RestSelect';
import { CREATE_USER_ROLE } from 'configs/localData';
import i18next from 'i18next';
import ReferenceInput from 'containers/rest/ReferenceInput';
import PropTypes from 'prop-types';

const CreateUserForm = ({ role, setRole }) => {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <RestInputItem required source="firstName" header="users.firstName" />
      </Col>
      <Col span={12}>
        <RestInputItem required source="lastName" header="users.lastName" />
      </Col>
      <Col span={24}>
        <RestInputItem
          required
          source="email"
          header="users.email"
          rules={[
            { required: true, message: i18next.t('emailRequire') },
            { type: 'email', message: i18next.t('emailUnValid') },
          ]}
        />
        <RestSelect
          required
          source="roleName"
          header="users.userType"
          placeholder="users.placeholder.role"
          resourceData={CREATE_USER_ROLE}
          onChange={(_, optionData) => {
            setRole(optionData.value);
          }}
          formatText={(val) => i18next.t(val)}
        />
      </Col>
      {(role === 'admin' || role === 'coach') && (
        <Col span={24}>
          <ReferenceInput
            resource="businesses"
            source="businessId"
            initialFilter={{
              filter: {
                isActive: {
                  $eq: true,
                },
              },
            }}
          >
            <RestSelect
              header="users.businesses"
              placeholder="users.placeholder.businesses"
              valueProp="id"
              titleProp="businessName"
              required
            />
          </ReferenceInput>
        </Col>
      )}
    </Row>
  );
};

CreateUserForm.propTypes = {
  setRole: PropTypes.func,
  role: PropTypes.string,
};

export default CreateUserForm;

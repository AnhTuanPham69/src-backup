import React from 'react';
import { Row, Col, Select } from 'antd';
import { PictureOutlined } from '@ant-design/icons';
import RestInputItem from 'components/RestInput/RestInputItem';
import RestAvatarInput from 'components/RestInput/RestAvatarInput';
import ReferenceInput from 'containers/rest/ReferenceInput';
import RestSelect from 'components/RestInput/RestSelect';
import PropTypes from 'prop-types';
import RestPhoneInput from 'components/RestInput/RestPhoneInput';

const UsersForm = ({ userRole }) => {
  const handleKeyPress = (e) => (e.keyCode === 13 ? e.preventDefault() : '');

  return (
    <Row gutter={16}>
      <Col span={8}>
        <Row gutter={14}>
          <Col span={24}>
            <RestAvatarInput
              width={150}
              height={150}
              defaultIcon={<PictureOutlined />}
              cropDimension={{ width: 300, height: 300 }}
              hasCrop={false}
              source="avatar"
            />
          </Col>
        </Row>
      </Col>
      <Col span={16}>
        <Row gutter={14}>
          <Col span={12}>
            <RestInputItem source="firstName" header="users.firstName" />
          </Col>
          <Col span={12}>
            <RestInputItem source="lastName" header="users.lastName" />
          </Col>

          <Col span={12}>
            <RestInputItem source="email" header="users.email" disabled />
          </Col>
          <Col span={12}>
            <RestPhoneInput source="phone" header="users.phoneNumber" />
          </Col>
        </Row>
      </Col>
      {userRole === 'coach' || userRole === 'admin' ? (
        <Col span={24}>
          {/* <RestInputItem source="companyName" header="users.companyName" /> */}
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
      ) : (
        <Col span={24}>
          <RestInputItem
            source="companyName"
            header="users.companyName"
            placeholder="users.companyNamePlaceholder"
          />
        </Col>
      )}

      <Col span={24}>
        <RestInputItem
          source="address"
          header="users.address"
          placeholder="users.addressPlaceholder"
        />
      </Col>

      <Col span={24}>
        <Row gutter={14}>
          <Col span={24}>
            <RestInputItem
              source="sector"
              header="users.sector"
              placeholder="users.sectorPlaceholder"
              ContentComponent={Select}
              mode="tags"
              open={false}
              ruleType="array"
              onKeyDown={handleKeyPress}
            />
          </Col>
          <Col span={12}>
            <RestInputItem source="privateEmail" header="users.privateEmail" />
          </Col>
          <Col span={12}>
            <RestPhoneInput source="privatePhone" header="users.privatePhone" />
          </Col>
          <Col span={8}>
            <RestInputItem source="facebookLink" header="Facebook" />
          </Col>
          <Col span={8}>
            <RestInputItem source="linkedinLink" header="Linked In" />
          </Col>
          <Col span={8}>
            <RestInputItem source="twitterLink" header="Twitter" />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

UsersForm.propTypes = {
  userRole: PropTypes.string,
};

export default UsersForm;

import React from 'react';
import { Row, Col, Select } from 'antd';
import { PictureOutlined } from '@ant-design/icons';
import RestInputItem from 'components/RestInput/RestInputItem';
import RestAvatarInput from 'components/RestInput/RestAvatarInput';

const UsersForm = () => {
  const handleKeyPress = e => e.keyCode === 13 ? e.preventDefault() : '';

  return (
    <Row gutter={16}>
      <Col span={8}>
        <Row gutter={14}>
          <Col span={24}>
            <RestAvatarInput
              style={{
                width: 150,
                height: 150,
                borderRadius: '50%',
              }}
              className="avatar-section"
              defaultIcon={<PictureOutlined />}
              defaultText="picture"
              cropDimension={{ width: 300, height: 300 }}
              hasCrop={false}
              source="user.avatar"
            />
          </Col>
        </Row>
      </Col>
      <Col span={16}>
        <Row gutter={14}>
          <Col span={12}>
            <RestInputItem source="user.firstName" header="users.firstName" />
          </Col>
          <Col span={12}>
            <RestInputItem source="user.lastName" header="users.lastName" />
          </Col>

          <Col span={12}>
            <RestInputItem source="user.email" header="users.email" disabled />
          </Col>
          <Col span={12}>
            <RestInputItem source="user.phone" header="users.phoneNumber" />
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <RestInputItem 
          source="user.sector" 
          header="users.sector"
          placeholder="users.sectorPlaceholder"
          ContentComponent={Select}
          mode="tags"
          open={false}
          ruleType="array"
          onKeyDown={handleKeyPress}
        />
      </Col>
      <Col span={24}>
        <Row gutter={14}>
          <Col span={12}>
            <RestInputItem source="user.facebookLink" header="Facebook" />
          </Col>
          <Col span={12}>
            <RestInputItem source="user.privateEmail" header="users.privateEmail" />
          </Col>
          <Col span={12}>
            <RestInputItem source="user.linkedinLink" header="Linked In" />
          </Col>
          <Col span={12}>
            <RestInputItem source="user.privatePhone" header="users.privatePhone" />
          </Col>
          <Col span={12}>
            <RestInputItem source="user.twitterLink" header="Twitter" />
          </Col>
          <Col span={12}>
            <RestInputItem source="user.companyName" header="users.companyName" />
          </Col>
        </Row>
      </Col>
    </Row>
  )};

UsersForm.propTypes = {};

export default UsersForm;

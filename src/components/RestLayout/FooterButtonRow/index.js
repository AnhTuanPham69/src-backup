import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import I18n from 'i18next';
import { ButtonWrapper, FooterButtonRowWrapper } from './styles';

const ButtonRow = (props) => {
  const { loading, onBack, type, showModal, positionFooter, createText } = props;
  if (showModal) {
    return (
      <FooterButtonRowWrapper className="showTotal">
        <ButtonWrapper type="primary" loading={loading} htmlType="submit">
          {I18n.t(type === 'create' ? createText : 'button.save')}
        </ButtonWrapper>
        {!showModal && <span style={{ width: 20 }} />}
        <ButtonWrapper className="btn-back" onClick={onBack}>
          {I18n.t('button.cancel')}
        </ButtonWrapper>
      </FooterButtonRowWrapper>
    );
  }
  return (
    <Row gutter={8} type="flex" justify="end" style={{ marginTop: 20 }}>
      {positionFooter!=='center'&&(
        <Col lg={12} md={0} sm={0} xs={24} />
      )}
      <Col lg={showModal ? 12 : 3} md={3} sm={24} xs={24}>
        <ButtonWrapper htmlType="submit" type="primary" loading={loading}>
          {I18n.t(type === 'create' ? createText : 'button.save')}
        </ButtonWrapper>
      </Col>
      <Col md={0} sm={0} xs={24} />
      <Col lg={showModal ? 12 : 3} md={3} sm={24} xs={24}>
        <ButtonWrapper onClick={onBack}>
          {I18n.t('button.cancel')}
        </ButtonWrapper>
      </Col>
    </Row>
  );
};

ButtonRow.propTypes = {
  onBack: PropTypes.func,
  showModal: PropTypes.bool,
  loading: PropTypes.bool,
  type: PropTypes.oneOf(['create', 'edit']),
  positionFooter: PropTypes.string,
  createText: PropTypes.string,
};

ButtonRow.defaultProps = {
  type: 'edit',
  createText: 'button.create',
};
export default ButtonRow;

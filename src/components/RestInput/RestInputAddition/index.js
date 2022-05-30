import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import { get } from 'lodash';
import { Form, Button, Card, Row, Col, Divider } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { RestInputContext } from '../RestInputContext';

const InputAddition = ({
  addBtnText,
  children,
  defaultValue,
  disabled,
  form,
  format,
  header,
  isShowAddBtn,
  onAdd,
  onRemove,
  record,
  renderEmptyState,
  source,
  Tracker,
  trackerProps,
  hasDivider,
  addButtonType,
  isShowDeleteButton,
}) => {
  return (
    <div>
      <Form.List
        name={source}
        initialValue={format(get(record, source)) || format(defaultValue)}
        disabled={disabled}
      >
        {(fields, { add, remove }) => (
          <Card className="input-addition-card">
            {Tracker && (
              <Tracker
                add={add}
                remove={remove}
                fieldsNum={fields.length}
                {...trackerProps}
              />
            )}
            {fields.map((field, index) => (
              <Row gutter={14}>
                <Col span={24}>
                  <Row gutter={14}>
                    <Col span={22}>
                      <b className="form-counter" style={{ textTransform: 'uppercase' }}>
                        {`${I18n.t(
                        header,
                      )} ${index + 1}`}

                      </b>
                    </Col>
                    {isShowDeleteButton && (
                      <Col
                        span={2}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                        }}
                      >
                        <Button
                          className="btn-add btn-remove"
                          type="link"
                          danger
                          disabled={disabled}
                          onClick={() => {
                            remove(index);
                            onRemove && onRemove(index);
                          }}
                          icon={<DeleteOutlined />}
                        />
                      </Col>
                    )}
                  </Row>
                  <Row gutter={[14, 14]}>
                    {React.Children.map(children, (node) => (
                      node.props.isLabel ? (
                        <Col span={24}>
                          <label className={node.props.labelClassName}>
                            {I18n.t(node.props.label)}
                          </label>
                        </Col>
                      ) : (
                        <Col {...node.props.colLayout}>
                          {React.cloneElement(node, {
                            form,
                            record,
                            disabled,
                            key: `${source}.${field.fieldKey}.${node.props.source}`,
                            fieldNameProp: field.name,
                            fieldKeyProp: field.fieldKey,
                            parentSource: source,
                            source: [field.name, ...(Array.isArray(node.props.source) ? node.props.source : [node.props.source])],
                            fieldKey: [field.fieldKey, ...(Array.isArray(node.props.source) ? node.props.source : [node.props.source])],
                          })}
                        </Col>
                      )
                    ))}
                  </Row>
                </Col>
                {index + 1 < fields.length && hasDivider && (
                  <Col span={24}>
                    <Divider />
                  </Col>
                )}
              </Row>
            ))}
            {renderEmptyState && fields.length === 0 && renderEmptyState()}
            {isShowAddBtn && (
              <Button
                onClick={() => {
                  add();
                  onAdd && onAdd();
                }}
                disabled={disabled}
                type={addButtonType}
                className="btn-add w-100 add-btn"
                icon={<PlusOutlined />}
              >
                {I18n.t(addBtnText || 'button.add')}
              </Button>
            )}
          </Card>
        )}
      </Form.List>
    </div>
  );
};

InputAddition.propTypes = {
  addBtnText: PropTypes.string,
  children: PropTypes.any,
  defaultValue: PropTypes.func,
  disabled: PropTypes.bool,
  extraAction: PropTypes.func,
  form: PropTypes.object,
  format: PropTypes.func,
  hasConfirm: PropTypes.bool,
  header: PropTypes.any,
  isShowAddBtn: PropTypes.bool,
  hasDivider: PropTypes.bool,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  record: PropTypes.object,
  renderEmptyState: PropTypes.func,
  source: PropTypes.string,
  addButtonType: PropTypes.string,
  Tracker: PropTypes.node,
  trackerProps: PropTypes.object,
  isShowDeleteButton: PropTypes.bool,
};

InputAddition.defaultProps = {
  isShowDeleteButton: true,
  format: (data) => data,
  addButtonType: 'link',
};

const RestInputAddition = (props) => {
  const { record, form } = useContext(RestInputContext);
  return <InputAddition {...props} {...{ record, form }} />;
};

export default RestInputAddition;

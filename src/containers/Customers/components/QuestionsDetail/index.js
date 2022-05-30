import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import DownloadWrapper from '../../AdvancedInfos/DownloadWrapper';
import { QuestionsDetailWrapper } from './styles';

const QuestionsDetail = ({
  answers,
  handleClickBack,
  title,
}) => {
  return (
    <QuestionsDetailWrapper>
      <DownloadWrapper questionnaires={answers}>
        <Button className="down-btn" type="primary">
          Download
        </Button>
      </DownloadWrapper>
      <Card
        title={title || ''}
        bordered={false}
        extra={
          <Button onClick={handleClickBack}>
            <ArrowLeftOutlined />
          </Button>
        }
      >
        {answers?.map((data, index) => (
          <div className="answer-row">
            <h3>
              {index + 1}
              . 
              {' '}
              {data.question}
            </h3>
            <p>{data.answer}</p>
          </div>
        ))}
      </Card>
    </QuestionsDetailWrapper>
  );
};
QuestionsDetail.propTypes = {
  answers: PropTypes.array,
  handleClickBack: PropTypes.func,
  title: PropTypes.string,
};
export default QuestionsDetail;

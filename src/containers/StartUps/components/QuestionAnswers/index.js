import React from 'react';
import { Dropdown, Menu, Tooltip, Spin } from 'antd';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import SVGIcon from 'components/common/SVGIcon';
import moment from 'moment';
import i18next from 'i18next';
import DownloadWrapper from '../../AdvancedInfos/DownloadWrapper';
import { QuestionAnswersWrapper, MenuWrapper } from './styles';

const QuestionAnswers = ({ answers, name, loading, questionnaires, handleClickOpen }) => {
  const menu = (
    <MenuWrapper>
      <Menu.Item onClick={handleClickOpen}>{i18next.t('button.open')}</Menu.Item>
      <Menu.Item>
        <DownloadWrapper questionnaires={questionnaires}>{i18next.t('button.download')}</DownloadWrapper>
      </Menu.Item>
    </MenuWrapper>
  );
  return (
    <QuestionAnswersWrapper>
      {loading && <Spin style={{width: '100%', textAlign: 'center'}} />}
      {!loading && (!isEmpty(answers) ? (
        <div className="answer-row">
          <Tooltip title={answers.name} placement="rightBottom">
            <p className="name">{name}</p>
          </Tooltip>
          <p className="date">
            {moment(answers.createdAt).format('MMMM DD, YYYY')}
          </p>
          <Dropdown overlay={menu}>
            <SVGIcon type="moreHorizontal" />
          </Dropdown>
        </div>
      ) : (
        <p>{i18next.t('noData')}</p>
      ))}
    </QuestionAnswersWrapper>
  );
};

QuestionAnswers.propTypes = {
  answers: PropTypes.array,
  name: PropTypes.string,
  loading: PropTypes.bool,
  questionnaires: PropTypes.array,
  handleClickOpen: PropTypes.func,
};

QuestionAnswers.defaultProps = {
  loading: false,
};

export default QuestionAnswers;

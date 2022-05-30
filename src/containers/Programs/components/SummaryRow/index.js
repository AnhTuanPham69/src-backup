import React from 'react';
import PropTypes from 'prop-types';
import SummaryCard from '@enouvo/uikit/src/commons/SummaryCard';
import i18next from 'i18next';
import { Row, Col } from 'antd';
import SVGIcon from 'components/common/SVGIcon';
import { useHistory } from 'react-router';
import moment from 'moment';
import { formatMoney } from 'utils/textUtils';
import { SummaryRowWrapper } from './styles';

const defaultColStyles = {
  md: 6,
  sm: 12,
};

const SummaryRow = ({
  summaries,
  colStyles,
  currentMonth,
  isShowStatistic,
}) => {
  const history = useHistory();
  const handleClickCard = (path) => () => {
    history.push(path);
  };
  return (
    <SummaryRowWrapper>
      <Row type="flex" gutter={16}>
        {summaries.map((summary) => (
          <Col {...colStyles} className="summary-card">
            <SummaryCard
              icon={<SVGIcon type={summary.icon} />}
              title={i18next.t(summary.title)}
              number={formatMoney(summary?.value)}
              backgroundColor={summary.backgroundColor}
              {...(summary.path && {
                handleClickCard: handleClickCard(summary.path),
              })}
              statistic={summary?.statistic}
              currentMonth={currentMonth || moment().format('MMMM')}
              label={i18next.t(summary?.key)}
              isShowStatistic={isShowStatistic}
            />
          </Col>
        ))}
      </Row>
    </SummaryRowWrapper>
  );
};

SummaryRow.propTypes = {
  summaries: PropTypes.array,
  colStyles: PropTypes.object,
  currentMonth: PropTypes.string,
  isShowStatistic: PropTypes.bool,
};

SummaryRow.defaultProps = {
  colStyles: defaultColStyles,
  isShowStatistic: false,
};

export default SummaryRow;

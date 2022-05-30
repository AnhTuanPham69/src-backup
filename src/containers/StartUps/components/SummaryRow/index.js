import React from 'react';
import PropTypes from 'prop-types';
import SummaryCard from '@enouvo/uikit/src/commons/SummaryCard';
import i18next from 'i18next';
import { Row, Col } from 'antd';
import SVGIcon from 'components/common/SVGIcon';
import { SummaryRowWrapper } from './styles';

// const colStyles = {
//   flexBasis: '20%',
//   width: '20%',
// }

// const divStyles = {
//   padding: '0',
//   textAlign: 'center',
// };

const SummaryRow = ({ summaries }) => {
  return (
    <SummaryRowWrapper>
      <Row type="flex" gutter={16}>
        {summaries.map((summary) => (
          <Col span={6}>
            <SummaryCard
              icon={<SVGIcon type={summary.icon} />}
              title={i18next.t(summary.title)}
              number={summary.value}
              backgroundColor={summary.backgroundColor}
            />
          </Col>
        ))}
      </Row>
    </SummaryRowWrapper>
  );
};

SummaryRow.propTypes = {
  summaries: PropTypes.array,
};

export default SummaryRow;

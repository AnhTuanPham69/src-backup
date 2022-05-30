import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import i18n from 'i18next';
import SVGIcon from 'components/common/SVGIcon';
import SummaryStyles from './styles';

const Summary = ({ summaries }) => {
  return (
    <SummaryStyles>
      <div className="summary-title">{i18n.t('profile.summary')}</div>
      <div className="summary-section">
        {summaries.map((data) => (
          <div className="summary-item">
            <div style={{ background: data.backgroundColor }} className="summary-icon">
              <SVGIcon type={data.icon} className="summary-ic" />
            </div>
            <div className="summary-content">
              <div className="total">{data.value}</div>
              <div className="title">{i18n.t(data.title)}</div>
            </div>
          </div>
        ))}
      </div>
    </SummaryStyles>
  );
};

Summary.propTypes = {
  summaries: PropTypes.any,
};

export default withTheme(Summary);

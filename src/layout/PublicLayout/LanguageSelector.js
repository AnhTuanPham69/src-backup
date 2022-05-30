import React, { Fragment } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from 'configs/localData';

const Wrapper = styled.div`
  .active {
    color: ${({ theme, isPrimary }) =>
      isPrimary ? theme.palette.primary : '#000'};
  }
`;

const LanguageSelector = ({ isPrimary = false }) => {
  const { t, i18n: reactI18n } = useTranslation();

  const changeLocale = (e) => async () => {
    reactI18n.changeLanguage(e);
    localStorage.setItem('i18nextLng', e);
    window.location.reload();
  };

  return (
    <Wrapper isPrimary={isPrimary}>
      {LANGUAGES.map((menu, i) => (
        <Fragment key={menu.id}>
          <Button
            type="text"
            style={{ padding: '4px' }}
            onClick={changeLocale(menu.id)}
            className={`${
              reactI18n.language === menu.id ? 'active' : 'inactive'
            }`}
          >
            {t(menu.shortText.toUpperCase())}
          </Button>
          {i < LANGUAGES.length - 1 && '|'}
        </Fragment>
      ))}
    </Wrapper>
  );
};

LanguageSelector.propTypes = {
  isPrimary: PropTypes.bool,
};

export default LanguageSelector;

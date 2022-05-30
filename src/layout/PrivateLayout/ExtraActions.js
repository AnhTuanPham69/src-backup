import React from 'react';
import I18n from 'i18next';
import { GlobalOutlined } from '@ant-design/icons';
import { LANGUAGES } from 'configs/localData';
import { Button, Dropdown, Menu } from 'antd';
import { updateLocale } from '@redux/users/actions';
import { useDispatch } from 'react-redux';

const ExtraActions = () => {
  const dispatch = useDispatch();

  const changeLocale = (e) => async () => {
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    await dispatch(
      updateLocale({
        locale: e,
        timezone: timeZone,
      }),
    );
    I18n.changeLanguage(e);
    localStorage.setItem('i18nextLng', e);
    window.location.reload();
  };

  return (
    <Dropdown
      overlay={() => (
        <Menu style={{ minWidth: '120px' }}>
          {LANGUAGES.map((menu) => (
            <Menu.Item onClick={changeLocale(menu.id)} key={menu.id}>
              {menu.text}
            </Menu.Item>
          ))}
        </Menu>
      )}
      trigger={['click']}
    >
      <Button>
        <GlobalOutlined />
      </Button>
    </Dropdown>
  );
};

export default ExtraActions;

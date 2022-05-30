import React from 'react';
import { Button } from 'antd';
import i18next from 'i18next';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Edit from '../../rest/Edit';
import Form from '../components/Form';

const SupportsShow = (props) => {
  const history = useHistory();
  return (
    <Edit
      {...props}
      resource="supports"
      defaultOptions={{
        customApiResource: 'contact-us',
      }}
      customSubmitButton={(
        <ButtonCancelWrapper onClick={()=> history.goBack()}>
          {i18next.t('button.cancel')}
        </ButtonCancelWrapper>
      )}
    >
      <Form />
    </Edit>
  );
};

const ButtonCancelWrapper = styled(Button)`
  border-radius: 0px;
  background: ${({theme}) => theme.palette.primary};
  color:  ${({theme}) => theme.palette.light};
  border: none;
  width: 100%;
`

SupportsShow.propTypes = {};

export default SupportsShow;

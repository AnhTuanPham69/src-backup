import styled from 'styled-components';

export const FormPhoneInputStyles = styled.div`
  .react-tel-input, .form-control {
    height: 40px;
    border-radius: 6px;
    width: 100%;
    .flag-dropdown,
    .flag-dropdown.open,
    .react-tel-input .selected-flag {
      border-radius: 6px 0 0 6px !important;
    }
  }
`;

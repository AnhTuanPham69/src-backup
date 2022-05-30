import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import i18next from "i18next";
import FooterButtonsWrapper from "./styles";

const FooterButtons = ({
  loading,
  isEdit,
  onBlack,
  isPublish,
  handleSubmit,
  handlePublish,
}) => (
  <FooterButtonsWrapper>
    <Button loading={loading} onClick={handleSubmit} type="primary">
      {i18next.t("button.submit")}
    </Button>
    {isEdit && (
      <Button loading={loading} onClick={handlePublish} type="secondary">
        {isPublish ? i18next.t("button.draft") : i18next.t("button.publish")}
      </Button>
    )}
    <Button loading={loading} onClick={onBlack}>
      {i18next.t("button.cancel")}
    </Button>
  </FooterButtonsWrapper>
);
FooterButtons.propTypes = {
  handleSubmit: PropTypes.func,
  handlePublish: PropTypes.func,
  isPublish: PropTypes.bool,
  isEdit: PropTypes.bool,
  onBlack: PropTypes.func,
  loading: PropTypes.bool,
};

export default FooterButtons;

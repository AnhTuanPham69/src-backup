import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Input, Button, message } from 'antd';
import i18next from 'i18next';
import { validateRegex } from 'utils/validateUtils';
import RestInputItem from 'components/RestInput/RestInputItem';
import { RestInputContext } from 'components/RestInput/RestInputContext';
import RestSelect from 'components/RestInput/RestSelect';
import { ONBOARDING_TYPES } from 'configs/localData';
import SVGIcon from 'components/common/SVGIcon';

const OnboardingForm = ({ isEdit }) => {
  const { form } = useContext(RestInputContext);
  const prefix = <SVGIcon type="link" />;
  const suffix = (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(form.getFieldValue('videoLinks'));
        message.success(i18next.t('weeks.gets.message'));
      }}
    >
      {i18next.t('weeks.gets.getLinkBtn')}
    </Button>
  );
  return (
    <div>
      <RestInputItem
        required
        format={(data) => data?.[0]}
        source="videoLinks"
        header="weeks.learns.videoLink"
        prefix={prefix}
        suffix={suffix}
        rules={[
          {
            pattern: validateRegex.url,
            message: i18next.t('error.url'),
          },
        ]}
      />
      <RestInputItem
        required
        source="description"
        header="serviceTypes.description"
        ContentComponent={Input.TextArea}
        row={4}
      />

      <RestSelect
        required
        allowClear={false}
        source="status"
        disabled={!isEdit}
        header="onboardings.status"
        resourceData={ONBOARDING_TYPES}
      />
    </div>
  );
};

OnboardingForm.propTypes = {
  isEdit: PropTypes.bool,
};

export default OnboardingForm;

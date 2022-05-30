import { useSelector } from 'react-redux';
import React, { useContext } from 'react';
import { Input, InputNumber } from 'antd';
import RestInputItem from 'components/RestInput/RestInputItem';
import ReferenceInput from 'containers/rest/ReferenceInput';
import RestSelect from 'components/RestInput/RestSelect';
import { RestInputContext } from 'components/RestInput/RestInputContext';
import { numberWithCommas } from 'utils/textUtils';
import PropTypes from 'prop-types';
import { FormWrapper } from './styles';

const PayoutsForm = ({ isBusiness }) => {
  const businessesData = useSelector((state) => state.reference.businesses);
  const { form } = useContext(RestInputContext);

  return (
    <FormWrapper>
      <ReferenceInput
        resource="businesses"
        source="businessId"
        initialFilter={{
          filter: {
            isActive: {
              $eq: true,
            },
          },
        }}
      >
        <RestSelect
          header="payouts.businesses"
          placeholder="payouts.placeholder.businesses"
          valueProp="id"
          titleProp="businessName"
          required
          getValueFromEvent={(e) => {
            form.setFieldsValue({
              totalBalance: businessesData?.data?.[e]?.totalBalance,
            });
            return e;
          }}
          disabled={isBusiness}
        />
      </ReferenceInput>
      <RestInputItem
        source="totalBalance"
        header="payouts.totalBalance"
        disabled
        ruleType="number"
        ContentComponent={InputNumber}
        defaultValue={0}
        contentProps={{
          formatter: numberWithCommas,
          parser: (value) => value.replace(/\$\s?|(,*)/g, ''),
        }}
      />
      <RestInputItem
        source="amount"
        header="payouts.amount"
        required
        ContentComponent={InputNumber}
        // formatter={(value) =>
        //   `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        // }
        // parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
        ruleType="number"
        defaultValue={1}
        contentProps={{
          formatter: (value) =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          parser: (value) => value.replace(/\$\s?|(,*)/g, ""),
        }}
        getValueFromEvent={(value) => (value > 1 ? value : 1)}
        min={1}
      />

      <RestInputItem
        ContentComponent={Input.TextArea}
        row={4}
        source="note"
        header="payouts.note"
      />
    </FormWrapper>
  );
};

PayoutsForm.propTypes = {
  isBusiness: PropTypes.bool,
};

PayoutsForm.defaultProp = {
  isBusiness: false,
};

export default PayoutsForm;

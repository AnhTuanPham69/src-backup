import React from 'react';
import { ORDER_DETAIL_STATUS } from 'configs/localData';
import TagCustom from 'components/common/TagCustom';
import i18next from 'i18next';

export const formatBillingStatus = (data) => {
  return (
    <TagCustom
      color={ORDER_DETAIL_STATUS.find((status) => status.value === data)?.textColor}
      backgroundColor={
        ORDER_DETAIL_STATUS.find((status) => status.value === data)?.color
      }
      name={i18next.t(
        ORDER_DETAIL_STATUS.find((status) => status.value === data)?.text,
      )}
    />
  );
};

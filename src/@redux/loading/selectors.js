import some from 'lodash/some';
import { createSelector } from 'reselect';

const getLoading = (state) => state?.loading?.data;

export const pageLoadingSelector = createSelector(
  [getLoading],
  (data) => some(Object.values(data), e => e === true),
);

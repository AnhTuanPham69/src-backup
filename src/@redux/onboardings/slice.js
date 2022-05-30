import { makeCRUDSlice } from '@redux/crudCreator';
import mapValues from 'lodash/mapValues';
import { MODEL_NAME, onboardingsActions, updateStatus } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, onboardingsActions, {
  [updateStatus.fulfilled]: (state, { payload }) => {
    state.data = mapValues(state.data, data => ({
      ...data,
      ...data.id === payload.id ? {
        status: 'publish',
      } : {
        status: 'hidden',
      },
    }))
  },
});

export default slice.reducer;

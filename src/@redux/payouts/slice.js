import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, payoutsActions, getPayoutDashboard } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, payoutsActions, {
  [getPayoutDashboard.fulfilled]: (state, { payload }) => {
    state.dashboard = payload
  },
});

export default slice.reducer;

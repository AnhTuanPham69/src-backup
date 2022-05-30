import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, periodsActions, clearData } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, periodsActions, {
  [clearData.fulfilled]: state => {
    state.ids = [];
    state.data = {};
  },
});

export default slice.reducer;

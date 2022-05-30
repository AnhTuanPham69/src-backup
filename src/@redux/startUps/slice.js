import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, startUpsActions, getProgramPhases, updateStartUp, clearProgramPhases } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, startUpsActions, {
  [getProgramPhases.fulfilled]: (state, { payload }) => {
    state.programPhases = payload.items;
  },
  [updateStartUp.fulfilled]: (state, { payload: { data } }) => {
    state.currentData = {
      ...state.currentData,
      user: {
        ...state.currentData.user,
        ...data,
      },
    }
  },
  [clearProgramPhases.fulfilled]: (state) => {
    state.programPhases = null;
  },
});

export default slice.reducer;

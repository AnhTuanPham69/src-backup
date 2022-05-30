import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, programsActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, programsActions);

export default slice.reducer;

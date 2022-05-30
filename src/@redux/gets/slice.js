import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, getsActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, getsActions);

export default slice.reducer;

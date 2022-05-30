import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, supportsActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, supportsActions);

export default slice.reducer;

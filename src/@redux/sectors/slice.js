import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, sectorsActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, sectorsActions);

export default slice.reducer;

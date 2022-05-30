import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, learnsActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, learnsActions);

export default slice.reducer;

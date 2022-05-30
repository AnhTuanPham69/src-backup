import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, businessesActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, businessesActions);

export default slice.reducer;

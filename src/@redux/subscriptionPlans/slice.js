import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, subscriptionPlansActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, subscriptionPlansActions);

export default slice.reducer;

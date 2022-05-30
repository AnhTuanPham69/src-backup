import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, activitiesActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, activitiesActions);

export default slice.reducer;

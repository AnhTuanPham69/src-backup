import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, questionnairesActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, questionnairesActions);

export default slice.reducer;

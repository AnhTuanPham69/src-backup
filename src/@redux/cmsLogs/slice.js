import { makeCRUDSlice } from '@redux/crudCreator';
import { MODEL_NAME, cmsLogsActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, cmsLogsActions);

export default slice.reducer;

import { configureStore } from '@reduxjs/toolkit'
import requestsSlice from '../features/requests/requestsSlice';
import editingSlice from '../features/requests/editingSlice';
import requestFormSlice from '../features/requests/requestFormSlice';

export default configureStore({
  reducer: {
    request: requestsSlice,
    editing: editingSlice,
    requestForm: requestFormSlice
  },
})
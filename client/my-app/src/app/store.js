import { configureStore } from '@reduxjs/toolkit'
import requestsSlice from '../features/requests/requestsSlice';
import editingSlice from '../features/requests/editingSlice';

export default configureStore({
  reducer: {
    request: requestsSlice,
    editing: editingSlice
  },
})
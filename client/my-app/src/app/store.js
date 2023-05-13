import { configureStore } from '@reduxjs/toolkit'
import requestsSlice from '../features/requests/requestsSlice';
import editingSlice from '../features/requests/editingSlice';
import requestFormSlice from '../features/requests/requestFormSlice';
import requestDialogSlice from '../features/requests/requestDialogSlice';
import authSlice from '../features/auth/authSlice';
import userSlice from '../features/auth/userSlice';
import profileDialogSlice from '../features/auth/profileDialogSlice'

export default configureStore({
    reducer: {
        request: requestsSlice,
        editing: editingSlice,
        requestForm: requestFormSlice,
        requestDialog: requestDialogSlice,
        auth: authSlice,
        user: userSlice,
        profile: profileDialogSlice
    },
})
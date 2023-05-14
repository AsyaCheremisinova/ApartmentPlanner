import { configureStore } from '@reduxjs/toolkit'
import requestsSlice from '../features/requests/requestsSlice';
import requestFormSlice from '../features/requests/requestFormSlice';
import requestDialogSlice from '../features/requests/requestDialogSlice';
import requestMessageSlice from '../features/requests/requestMessageSlice';
import authSlice from '../features/auth/authSlice';
import userSlice from '../features/auth/userSlice';
import profileDialogSlice from '../features/auth/profileDialogSlice'
import messageSlice from "../features/messageSlice"

export default configureStore({
    reducer: {
        request: requestsSlice,
        requestForm: requestFormSlice,
        requestDialog: requestDialogSlice,
        auth: authSlice,
        user: userSlice,
        profile: profileDialogSlice,
        message: messageSlice,
        requestMessage: requestMessageSlice,
    },
})
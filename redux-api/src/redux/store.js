import { configureStore } from "@reduxjs/toolkit";
import userSlice from './users/user'

const store = configureStore({
    reducer: {
        users: userSlice,
    }
});

export default store;
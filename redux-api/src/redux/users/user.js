import { createSlice } from "@reduxjs/toolkit"

const user = () => {
    const storedUser = localStorage.getItem('data');
    const userArray = JSON.parse(storedUser);

    const user = [
        {
            id:1,
            firstName:'Toyyib',
            lastName:'Bello',
        },
    ]

    if(storedUser){
        if(userArray.length !== 0){
            return userArray;
        }
        return user;
    }
    return user;
}

const initialState = {
    users: user(),
    isLoading: false,
    error: undefined,
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const firstName = action.payload[0];
            const lastName = action.payload[1];

            const user = {
                id:1,
                firstName: firstName,
                lastName: lastName,
            };

            state.users = [...state.users, user];
        }
    }
});

export const {
    addUser,
} = userSlice.actions

export default userSlice.reducer;

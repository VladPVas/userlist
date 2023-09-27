import usersSlice, { fetchUsers } from './slices/users.slice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
	users: usersSlice
})

export const store = configureStore({
	reducer: reducer,
})

store.dispatch(fetchUsers())
	
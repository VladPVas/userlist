import { createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { GetUserListRequest } from '../../shared/api/GetUserListRequest';
import { StoreDTO } from '../../shared/types/StoreDTO';
import { UserDTO } from '../../shared/types/UserDTO';

const initialState: StoreDTO = {
	data: [],
	filtredData: [],
	filters: [],
	loadingStatus: 'idle',
	selectedId: 0
}

export const fetchUsers = createAsyncThunk(
	'users/fetchUsers',
	async () => {
		const response: UserDTO[] = await GetUserListRequest()

		// return response
		
		const result: StoreDTO = {
			data: response,
			filtredData: response,
			filters: [],
			loadingStatus: '',
			selectedId: 0
		}

		console.log('fetched')
		console.log(result)

		return result
	}
)

function isFilter (item: unknown, filter: unknown[]) {
	if (filter.find(i => i === item) !== undefined) {
		return true
	} else {
		return false
	}
}

function filterDataByNames(filters: string[], data: UserDTO[]): UserDTO[] {
	const newData: UserDTO[] = data.filter((item) => {
		if (isFilter(item.name, filters)) {
			return item
		}
	})

	return newData
}

const usersAdapter = createEntityAdapter<StoreDTO>({
	selectId: (s) => s.selectedId
})

const usersSlice = createSlice({
	name: 'users',
	initialState: usersAdapter.getInitialState(initialState),
	reducers: {
		filterUsers: (state) => {
			const isAnyFilter: boolean = (state.filters !== undefined)

			if (isAnyFilter) {
				const newData = filterDataByNames(state.filters, state.data)
				state.filtredData = newData
			} else {
				state.filtredData = state.data
			}
		},
		addFilter: (state, {payload: filter}) => {
			state.filters = state.filters + filter
		},
		clearAllFilters: (state) => {
			state.filters = []
		},
		deleteFilterByName: (state, {payload: name}) => {
			const newFilters: string[] = state.filters.filter((item) => {
				if (!isFilter(item, name)) {
					return item
				}
			})

			state.filters = newFilters
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.loadingStatus = 'loading'
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				usersAdapter.setOne(state, action)
				state.loadingStatus = 'idle'
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.loadingStatus = 'failed'
				console.error(action.error);
			})
	}		
	
})

export const {addFilter, clearAllFilters, deleteFilterByName, filterUsers} = usersSlice.actions
export default usersSlice.reducer
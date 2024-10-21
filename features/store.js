import { configureStore, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

const userStateSlice = createSlice({
  name: 'userState',
  initialState: { isLoggedIn: false },
  reducers: {
    setUserState: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    clearUserState: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// Combine the reducers
const rootReducer = combineReducers({
  user: userSlice.reducer,
  userState: userStateSlice.reducer,
});

// Configure persist settings
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'userState'], // Only persist these slices
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
});

// Create the persistor
export const persistor = persistStore(store);

// Export actions
export const { setUser, clearUser } = userSlice.actions;
export const { setUserState, clearUserState } = userStateSlice.actions;

// Selectors
export const selectUser = (state) => state.user.user;
export const selectUserState = (state) => state.userState.isLoggedIn;

import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage


const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], 
};

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export const { setUser, clearUser } = userSlice.actions;
export const selectUser = (state) => state.user.user;

import { configureStore } from '@reduxjs/toolkit';
import formsReducer from './slice/formSlice';
import searchReducer from './slice/searchSlice';
// import { Api } from '../services/Api';

export const store = configureStore({
  reducer: {
    cards: formsReducer,
    search: searchReducer,
    // [Api.reducerPath]: Api.reducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

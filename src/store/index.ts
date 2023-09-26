import { configureStore } from '@reduxjs/toolkit';
import progressReducer from './progress-slice';

const store = configureStore({
  reducer: {
    progress: progressReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '@/core/store/root.reducer';
import rootSaga from '@/core/store/root.saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});

sagaMiddleware.run(rootSaga);

export type IRootState = ReturnType<typeof store.getState>;
export default store;

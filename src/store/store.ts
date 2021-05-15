import { configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import reducer from './reducers';
// import saga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const makeStore: MakeStore = () => {
  const store: Store = configureStore({
    reducer,
    middleware,
  });

  return store;
};

// sagaMiddleware.run(saga);

const wrapper = createWrapper(makeStore);

export default wrapper;

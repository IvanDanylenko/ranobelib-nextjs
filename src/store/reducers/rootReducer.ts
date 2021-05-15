import { AnyAction, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import authReducer from '@/store/slices/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});

type RootState = ReturnType<typeof rootReducer>;

const reducer = (state: RootState, action: AnyAction): RootState => {
  switch (action.type) {
    case HYDRATE:
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      return nextState;
    default:
      return rootReducer(state, action);
  }
};

export default reducer;

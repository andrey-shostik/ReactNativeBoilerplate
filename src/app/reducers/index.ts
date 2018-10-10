import { combineReducers } from 'redux';

import { IInitialState } from '../store/initialStateTypes';
import mockReducer from './mock.reducer';

export default combineReducers<IInitialState>({
    mockReducer
});

import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { initialState } from './state';

export const AppStoreModule = StoreModule.forRoot(reducers, { initialState });

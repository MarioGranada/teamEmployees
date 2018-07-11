import { Injectable } from '@angular/core';
import { select } from '@ngrx/store';
import * as actions from './store/actions';
import { BaseStore } from './store/base.store';
import { AppState } from './store/state';

@Injectable()
export class AppStore extends BaseStore<AppState> {
  // Action methods
  fecthSomething(payload?) {
    //this.dispatch(actions.someAction(payload));
  }

  // Selector methods
  getCurrentCompanyId() {
    //return this.pipe(select(selectors.someStoreChunk));
  }
}

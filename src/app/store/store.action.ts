import { Action } from '@ngrx/store';

export const SOMEACTION = '[User] someaction';

export interface SomeUserAction extends Action {
  readonly type: typeof SOMEACTION;

  payload: string;
}

export type UserAction = SomeUserAction;
